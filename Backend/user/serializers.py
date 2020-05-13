from .models import  User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('join_code','fullname','username','email','password','confirm_password')