from .models import Images
from rest_framework import generics, viewsets, permissions
from rest_framework.response import Response
from .serializers import ImagesSerializer

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Images.objects.all()
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ImagesSerializer