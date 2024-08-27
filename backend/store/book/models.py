from django.db import models

class ScamSMS(models.Model):
    label = models.CharField(max_length=255)
    text_length = models.IntegerField()
    text = models.TextField()

    class Meta:
        db_table = 'scam_sms'  # This tells Django to use the existing table
        managed = False  # This ensures Django does not try to create or modify this table
