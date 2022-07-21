from rest_framework import serializers
from .models import Image


class ImageSerializer(serializers.ModelSerializer):

    date_time =serializers.DateTimeField()
    source = serializers.CharField(max_length = 100)
    area = serializers.CharField() 
    comment =serializers.CharField()
   

    class Meta:
        model=Image
        fields=['date_time', 'source','area','comment']

