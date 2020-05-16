from rest_framework import serializers
from .models import CustomUser
from rest_framework import exceptions
from django.contrib.auth import authenticate ,login

class  CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model  =CustomUser
        fields =  "__all__"

class LoginSerializer(serializers.Serializer):
    username=serializers.CharField()
    password=serializers.CharField()

    def validate(self,data):
        username=data.get("username","")
        password=data.get("password","")
         
        if username and password:
            user=authenticate(username=username,password=password)
            if user:
                if user.is_active:
                    data["user"] = user
                else:
                    msg="User is deactivated."
                    raise exceptions.ValidationError(msg)
            else:
                msg="unable to login with given credentials"
                raise exceptions.ValidationError(msg)
        else:
            msg="Must provide username and password both."
            raise exceptions.validationError(msg)

        return data