from django.contrib import admin
from .models import Crud 
# Register your models here.

@admin.register(Crud)

class Crudadmin(admin.ModelAdmin):
    list_display=['id','Name','Book_Name','Description']