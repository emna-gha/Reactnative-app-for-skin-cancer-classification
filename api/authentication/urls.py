from django.contrib import admin
from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
from .views import LoginView 



urlpatterns = [
    #path('admin/', admin.site.urls),
    path('signup/',views.UserSerializer.as_view(),name='sign_up'),
    #path('login/',views.LoginAPI().as_view(),name='login'),
    path('dermatologists/', views.UserList.as_view()),
    path('dermatologists/<int:pk>/', views.UserDetail.as_view()),
     path("login/", views.LoginView.as_view(), name="login"),
    path("jwt/create/", TokenObtainPairView.as_view(), name="jwt_create"),
    path("jwt/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("jwt/verify/", TokenVerifyView.as_view(), name="token_verify"),
    
   
   
]
