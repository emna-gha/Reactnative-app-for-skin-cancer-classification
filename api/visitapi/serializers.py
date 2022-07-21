from rest_framework import serializers
from authentication.serializers import UserCreationSerializer
from patientapi.serializers import PatientSerializer
from .models import Visit


class VisitSerializer(serializers.ModelSerializer):
   
    
    datevisit = serializers.DateTimeField()
    notes = serializers.CharField(max_length=100)
    patient= PatientSerializer
    dermatologist= UserCreationSerializer
   

    class Meta:
        model=Visit
        fields=['datevisit', 'notes','patient','dermatologist']

