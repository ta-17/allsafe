FROM python:3.11.5-slim

# Prevents Python from writing pyc files.
ENV PYTHONDONTWRITEBYTECODE=1

# Keeps Python from buffering stdout and stderr.
ENV PYTHONUNBUFFERED=1

WORKDIR /store

# Install necessary build tools and libraries
RUN apt-get update && apt-get install -y \
    gcc \
    mariadb-client \
    default-libmysqlclient-dev \
    libffi-dev \
    python3-dev \
    && apt-get clean

# Upgrade pip
RUN pip install --upgrade pip

# Copy the requirements file into the container
COPY ./requirements.txt /store/requirements.txt

# Install the dependencies
RUN pip install -r /store/requirements.txt

# Copy the source code into the container.
COPY . .

# Set the Gunicorn command
CMD ["gunicorn", "--workers", "3", "--bind", "0.0.0.0:8000", "core.wsgi:application"]
