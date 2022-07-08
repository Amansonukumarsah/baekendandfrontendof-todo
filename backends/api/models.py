from django.db import models

# Create your models here.

class Crud(models.Model):
    Name=models.CharField(max_length=30)
    Book_Name=models.CharField(max_length=100)
    Description=models.CharField(max_length=400)