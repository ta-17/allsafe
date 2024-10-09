# Required Libraries
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import KFold
from sklearn.metrics import accuracy_score, confusion_matrix, ConfusionMatrixDisplay
import matplotlib.pyplot as plt
import xgboost as xgb
import joblib
import os

def load_and_preprocess_data(file_path):
    """
    Load and preprocess the dataset.
    This function reads the data, scales the numerical features, and separates features from labels.
    
    Args:
    file_path (str): Path to the CSV file containing the dataset.

    Returns:
    X_scaled (DataFrame): Scaled feature set.
    y (Series): Target labels.
    """
    df = pd.read_csv(file_path)
    X = df.drop(columns=['fake'])  # Features
    y = df['fake']  # Target label

    # Scale numerical features to the range [0, 1]
    scaler = MinMaxScaler()
    X_scaled = pd.DataFrame(scaler.fit_transform(X), columns=X.columns)
    joblib.dump(scaler, 'scaler.save')  # Save the scaler for future use

    return X_scaled, y

def k_fold_cross_validation(X, y, params, k=5):
    """
    Perform K-Fold Cross-Validation for a given set of parameters using XGBoost.
    
    Args:
    X (DataFrame): Feature set.
    y (Series): Target labels.
    params (dict): XGBoost training parameters.
    k (int): Number of folds for K-Fold Cross-Validation.

    Returns:
    avg_accuracy (float): Average accuracy across all folds.
    final_model (xgb.Booster): Trained XGBoost model.
    """
    kf = KFold(n_splits=k, shuffle=True, random_state=42)
    accuracies = []
    final_model = None

    for train_index, test_index in kf.split(X):
        X_train, X_test = X.iloc[train_index], X.iloc[test_index]
        y_train, y_test = y.iloc[train_index], y.iloc[test_index]

        # Convert to DMatrix format required for XGBoost
        dtrain = xgb.DMatrix(X_train, label=y_train)
        dtest = xgb.DMatrix(X_test, label=y_test)

        # Train the XGBoost Model
        xgb_model = xgb.train(params, dtrain, num_boost_round=100)

        # Make predictions and evaluate accuracy
        y_pred = xgb_model.predict(dtest)
        y_pred_binary = [1 if pred > 0.5 else 0 for pred in y_pred]
        accuracy = accuracy_score(y_test, y_pred_binary)
        accuracies.append(accuracy)

        # Store the model for displaying the final confusion matrix
        final_model = xgb_model

    return sum(accuracies) / len(accuracies), final_model

def grid_search(X, y, param_grid, k=5):
    """
    Perform Grid Search to find the best hyperparameters using K-Fold Cross-Validation.
    
    Args:
    X (DataFrame): Feature set.
    y (Series): Target labels.
    param_grid (dict): Grid of hyperparameters to search.
    k (int): Number of folds for K-Fold Cross-Validation.

    Returns:
    best_params (dict): Best parameters found.
    final_model (xgb.Booster): Trained model with the best parameters.
    """
    best_params = None
    best_score = 0
    final_model = None

    # Generate all combinations of hyperparameters
    keys, values = zip(*param_grid.items())
    param_combinations = [dict(zip(keys, v)) for v in product(*values)]

    # Perform K-Fold Cross-Validation for each parameter set
    for params in param_combinations:
        score, model = k_fold_cross_validation(X, y, params, k=k)
        if score > best_score:
            best_score = score
            best_params = params
            final_model = model

    print(f"Best Parameters: {best_params}")
    print(f"Best Accuracy: {best_score:.4f}")
    return best_params, final_model

def display_confusion_matrix(model, X, y):
    """
    Display the confusion matrix for the provided model.
    
    Args:
    model (xgb.Booster): Trained XGBoost model.
    X (DataFrame): Feature set.
    y (Series): True labels.
    """
    # Make predictions using the trained model
    dmatrix = xgb.DMatrix(X)
    y_pred = model.predict(dmatrix)
    y_pred_binary = [1 if pred > 0.5 else 0 for pred in y_pred]

    # Generate and display the confusion matrix
    cm = confusion_matrix(y, y_pred_binary)
    disp = ConfusionMatrixDisplay(confusion_matrix=cm)
    disp.plot(cmap=plt.cm.Blues)
    plt.title("Confusion Matrix for the Selected Model")
    plt.show()

def save_model(model, file_name="best_xgb_model.json"):
    """
    Save the trained XGBoost model to a file.
    
    Args:
    model (xgb.Booster): Trained XGBoost model.
    file_name (str): Filename to save the model.
    """
    model.save_model(file_name)
    print(f"Model saved as {file_name}")

def load_model(file_name="best_xgb_model.json"):
    """
    Load a saved XGBoost model from a file.
    
    Args:
    file_name (str): Filename of the saved model.

    Returns:
    loaded_model (xgb.Booster): Loaded XGBoost model.
    """
    if os.path.exists(file_name):
        loaded_model = xgb.Booster()
        loaded_model.load_model(file_name)
        print(f"Model loaded from {file_name}")
        return loaded_model
    else:
        raise FileNotFoundError(f"Model file '{file_name}' not found.")

def predict_with_loaded_model(model, input_data):
    """
    Predict labels and their corresponding probabilities using the loaded model.
    
    Args:
    model (xgb.Booster): Loaded XGBoost model.
    input_data (DataFrame): Data for prediction.

    Returns:
    results (list): List of predicted labels and confidence percentages.
    """
    dmatrix = xgb.DMatrix(input_data)
    predictions = model.predict(dmatrix)

    # Convert predictions to binary labels and confidence percentages
    results = []
    for pred in predictions:
        label = 1 if pred > 0.5 else 0
        percentage = pred * 100 if label == 1 else (1 - pred) * 100
        results.append(f"Label: {label}, Confidence: {percentage:.2f}%")

    return results

# Main Execution
if __name__ == "__main__":
    # Load and preprocess the data
    X, y = load_and_preprocess_data("combined_accounts_kaggle.csv")

    # Define the hyperparameter grid
    param_grid = {
        'max_depth': [2, 3, 4, 5, 6],
        'learning_rate': [0.01, 0.05, 0.1, 0.15, 0.2],
        'subsample': [0.6, 0.7, 0.8, 1.0],
        'colsample_bytree': [0.5, 0.6, 0.7, 0.8, 1.0],
        'objective': ['binary:logistic'],
        'eval_metric': ['logloss'],
        'use_label_encoder': [False]
    }

    # Perform Grid Search to find the best model
    best_params, best_model = grid_search(X, y, param_grid, k=5)

    # Display the Confusion Matrix for the best model
    display_confusion_matrix(best_model, X, y)

    # Save the best model to a file
    save_model(best_model)
