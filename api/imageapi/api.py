from .models import Image
from rest_framework import generics, viewsets, permissions
from rest_framework.response import Response
from .serializers import ImageSerializer

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ImageSerializer