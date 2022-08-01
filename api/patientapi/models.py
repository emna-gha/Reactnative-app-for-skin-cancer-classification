from django.db import models
# Create your models here.

class Patient (models.Model):
    first_name = models.CharField(max_length= 50)
    last_name = models.CharField(max_length= 50)
    birth_date = models.DateTimeField()
    #gender = models.TextChoices('gender', 'MALE FEMALE')
    gender=(
        ('MALE','Male'),
        ('FEMALE','Female'),
    )
    email = models.EmailField()
    created_on =  models.DateTimeField(auto_now_add=True)
    updated_on= models.DateTimeField(auto_now=True)
    phone = models.IntegerField()
    
    def __str__(self):
        return self.first_name +' '+ self.last_name
