from django.urls import path
from rest_framework import routers 
from .api import ImageViewSet

router = routers.DefaultRouter()
router.register('',ImageViewSet, 'images')
urlpatterns = router.urls