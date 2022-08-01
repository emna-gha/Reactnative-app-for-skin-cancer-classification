from django.apps import AppConfig

import os
from django.conf import settings
from tensorflow import keras

from keras.models import load_model

class CNNModelConfig(AppConfig):
    name = 'binaryAPI'
    MODEL_FILE = os.path.join(settings.MODELS, r"C:\Users\ghars\OneDrive\Bureau\application\ml\models\model1.h5")
    model = keras.models.load_model(MODEL_FILE)

class BinaryConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'binary'
