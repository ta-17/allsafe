from flask import Flask, request, jsonify
import torch
from transformers import BertTokenizer, BertForSequenceClassification

# Initialize the Flask app
app = Flask(__name__)

# Load the model and tokenizer (make sure your paths are correct)
model_path = "./"
tokenizer = BertTokenizer.from_pretrained(model_path)
model = torch.load("bert_model_optimized.pth")

# Set model to evaluation mode
model.eval()

# Define a prediction function
def predict(text, tokenizer, model):
    inputs = tokenizer(text, return_tensors="pt", max_length=128, truncation=True, padding="max_length")
    inputs = {key: value.to(model.device) for key, value in inputs.items()}

    with torch.no_grad():
        logits = model(**inputs).logits

    probabilities = torch.softmax(logits, dim=-1)
    predicted_probability, predicted_label = torch.max(probabilities, dim=-1)
    labels = ['normal', 'scam']
    return {
        'label': labels[predicted_label.item()],
        'probability': round(predicted_probability.item(), 4)
    }

# Define a route for the prediction API
@app.route('/predict', methods=['POST'])
def predict_route():
    # Get the input text from the request
    input_text = request.json.get("text", "")
    if input_text:
        # Get prediction
        result = predict(input_text, tokenizer, model)
        return jsonify(result)
    else:
        return jsonify({"error": "No text provided"}), 400

# Run the Flask app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
