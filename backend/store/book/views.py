from django.http import JsonResponse
from .models import ScamSMS
from django.db.models import Count
import random

def random_scam_sms(request):
    # # Get the total count of rows in the table
    # count = ScamSMS.objects.count()

    # # Generate a list of random indexes
    # random_indexes = random.sample(range(1, count+1), min(100, count))

    indexes = [119,164,179,198,258,374,377,530,549,592,641,647,683,748,820,
               838,855,867,900,940,956,1108,1358,1401,1427,1464,1491,1593,
               1607,1682,1692,1698,1704,1777,2068,2144,2183,2286,2409,2462,
               2482,2582,2662,2669,2679,2712,2737,2828,2834,2839,2901,2936,
               3044,3130,3210,3220,3264,3323,3327,3407,3440,3459,3578,3586,
               3593,3799,3903,3904,3926,3997,4046,4086,4089,4119,4132,4225,
               4369,4379,4384,4486,4613,4614,4645,4656,4749,4806,4839,4876,
               5026,5077,5102,5126,5166,5228,5251,5274,5336,5387,5442,5455,
               5501,5526]
    indexes_plus_one = [i + 1 for i in indexes]

    # Fetch 100 random rows using the generated random indexes
    data = list(ScamSMS.objects.filter(id__in=indexes_plus_one).values())

    return JsonResponse(data, safe=False)
