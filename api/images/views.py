from django.views.generic import ListView
from .models import Images

from email.mime import image
from django.shortcuts import render

# Create your views here.

from django.shortcuts import render,get_object_or_404
from .models import Image
from rest_framework import generics,status
from . import serializers
from rest_framework.response import Response 
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import get_user_model
from drf_yasg.utils import swagger_auto_schema


User=get_user_model()

class ImageView(generics.GenericAPIView):
    serializer_class=serializers.ImagesSerializer
    permission_classes=[IsAuthenticated]

    @swagger_auto_schema(operation_summary="Get all images")
    def get(self,request):
        images=Images.objects.all()

        serializer=self.serializer_class(instance=images,many=True)

        return Response(data=serializer.data,status=status.HTTP_200_OK)
        
    @swagger_auto_schema(operation_summary="Create an image")
    def post(self,request):
        data=request.data

        serializer=self.serializer_class(data=data)

        if serializer.is_valid():
            serializer.save(customer=request.user)

            print(f"\n {serializer.data}")

            return Response(data=serializer.data,status=status.HTTP_201_CREATED)

        return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)   


class ImageIdView(generics.GenericAPIView):
    serializer_class=serializers.ImagesSerializer
    permission_classes=[IsAuthenticated]

    @swagger_auto_schema(operation_summary="View the detail of an image by its ID")
    def get(self, request,image_id):


        image =get_object_or_404(Images,pk=image_id)

        
        serializer=self.serializer_class(instance=image)

        return Response(data=serializer.data,status=status.HTTP_200_OK)

    @swagger_auto_schema(operation_summary="Update an image by its ID")
    def put(self,request,image_id):
        
        image=get_object_or_404(Images,pk=image_id)
        
        serializer=self.serializer_class(instance=image,data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(data=serializer.data,status=status.HTTP_200_OK)

        return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(operation_summary="Delete an image by its ID")
    def delete(self, request,image_id):
        
        image =get_object_or_404(Images,id=image_id)

        image.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)


class UserImagesView(generics.GenericAPIView):
    serializer_class=serializers.ImagesSerializer
    permission_classes=[IsAuthenticated]

    @swagger_auto_schema(operation_summary="Get all images made by a specific dermatologist")
    def get(self,request,user_id):
        user=User.objects.get(pk=user_id)

        images =Images.objects.all().filter(customer=user)

        serializer=self.serializer_class(instance=images,many=True)

        return Response(data=serializer.data,status=status.HTTP_200_OK)

class UserImageDetailView(generics.GenericAPIView):
    serializer_class=serializers.ImagesSerializer
    permission_classes=[IsAuthenticated]

    @swagger_auto_schema(operation_summary="Get the detail of an image made by a specific dermatologist")
    def get(self,request,user_id,image_id):
        user=User.objects.get(pk=user_id)

        image =Images.objects.all().filter(customer=user).filter(pk=image_id)


        serializer=self.serializer_class(instance=image)

        return Response(data=serializer.data,status=status.HTTP_200_OK)
    
class ImagesListView(ListView):
    model = Images