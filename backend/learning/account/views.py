from django.shortcuts import render
from .models import StudentRegistration
from .serializers import StudentRegistrationSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets


class StudentRegistrationCreate(APIView):

    def get(self, request, format=None):
        student = StudentRegistration.objects.all()
        serializer = StudentRegistrationSerializer(student, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = StudentRegistrationSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

