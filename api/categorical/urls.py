from django.urls import path
from .views import *

urlpatterns = [
    path('classify', UploadView.as_view(), name = 'prediction'),
]