from django.http import JsonResponse
from .models import ScamSMS
from django.db.models import Count
import random

def random_scam_sms(request):
    # Get the total count of rows in the table
    count = ScamSMS.objects.count()

    # Generate a list of random indexes
    random_indexes = random.sample(range(1, count+1), min(100, count))

    # Fetch 100 random rows using the generated random indexes
    data = list(ScamSMS.objects.filter(id__in=random_indexes).values())

    return JsonResponse(data, safe=False)
