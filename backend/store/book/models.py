from django.db import models

# Create your models here.
class Book (models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    content = models.TextField()
    pub_date = models.DateField()


class QuizData(models.Model):
    # Define the fields according to your database schema
    # For example:
    question = models.CharField(max_length=255)
    answer = models.TextField()

    def __str__(self):
        return self.question
