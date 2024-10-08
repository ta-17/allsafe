# Import necessary libraries
import pandas as pd
import torch
from torch.utils.data import Dataset
from torch.nn import CrossEntropyLoss
from transformers import BertTokenizer, BertForSequenceClassification, Trainer, TrainingArguments, get_scheduler
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, precision_recall_fscore_support, confusion_matrix
import numpy as np
from sklearn.utils.class_weight import compute_class_weight
import warnings
warnings.filterwarnings('ignore')

# Step 1: Load the Dataset
# Load the combined dataset from CSV
dataset_path = 'complete_data.csv'  # Update this to your dataset file path
df = pd.read_csv(dataset_path)

# Step 2: Split the Dataset into Training and Validation Sets
# Use an 80-20 split for training and validation
train_df, val_df = train_test_split(df, test_size=0.2, random_state=42)

# Step 3: Define a Custom Dataset Class for Scam Message Classification
class ScamMessageDataset(Dataset):
    def __init__(self, texts, labels, tokenizer, max_len=128):
        """
        Custom dataset class to process text and labels.
        Args:
            texts (list): List of text messages.
            labels (list): Corresponding labels for each text.
            tokenizer (BertTokenizer): BERT tokenizer for encoding the texts.
            max_len (int): Maximum sequence length for BERT input.
        """
        self.texts = texts
        self.labels = labels
        self.tokenizer = tokenizer
        self.max_len = max_len

    def __len__(self):
        """Return the number of samples in the dataset."""
        return len(self.texts)

    def __getitem__(self, index):
        """Fetch a single sample and its corresponding label."""
        text = self.texts[index]
        label = self.labels[index]

        # Tokenize and encode the text using BERT tokenizer
        encoding = self.tokenizer.encode_plus(
            text,
            add_special_tokens=True,
            max_length=self.max_len,
            return_token_type_ids=False,
            padding='max_length',
            truncation=True,
            return_attention_mask=True,
            return_tensors='pt',
        )
        return {
            'input_ids': encoding['input_ids'].flatten(),
            'attention_mask': encoding['attention_mask'].flatten(),
            'labels': torch.tensor(label, dtype=torch.long)
        }


# Step 4: Initialize Tokenizer and Model
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=2)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)  # Move model to the selected device

# Step 5: Create Training and Validation Dataset Instances
max_len = 128
train_dataset = ScamMessageDataset(
    train_df['text'].to_numpy(),
    train_df['label'].to_numpy(),
    tokenizer,
    max_len
)

val_dataset = ScamMessageDataset(
    val_df['text'].to_numpy(),
    val_df['label'].to_numpy(),
    tokenizer,
    max_len
)

# Step 6: Define Evaluation Metrics Function
def compute_metrics(eval_pred):
    """
    Compute accuracy, F1 score, precision, and recall for the model.
    Args:
        eval_pred (tuple): A tuple containing logits and labels.
    Returns:
        dict: Dictionary of calculated metrics.
    """
    logits, labels = eval_pred
    predictions = np.argmax(logits, axis=-1)
    precision, recall, f1, _ = precision_recall_fscore_support(labels, predictions, average='binary')
    acc = accuracy_score(labels, predictions)

    # Confusion Matrix
    cm = confusion_matrix(labels, predictions)
    print("Confusion Matrix:\n", cm)

    return {
        'accuracy': acc,
        'f1': f1,
        'precision': precision,
        'recall': recall,
    }

# Step 7: Compute Class Weights to Address Imbalance
class_weights = compute_class_weight('balanced', classes=np.unique(train_df['label']), y=train_df['label'])
class_weights = torch.tensor(class_weights, dtype=torch.float).to(device)  # Convert to tensor and move to the correct device

# Step 8: Define Custom Trainer Class for Weighted Loss
class WeightedTrainer(Trainer):
    def compute_loss(self, model, inputs, return_outputs=False):
        """Override loss function to apply class weights."""
        labels = inputs.pop("labels")
        outputs = model(**inputs)
        logits = outputs.logits

        # Compute weighted loss using class weights
        loss_fct = CrossEntropyLoss(weight=class_weights)
        loss = loss_fct(logits, labels)

        return (loss, outputs) if return_outputs else loss

# Step 9: Set Training Arguments
training_args = TrainingArguments(
    output_dir='./results',
    num_train_epochs=3,
    per_device_train_batch_size=32,
    per_device_eval_batch_size=32,
    warmup_steps=500,
    weight_decay=0.01,
    logging_dir='./logs',
    logging_steps=10,
    evaluation_strategy="steps",
    eval_steps=100,
    save_steps=100,
    load_best_model_at_end=True
)

optimizer = torch.optim.AdamW(model.parameters(), lr=2e-6)  # Define AdamW optimizer
num_training_steps = len(train_dataset) * training_args.num_train_epochs
lr_scheduler = get_scheduler(
    name="cosine", optimizer=optimizer, num_warmup_steps=0, num_training_steps=num_training_steps
)

# Step 10: Initialize the Trainer
trainer = WeightedTrainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    eval_dataset=val_dataset,
    compute_metrics=compute_metrics,
    optimizers=(optimizer, lr_scheduler)  # Use custom optimizer and scheduler
)

# Step 11: Train the Model
trainer.train()

# Step 12: Save the Final Model and Tokenizer
trainer.save_model('./final_model')
tokenizer.save_pretrained('./final_tokenizer')

# Step 13: Display Final Evaluation Metrics
trainer.evaluate()
