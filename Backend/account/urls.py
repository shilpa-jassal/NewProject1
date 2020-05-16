from . import views
from django.urls import path, include
from .views import (LoginView,LogoutView)
urlpatterns = [
    path('user/list/',views.CustomUserCreate.as_view()),
    path('api/v1/auth/login/',LoginView.as_view()),
    path('api/v1/auth/logout/',LogoutView.as_view())
]