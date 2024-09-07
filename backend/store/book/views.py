from django.http import JsonResponse
from .models import ScamSMS
from django.db.models import Count
import random

def random_scam_sms(request):
    # # Get the total count of rows in the table
    # count = ScamSMS.objects.count()

    # # Generate a list of random indexes
    # random_indexes = random.sample(range(1, count+1), min(100, count))

    indexes = [165, 259, 375, 834, 1688, 1765, 2645, 4571, 5028, 530, 895, 
      935, 1102, 1694, 2052, 2460, 3296, 3546, 5199, 5400]
    # indexes_plus_one = [i - 1 for i in indexes]

    # Fetch 100 random rows using the generated random indexes
    data = list(ScamSMS.objects.filter(id__in=indexes).values())

    return JsonResponse(data, safe=False)
