### dr-skin-mobile-app
##### Project structure
```
📦 
README.md
├─ api
│  ├─ .gitignore
│  ├─ README.md
│  ├─ authentication
│  │  ├─ __init__.py
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ models.py
│  │  ├─ serializers.py
│  │  ├─ tests.py
│  │  ├─ tokens.py
│  │  ├─ urls.py
│  │  └─ views.py
│  ├─ binary
│  │  ├─ __init__.py
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ models.py
tests.py
│  │  ├─ urls.py
│  │  └─ views.py
│  ├─ categorical
│  │  ├─ __init__.py
│  │  ├─ admin.py
apps.py
│  │  ├─ models.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  └─ views.py
│  ├─ images
│  │  ├─ __init__.py
admin.py
│  │  ├─ api.py
│  │  ├─ apps.py
│  │  ├─ custom_renderers.py
│  │  ├─ models.py
│  │  ├─ serializers.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  └─ views.py
│  ├─ manage.py
patientapi
│  │  ├─ __init__.py
│  │  ├─ admin.py
│  │  ├─ api.py
│  │  ├─ apps.py
│  │  ├─ models.py
│  │  ├─ serializers.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  └─ views.py
│  ├─ requirements.txt
│  ├─ skincancer
│  │  ├─ .env.template
│  │  ├─ __init__.py
│  │  ├─ apps.py
│  │  ├─ asgi.py
│  │  ├─ settings.py
│  │  ├─ urls.py
│  │  └─ wsgi.py
│  └─ visitapi
│     ├─ __init__.py
│     ├─ admin.py
│     ├─ api.py
│     ├─ apps.py
│     ├─ models.py
│     ├─ serializers.py
│     ├─ tests.py
│     ├─ urls.py
│     └─ views.py
├─ client
│  ├─ .buckconfig
│  ├─ .editorconfig
│  ├─ .eslintrc.js
│  ├─ .flowconfig
│  ├─ .gitattributes
│  ├─ .gitignore
│  ├─ .prettierrc.js
│  ├─ .watchmanconfig
│  ├─ App.js
│  ├─ README.md
│  ├─ __tests__
│  │  └─ App-test.js
│  ├─ android
│  │  ├─ app
│  │  │  ├─ _BUCK
│  │  │  ├─ build.gradle
│  │  │  ├─ build_defs.bzl
│  │  │  ├─ debug.keystore
│  │  │  ├─ proguard-rules.pro
│  │  │  └─ src
│  │  │     ├─ debug
│  │  │     │  ├─ AndroidManifest.xml
│  │  │     │  └─ java
│  │  │     │     └─ com
│  │  │     │        └─ reactnavigationv6
│  │  │     │           └─ ReactNativeFlipper.java
│  │  │     └─ main
│  │  │        ├─ AndroidManifest.xml
│  │  │        ├─ assets
│  │  │        │  └─ fonts
│  │  │        │     ├─ AntDesign.ttf
│  │  │        │     ├─ Entypo.ttf
│  │  │        │     ├─ EvilIcons.ttf
│  │  │        │     ├─ Feather.ttf
│  │  │        │     ├─ FontAwesome.ttf
│  │  │        │     ├─ FontAwesome5_Brands.ttf
│  │  │        │     ├─ FontAwesome5_Regular.ttf
│  │  │        │     ├─ FontAwesome5_Solid.ttf
│  │  │        │     ├─ Fontisto.ttf
│  │  │        │     ├─ Foundation.ttf
│  │  │        │     ├─ Inter-Bold.ttf
│  │  │        │     ├─ Ionicons.ttf
│  │  │        │     ├─ MaterialCommunityIcons.ttf
│  │  │        │     ├─ MaterialIcons.ttf
│  │  │        │     ├─ Octicons.ttf
│  │  │        │     ├─ Roboto-Bold.ttf
│  │  │        │     ├─ Roboto-BoldItalic.ttf
│  │  │        │     ├─ Roboto-Italic.ttf
│  │  │        │     ├─ Roboto-Medium.ttf
│  │  │        │     ├─ Roboto-MediumItalic.ttf
│  │  │        │     ├─ Roboto-Regular.ttf
│  │  │        │     ├─ SimpleLineIcons.ttf
│  │  │        │     └─ Zocial.ttf
│  │  │        ├─ java
│  │  │        │  └─ com
│  │  │        │     └─ reactnavigationv6
│  │  │        │        ├─ MainActivity.java
│  │  │        │        └─ MainApplication.java
│  │  │        └─ res
│  │  │           ├─ mipmap-hdpi
│  │  │           │  ├─ ic_launcher.png
│  │  │           │  └─ ic_launcher_round.png
│  │  │           ├─ mipmap-mdpi
│  │  │           │  ├─ ic_launcher.png
│  │  │           │  └─ ic_launcher_round.png
│  │  │           ├─ mipmap-xhdpi
│  │  │           │  ├─ ic_launcher.png
│  │  │           │  └─ ic_launcher_round.png
│  │  │           ├─ mipmap-xxhdpi
│  │  │           │  ├─ ic_launcher.png
│  │  │           │  └─ ic_launcher_round.png
│  │  │           ├─ mipmap-xxxhdpi
│  │  │           │  ├─ ic_launcher.png
│  │  │           │  └─ ic_launcher_round.png
│  │  │           └─ values
│  │  │              ├─ strings.xml
│  │  │              └─ styles.xml
│  │  ├─ build.gradle
│  │  ├─ gradle.properties
│  │  ├─ gradle
│  │  │  └─ wrapper
│  │  │     ├─ gradle-wrapper.jar
│  │  │     └─ gradle-wrapper.properties
│  │  ├─ gradlew
│  │  ├─ gradlew.bat
│  │  └─ settings.gradle
│  ├─ app.json
│  ├─ babel.config.js
│  ├─ client
│  ├─ index.js
│  ├─ ios
│  │  ├─ Podfile
│  │  ├─ Podfile.lock
│  │  ├─ reactNavigationV6.xcodeproj
│  │  │  ├─ project.pbxproj
│  │  │  └─ xcshareddata
│  │  │     └─ xcschemes
│  │  │        └─ reactNavigationV6.xcscheme
│  │  ├─ reactNavigationV6.xcworkspace
│  │  │  ├─ contents.xcworkspacedata
│  │  │  └─ xcshareddata
│  │  │     └─ IDEWorkspaceChecks.plist
│  │  ├─ reactNavigationV6
│  │  │  ├─ AppDelegate.h
│  │  │  ├─ AppDelegate.m
│  │  │  ├─ Images.xcassets
│  │  │  │  ├─ AppIcon.appiconset
│  │  │  │  │  └─ Contents.json
│  │  │  │  └─ Contents.json
│  │  │  ├─ Info.plist
│  │  │  ├─ LaunchScreen.storyboard
│  │  │  └─ main.m
│  │  └─ reactNavigationV6Tests
│  │     ├─ Info.plist
│  │     └─ reactNavigationV6Tests.m
│  ├─ metro.config.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ react-native.config.js
│  ├─ src
│  │  ├─ assets
│  │  │  ├─ fonts
│  │  │  │  ├─ AntDesign.ttf
│  │  │  │  ├─ Entypo.ttf
│  │  │  │  ├─ EvilIcons.ttf
│  │  │  │  ├─ Feather.ttf
│  │  │  │  ├─ FontAwesome.ttf
│  │  │  │  ├─ FontAwesome5_Brands.ttf
│  │  │  │  ├─ FontAwesome5_Regular.ttf
│  │  │  │  ├─ FontAwesome5_Solid.ttf
│  │  │  │  ├─ Fontisto.ttf
│  │  │  │  ├─ Foundation.ttf
│  │  │  │  ├─ Inter-Bold.ttf
│  │  │  │  ├─ Ionicons.ttf
│  │  │  │  ├─ MaterialCommunityIcons.ttf
│  │  │  │  ├─ MaterialIcons.ttf
│  │  │  │  ├─ Octicons.ttf
│  │  │  │  ├─ Roboto-Bold.ttf
│  │  │  │  ├─ Roboto-BoldItalic.ttf
│  │  │  │  ├─ Roboto-Italic.ttf
│  │  │  │  ├─ Roboto-Medium.ttf
│  │  │  │  ├─ Roboto-MediumItalic.ttf
│  │  │  │  ├─ Roboto-Regular.ttf
│  │  │  │  ├─ SimpleLineIcons.ttf
│  │  │  │  └─ Zocial.ttf
│  │  │  └─ images
│  │  │     ├─ avatar.jpg
│  │  │     ├─ camera.png
│  │  │     ├─ checking.jpg
│  │  │     ├─ checking2.jpg
│  │  │     ├─ checking2.png
│  │  │     ├─ dermatologist_profile.jpg
│  │  │     ├─ doctor.png
│  │  │     ├─ doctor_in.png
│  │  │     ├─ doctor_in_smartphone.jpg
│  │  │     ├─ doctorphone.jpg
│  │  │     ├─ doctors.jpg
│  │  │     ├─ doctors_talking.jpg
│  │  │     ├─ heart.jpg
│  │  │     ├─ login.jpg
│  │  │     ├─ login.png
│  │  │     ├─ login.webp
│  │  │     ├─ login_bg.png
│  │  │     ├─ logo.png
│  │  │     ├─ menu-bg.jpeg
│  │  │     ├─ misc
│  │  │     │  ├─ facebook.svg
│  │  │     │  ├─ google.svg
│  │  │     │  ├─ login.svg
│  │  │     │  ├─ logo.svg
│  │  │     │  ├─ registration.svg
│  │  │     │  └─ twitter.svg
│  │  │     ├─ newpatient.jpg
│  │  │     ├─ newvisit.jpg
│  │  │     ├─ pokemon-unite.jpeg
│  │  │     ├─ prediction.jpg
│  │  │     ├─ profile.png
│  │  │     ├─ user-profile.jpg
│  │  │     └─ welcome.jpg
│  │  ├─ components
│  │  │  ├─ BannerSlider.js
│  │  │  ├─ CustomButton.js
│  │  │  ├─ CustomButton
│  │  │  │  ├─ CustomButton.js
│  │  │  │  └─ index.js
│  │  │  ├─ CustomDrawer.js
│  │  │  ├─ CustomInput
│  │  │  │  ├─ CustomInput.js
│  │  │  │  └─ index.js
│  │  │  ├─ CustomSwitch.js
│  │  │  ├─ InputField.js
│  │  │  ├─ ListItem.js
│  │  │  └─ SocialSignInButtons
│  │  │     ├─ SocialSignInButtons.js
│  │  │     └─ index.js
│  │  ├─ context
│  │  │  └─ AuthContext.js
│  │  ├─ navigation
│  │  │  ├─ AppNav.js
│  │  │  ├─ AppStack.js
│  │  │  ├─ AuthStack.js
│  │  │  └─ TabNavigator.js
│  │  ├─ screens
│  │  │  ├─ AddImage.js
│  │  │  ├─ AddImageScreen.js
│  │  │  ├─ AddPatient.js
│  │  │  ├─ AddPatientScreen.js
│  │  │  ├─ AddVisit.js
│  │  │  ├─ AddVisitScreen.js
│  │  │  ├─ Binary.js
│  │  │  ├─ CartScreen.js
│  │  │  ├─ Categorical.js
│  │  │  ├─ DetailsScreen.js
│  │  │  ├─ DiagnosisScreen.js
│  │  │  ├─ FavoriteScreen.js
│  │  │  ├─ HomeScreen.js
│  │  │  ├─ ImageId.js
│  │  │  ├─ Images.js
│  │  │  ├─ LoginScreen.js
│  │  │  ├─ MessagesScreen.js
│  │  │  ├─ MomentsScreen.js
│  │  │  ├─ OnboardingScreen.js
│  │  │  ├─ Patients.js
│  │  │  ├─ ProfileScreen.js
│  │  │  ├─ RegisterScreen.js
│  │  │  ├─ SettingsScreen.js
│  │  │  └─ Visits.js
│  │  └─ utils
│  │     ├─ Dimensions.js
│  │     └─ config.js
│  └─ yarn.lock
└─ notebooks
   ├─ cs200-1-skin-lesion-classification.ipynb
   ├─ malignant-vsbenign.ipynb
   └─ skin-lesion-segmentation-using-unet.ipynb
```
©generated by [Project Tree Generator](https://woochanleee.github.io/project-tree-generator)
# authentication:
Json Wen Token authentication
# screens:
user can view and add  patients, visits and images 
# predictions:
Binary classification: Begnin vs Malignant using transfer learning: pre-built model called Inception V3 trained on ISIC dataset : 
link: https://www.kaggle.com/datasets/fanconic/skin-cancer-malignant-vs-benign
Categorical classification: Multi-class prediction for 7 types of skin cancer using ensemble model ( VGG16 + RESNET50 ) trained on HAM10000
Unet segmentation trained on resized PH2 dataset :
link: https://www.kaggle.com/datasets/hashbanger/ph2-resized
# commands to clean cache and run the app
>watchman watch-del-all 
 
>yarn install   

>yarn start --reset-cache

>run -rf/tmp/metro-*

>npx react-native run-android
# commands to run the app  using yarn or npm
yarn install

yarn start

npx react-native run-android

# android emulator
API level 29 or more

# For Backend:
Create virtual environment-

python -m venv env

env\Scripts\activate
Install dependencies using-

pip install -r requirements.txt

If you have python2 and python3 installed you need to specify python3 by using command:

python3 -m pip install -r requirements.txt

Headover to Project Directory-

Make migrations using-

python manage.py makemigrations

If you have python2 and python3 installed you need to specify python3 by using command:

python3 manage.py makemigrations

Migrate Database-

python manage.py migrate

Create a superuser-

python manage.py createsuperuser

Run server using-

python manage.py runserver


