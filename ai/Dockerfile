# Start from a minimal Python base image
FROM python:3.11.5-slim

# Install PyTorch, Transformers, and Flask with only CPU support
RUN pip install --no-cache-dir torch==2.0.1+cpu -f https://download.pytorch.org/whl/cpu/torch_stable.html\
 && pip install --no-cache-dir transformers==4.44.2\
 && pip install --no-cache-dir numpy==1.26.4\
 && pip install --no-cache-dir flask==2.3.2

# Set the working directory in the container
WORKDIR /app

# Copy files into the container
COPY . .

# Expose port 5000 for Flask
EXPOSE 5000

# Set the default command to run the Flask server
CMD ["python", "scam_pytorch.py"]
