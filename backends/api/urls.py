from django.urls import path
from api import views

urlpatterns = [
    path('crud/',views.Crudview),
    path('crud/<int:pk>/',views.Crudview),
]
