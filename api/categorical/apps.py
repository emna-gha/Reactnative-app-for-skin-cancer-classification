from django.apps import AppConfig
import os
from django.apps import AppConfig
from django.conf import settings
from keras.models import load_model
from tensorflow import keras


class EnsembleModelConfig(AppConfig):
    name = 'ensembleAPI'
    MODEL_FILE = os.path.join(settings.MODELS, r"C:\Users\ghars\OneDrive\Bureau\application\ml\models\ensemble_classifier.h5")
    model = keras.models.load_model(MODEL_FILE)

class ResNetModelConfig(AppConfig):
    name = 'resnetAPI'
    MODEL_FILE = os.path.join(settings.MODELS, r"C:\Users\ghars\OneDrive\Bureau\application\ml\models\resnet50_weights.h5")
    model = keras.models.load_model(MODEL_FILE)

class VGGModelConfig(AppConfig):
    name = 'vggAPI'
    MODEL_FILE = os.path.join(settings.MODELS, r"C:\Users\ghars\OneDrive\Bureau\application\ml\models\vgg16_weights.h5")
    model = keras.models.load_model(MODEL_FILE)


class CategoricalConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'categorical'
