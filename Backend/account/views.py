from .models import CustomUser
from .serializers import CustomUserSerializer,LoginSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth import login as django_login,logout as django_logout
class CustomUserCreate(generics.ListCreateAPIView):
    queryset =  CustomUser.objects.all()
    serializer_class = CustomUserSerializer


class LoginView(APIView):
    def post(self,request):
        serializer=LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.validated_data["user"]
        django_login(request,user)
        token, created=Token.objects.get_or_create(user=user)
        return Response({"token":token.key},status=200)

class LogoutView(APIView):
    authentication_classes=(TokenAuthentication,)
    def post(self,request):
        django_logout(request)

        return Response(status=204)