from distutils.command.upload import upload
from django.db import models
from django.utils import timezone
import os
import uuid

#def user_directory_path(instance,filename):
    #return 'images/{0}/'.format(filename)
from django.contrib.auth import get_user_model
User = get_user_model()

def user_directory_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return os.path.join('images/{0}/', filename)
    
class Category(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
    
    
class Images(models.Model):
    options = (
        ('active','Active'),
        ('deactivated','Deactivated'),
    )
    
    category = models.ForeignKey(Category, on_delete = models.PROTECT,default=1)
    title = models.CharField(max_length=250)
    alt = models.TextField(null=True)
    image = models.ImageField( upload_to=user_directory_path,default='post/default.jpg')
    slug=models.SlugField(max_length=250,unique_for_date='created')
    created = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(
        User,on_delete=models.PROTECT,related_name='author')
    status = models.CharField(max_length=11,choices=options,default='active')
    comment = models.CharField(max_length=250,null=True)
    
    
    