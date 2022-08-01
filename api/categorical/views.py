import urllib
from django.shortcuts import render
import numpy as np
from .apps import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, JSONParser
import cloudinary.uploader
import matplotlib.pyplot as plt
import cv2
labels = ['BKL', 'BCC', 'BF', 'AKIEC', 'MEL', 'NV', 'VASC']
# Create your views here.
class UploadView(APIView):
    parser_classes = (
        MultiPartParser,
        JSONParser,
    )

    @staticmethod
    def post(request):
        file = request.data.get('picture')
        upload_data = cloudinary.uploader.upload(file)
        #print(upload_data)
        img = upload_data['url']


        #load models
        resnet_model = ResNetModelConfig.model
        vgg_model = VGGModelConfig.model
        ensemble_model= EnsembleModelConfig.model

        req = urllib.request.urlopen(img)
        arr = np.asarray(bytearray(req.read()), dtype=np.uint8)
        image = cv2.imdecode(arr, -1) # 'Load it as it is'
        #image = cv2.imread('upload_chest.jpg') # read file 
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB) # arrange format as per keras
        image = cv2.resize(image,(128,96))
        image = np.array(image) / 255
        image = np.expand_dims(image, axis=0)

        ensemble_pred = ensemble_model.predict(image)
        probability = ensemble_pred[0]
        
        arr = np.max(ensemble_pred)
        result = np.where(ensemble_pred == np.amax(ensemble_pred))
        print(arr)
        print(result)
        max = np.argmax(ensemble_pred)
        print(max)

        print(labels[max])
        ensemble_model_pred = str('%.2f' % (arr*100) +'  '+ labels[max])
       
        #print(resnet_chest_pred)

        vgg_pred = vgg_model.predict(image)
        probability = vgg_pred[0]
        #print("VGG Predictions:")
        arr = np.max(vgg_pred)
        result = np.where(vgg_pred == np.amax(vgg_pred))
        print(arr)
        print(result)
        max = np.argmax(vgg_pred)
        print(max)

        print(labels[max])
        vgg_model_pred = str('%.2f' % (arr*100) +'  '+ labels[max])
        #print(vgg_chest_pred)

        resnet_pred = resnet_model.predict(image)
        probability = resnet_pred[0]
        #print("Inception Predictions:")
        arr = np.max(resnet_pred)
        result = np.where(resnet_pred == np.amax(resnet_pred))
        print(arr)
        print(result)
        max = np.argmax(resnet_pred)
        print(max)

        print(labels[max])
        resnet_model_pred = str('%.2f' % (arr*100) + '   '+ labels[max])
        
        
        return Response({
            'status': 'success',
            'data': upload_data,
            'url':img,
            'ensemble_model_pred':ensemble_model_pred,
            'vgg_model_pred':vgg_model_pred,
            'resnet_model_pred':resnet_model_pred,
        }, status=201)

