from django.db import models
from visitapi.models import Visit 

# Create your models here.
class Image (models.Model):
    date_time = models.DateTimeField()
    source = models.CharField(max_length= 100)
    area = models.TextField() 
    comment = models.TextField()
    created  = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    visit = models.ForeignKey( Visit,  on_delete=models.CASCADE)
    visit = models.OneToOneField(Visit, on_delete=models.CASCADE)
    
    
   