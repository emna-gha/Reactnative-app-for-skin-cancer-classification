from django.db import models
from patientapi.models import Patient 
from django.contrib.auth import get_user_model



User=get_user_model()
# Create your models here.
class Visit (models.Model):
    datevisit = models.DateTimeField()
    notes = models.TextField(blank=True,max_length=100)
    created_on=  models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    dermatologist = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return str(self.datevisit)