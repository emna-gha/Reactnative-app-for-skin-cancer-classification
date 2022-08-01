from .models import Visit
from rest_framework import generics, viewsets, permissions
from rest_framework.response import Response
from .serializers import VisitSerializer

class VisitViewSet(viewsets.ModelViewSet):
    queryset = Visit.objects.all()
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = VisitSerializer