from django.http import JsonResponse
from django.db import connection
from .models import ScamSMS
from .models import HistoricalScam
# from django.db.models import Count
# import random

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
        # Execute raw SQL to fetch all data from 'historical_scam' table
        cursor.execute("SELECT * FROM historical_scam")
        columns = [col[0] for col in cursor.description]  # Get column names
        data = [
            dict(zip(columns, row))
            for row in cursor.fetchall()
        ]  # Combine column names and row values into a dictionary

    return JsonResponse(data, safe=False)
