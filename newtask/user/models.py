from django.db import models


# Create your models here.
class User(models.Model):
    join_code=models.CharField('Join Code',max_length=100)
    fullname=models.CharField('Full Name',max_length=100)
    username=models.CharField('User Name',max_length=100)
    email=models.CharField('User Email',max_length=100)
    password= models.CharField("User Password",max_length=200)
    confirm_password=models.CharField('Confirm Password',max_length=100)
