# Use the official Python image from the Docker Hub as the base image
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# # Copy the requirements.txt file into the container
# COPY requirements.txt .

# # Install Python dependencies specified in the requirements.txt
# RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire application code into the container
COPY . .

# Expose port 5000 to allow access to the Flask app
EXPOSE 8000

# Command to run the application
CMD ["python", "-m","http.server","8000"]
