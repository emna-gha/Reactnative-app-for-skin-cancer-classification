from rest_framework import serializers

from patientapi.models import Patient
from .models import Patient



class PatientSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=Patient
        fields = ('__all__')