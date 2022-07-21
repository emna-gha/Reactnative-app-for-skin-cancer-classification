# Skin cancer react-native app
This project is part of a end-of-studies internship  in order to obtain engineering diploma.
The app is dedicated to dermatologist to use as a diagnostic aid tool for skin cancer detection and classification.
# authentication:
Json Wen Token authentication
# screens:
user can view and add  patients, visits and images 
# predictions:
Binary classification: Begnin vs Malignant using transfer learning: pre-build model called Inception V3 trained on ISIC dataset 
Categorical classification: Multi-class prediction for 7 types of skin cancer using ensemble model ( VGG16 + RESNET50 ) trained on HAM10000

# commands to clean cache and run the app
watchman watch-del-all
yarn install
yarn start --reset-cache
run -rf/tmp/metro-*
npx react-native run-android
# commands to run the app  using yarn or npm
yarn install
yarn start
npx react-native run-android
# android emulator
API level 29 or more



