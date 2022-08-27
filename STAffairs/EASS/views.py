from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect
from django.http import JsonResponse
import json
from .models import Student
from django.db.models import Q
# Create your views here.

@csrf_protect
def search(request):
    print('HELOOOO')
    data = json.loads(request.body)
    print(data)
    print(data["name"])
    stu= Student.objects.all()
    stu=stu.filter(name=data["name"])
    if data["department"] != 'All':
        stu = stu.filter(department=data["department"])

    if data["level1"] is False:
        stu=stu.exclude(level='First')

    if data["level2"] is False:
        stu=stu.exclude(level='Second')

    if data["level3"] is False:
        stu=stu.exclude(level='Third')

    if data["level4"] is False:
        stu=stu.exclude(level='Fourth')

    stat1=data["status1"]
    stat2=data["status2"]
    stat3=data["status3"]
    if stat1 is True:
        stu=stu.filter(status='active')
    elif stat2 is True:
        stu=stu.filter(status='inactive')
    response = stu.values()
    response_list = list(response)
    return JsonResponse(response_list, safe=False)