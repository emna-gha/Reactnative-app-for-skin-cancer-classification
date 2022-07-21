from django.urls import path
from rest_framework import routers 
from .api import PatientViewSet

router = routers.DefaultRouter()
router.register('',PatientViewSet, 'patients')
urlpatterns = router.urls