from .models import Patient
from rest_framework import generics, viewsets, permissions
from rest_framework.response import Response
from .serializers import PatientSerializer

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = PatientSerializer