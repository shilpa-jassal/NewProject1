from rest_framework import serializers
from .models import StudentRegistration


class StudentRegistrationSerializer(serializers.ModelSerializer):

    class Meta:
        model = StudentRegistration
        fields = "__all__"