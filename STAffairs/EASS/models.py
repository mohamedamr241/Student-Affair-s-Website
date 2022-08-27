from django.db import models
from django.db.models import Model
# Create your models here.
class Departments(models.Model):
    D_name=models.CharField(max_length=24,primary_key=True)
    
class Student(models.Model):
    gndr=[
        ('m','Male'),('f','Female'),
        ]
    lvl=[
        ('First','First Level'),
        ('Second','Second Level'),
        ('Third','Third Level'),
        ('Fourth','Fourth Level'),
    ]
    stats=[
        ('active','Active'),
        ('inactive','Inactive'),
    ]
    name = models.CharField(max_length=40)
    ID   = models.CharField(max_length=8 ,primary_key=True)
    gpa=models.FloatField()
    birthdate=models.DateField(null=True,blank=True)
    phone_number=models.CharField(max_length=11)
    email=models.EmailField(null=True,blank=True)
    gender =models.CharField(max_length=6,choices=gndr)
    status=models.CharField(max_length=8,choices=stats)
    level=models.CharField(max_length=12,choices=lvl)
    department=models.ForeignKey(Departments, on_delete=models.SET_NULL,null=True,blank=True)
    
