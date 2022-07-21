from django.urls import path
from rest_framework import routers 
from .api import VisitViewSet

router = routers.DefaultRouter()
router.register('',VisitViewSet, 'visits')
urlpatterns = router.urls