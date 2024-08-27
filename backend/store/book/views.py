from django.http import JsonResponse
from .models import QuizData

def quiz_data(request):
    # Fetch 100 rows from the QuizData model
    data = list(QuizData.objects.all()[:100].values())
    return JsonResponse(data, safe=False)
