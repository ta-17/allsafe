from django.http import JsonResponse

def quiz_data(request):
    data = {"message": "you reached /quiz-data"}
    return JsonResponse(data)
