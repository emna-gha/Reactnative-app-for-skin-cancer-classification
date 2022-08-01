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
        cnn_binary = CNNModelConfig.model
        
        req = urllib.request.urlopen(img)
        arr = np.asarray(bytearray(req.read()), dtype=np.uint8)
        image = cv2.imdecode(arr, -1) # 'Load it as it is'
        #image = cv2.imread('upload_chest.jpg') # read file 
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB) # arrange format as per keras
        image = cv2.resize(image,(224,224))
        image = np.array(image) / 255
        image = np.expand_dims(image, axis=0)

        binary_pred = cnn_binary.predict(image)
        probability = binary_pred[0]
        print("binary cnn Predictions:")
        if probability[0] > 0.5:
            cnn_binary_pred = str('%.2f' % (probability[0]*100) + '% Malignant') 
        else:
            cnn_binary_pred = str('%.2f' % ((1-probability[0])*100) + '% Begnin')
        print(cnn_binary_pred)
        
        return Response({
            'status': 'success',
            'data': upload_data,
            'url':img,
            
            'cnn_binary_pred':cnn_binary_pred,
        }, status=201)
    