from django.http import JsonResponse
from django.db import connection
from .models import ScamSMS
# from .models import HistoricalScam
# from django.db.models import Count
# import random
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
import json
import os
import json
import pandas as pd
import numpy as np
import xgboost as xgb
import re
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

def random_scam_sms(request):
    # # Get the total count of rows in the table
    # count = ScamSMS.objects.count()

    # # Generate a list of random indexes
    # random_indexes = random.sample(range(1, count+1), min(100, count))

    indexes = [259, 375, 834, 1688, 1765, 2645, 4571, 5028, 530, 895, 
      935, 1102, 1482, 1694, 2052, 2460, 3296, 3546, 5199, 5400]
    # indexes_plus_one = [i - 1 for i in indexes]

    # Fetch rows using the indexes
    data = list(ScamSMS.objects.filter(id__in=indexes).values())

    return JsonResponse(data, safe=False)

def all_historical_scam(request):
    with connection.cursor() as cursor:
        # Execute raw SQL to fetch filtered data from 'historical_scam' table
        cursor.execute(
            "SELECT * FROM historical_scam WHERE age IN ('18 - 24', '25 - 34')"
        )
        columns = [col[0] for col in cursor.description]  # Get column names
        data = [
            dict(zip(columns, row))
            for row in cursor.fetchall()
        ]  # Combine column names and row values into a dictionary

    return JsonResponse(data, safe=False)

def text_analysis(text):
    check_url = False
    check_phone = False
    check_email = False
    bank_bsb = False
    bank_account = False
    check_bank = False

    # Replace non-standard spaces (like non-breaking spaces) and control characters with a regular space
    text = re.sub(r'[\u00A0\u200B]+', ' ', text)

    # Replace multiple spaces with a single space
    text = re.sub(r'\s+', ' ', text)

    # Split words by a space from input text
    words = text.split(" ")

    # Remove punctuation function
    def remove_punctuation(word):
        return re.sub(r'[.,!?;:]+$', '', word)

    # Get cleaned words
    cleaned_words = [remove_punctuation(word) for word in words]

    ## Set patterns for content checking
    # Set improved URL pattern
    pattern_potential_url = r'(https?://)?([\w\-]+\.)+[a-zA-Z]{2,}(/[^\s]*)?'

    # Updated phone pattern to match various phone formats
    pattern_phone = r'(\+?\d{1,2}[\s-]?)?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{4}'

    # Set email pattern
    pattern_email = r'((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$'

    # Set bank account pattern
    pattern_bsb = r'^\d{6}$'
    pattern_account = r'^\d{8}$'

    # Check each word with different patterns
    for word in cleaned_words:

        # 1. Check if potential web link exists
        if re.match(pattern_potential_url, word):
            check_url = True

        # 2. Check if potential phone number is valid
        elif re.match(pattern_phone, word):
            check_phone = True

        # 3. Check if potential email is valid
        elif re.match(pattern_email, word):
            check_email = True

        # 4. Check if potential bank account exists
        elif re.match(pattern_bsb, word): # BSB
            bank_bsb = True

        elif re.match(pattern_account, word): # Bank Account
            bank_account = True

    # 4. Final check if a potential bank account exists or not
    if bank_bsb and bank_account:
        check_bank = True

    # 5. Prepare the result dictionary
    result_dict = {'link': check_url, 'phone': check_phone, 'email': check_email, 'bank_account': check_bank}

    return result_dict

@csrf_exempt
@require_POST
def predict(request):
    try:
        # Parse the request body
        data = json.loads(request.body)
        scam_text = data.get("text", "")

        # Run text analysis to check for URLs, phone numbers, emails, and bank account information
        analysis_result = text_analysis(scam_text)

        # Combine the prediction and text analysis results
        response = {**analysis_result}

        return JsonResponse(response)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)

# Load the XGBoost model and scaling parameters once during startup
xgb_model = xgb.Booster()
model_path = os.path.join(os.path.dirname(__file__), "models/best_xgb_model.json")
scaling_params_path = os.path.join(os.path.dirname(__file__), "models/scaling_params.json")

xgb_model.load_model(model_path)

# Load scaling parameters
with open(scaling_params_path, "r") as f:
    scaling_params = json.load(f)

# Extract scaling parameters
min_vals = np.array(scaling_params["min"])
max_vals = np.array(scaling_params["max"])
feature_columns = scaling_params["columns"]

def scale_input_data(input_data, min_vals, max_vals, feature_columns):
    # Ensure the input data columns are in the same order as the training data
    input_data = input_data[feature_columns]

    # Convert to numpy array and apply min-max scaling formula
    scaled_data = (input_data.values - min_vals) / (max_vals - min_vals)
    return pd.DataFrame(scaled_data, columns=input_data.columns)

def predict_xgboost(input_data, model, min_vals, max_vals, feature_columns):
    # Manually scale the input data using min and max values
    scaled_data = scale_input_data(input_data, min_vals, max_vals, feature_columns)

    # Convert scaled data to DMatrix format for XGBoost
    dmatrix = xgb.DMatrix(scaled_data)

    # Get predictions from XGBoost
    predictions = model.predict(dmatrix)

    # Convert numpy types to Python native types for JSON serialization
    results = []
    for pred in predictions:
        label = "Fake" if pred > 0.5 else "Normal"  # Label as "Fake" or "Normal"
        confidence = round(pred if label == "Fake" else (1 - pred), 4)  # Round confidence to 4 decimal places
        results.append({"label": label, "confidence": confidence})

    return results

@csrf_exempt
@require_POST
def insta(request):
    try:
        # Parse the request body
        data = json.loads(request.body)

        # Convert the incoming JSON data to a DataFrame for prediction
        input_df = pd.DataFrame([data])  # Create a single-row DataFrame

        # Use the XGBoost model to make a prediction
        prediction_result = predict_xgboost(input_df, xgb_model, min_vals, max_vals, feature_columns)

        # Return the prediction result
        return JsonResponse({"prediction": prediction_result})
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)
