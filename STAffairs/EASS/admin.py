from django.contrib import admin
from .models import Student
from .models import Departments
# Register your models here.
admin.site.register(Student)
admin.site.register(Departments)