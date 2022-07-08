from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Crud
from .serializers import CrudSerializer

# Create your views here.


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def Crudview(request, pk=None):
    if request.method == 'GET':
        id = pk
        print(id)
        if id is not None:
            print("id...",id)
            crud = Crud.objects.get(id=id)
            print(crud.Name)
            serializer = CrudSerializer(crud)
            return Response(serializer.data)

        crud = Crud.objects.all()
        serializer = CrudSerializer(crud, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = CrudSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'Data Created'})
        return Response(serializer.errors)

    if request.method == 'PUT':
        id = pk
        crud = Crud.objects.get(pk=id)
        serializer = CrudSerializer(crud, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'Data Updated'})
        return Response(serializer.errors)

    if request.method == 'DELETE':
        id = pk
        # id = request.data.get('id')
        crud = Crud.objects.get(pk=id)
        crud.delete()
        return Response({'msg': 'Data Deleted'})
