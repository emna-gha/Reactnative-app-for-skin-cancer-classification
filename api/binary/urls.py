from django.urls import path
from .views import *

urlpatterns = [
    path('prediction/', UploadView.as_view(), name = 'prediction'),
   
]