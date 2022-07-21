import React, {useState,  useContext}  from 'react';
import {View, Text,StyleSheet,ScrollView,Image,
  Button,
  Platform,
  TextInput} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import { BASE_URL } from '../utils/config';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import Constants from "expo-constants";

import axios from "axios";
import CustomButton from '../components/CustomButton';

const options ={
  
  title: 'Select Image',
  type: 'library',
  options: {
    maxHeight: 200,
    maxWidth: 200,
    selectionLimit: 1,
    mediaType: 'photo',
    includeBase64: false,
   
},
}

export default function  Categorical({navigation}) {
  const {userToken} = useContext(AuthContext);

  const [picture, setpicture] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);


 

  const onSubmitFormHandler = async (event) => {
    const picture= await launchImageLibrary(options);
    console.log(picture.assets[0])
    const formData = new FormData()
    formData.append('picture',{
      uri: picture.assets[0].uri,
      type:picture.assets[0].type,
      name: picture.assets[0].fileName
    })

    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/categorical/classify`,formData,{
          headers:{
          'Content-Type' : 'multipart/form-data',
          'Authorization':'Bearer ' + userToken.tokens.access
          }
      });
      if (response.status === 201) {
        alert(` Classes Prediction: ${JSON.stringify("ensemble_model: "+ response.data.ensemble_model_pred +" /vgg_model: "+response.data.vgg_model_pred + " /resnet_model: "+ response.data.resnet_model_pred )}`);
        setIsLoading(false);
        setpicture('');
       
        
      } else {
        throw new Error("An error  occurred");
      }
    } catch (error) {
      alert("An error has occurred");
      setIsLoading(false);
    }
  };

   
        

            return (
              <ScrollView contentContainerStyle={styles.container}>
                <View>
                  <View style={styles.wrapper}>
                    {isLoading ? (
                      <Text style={styles.formHeading}> Creating Categorical Prediction </Text>
                    ) : (
                      <Text style={styles.formHeading}>Create new categorical prediction</Text>
                    )}
                  </View>

                  <View>
        <Image source={require('../assets/images/doctor_in.png')}style={{width: 350, height: 300}}/>
       
            <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}} >Guess The Class of lesion </Text>
            <Text style={{ paddingVertical: 10, lineHeight: 25 }} >
            Send a picture of the skin to evaluate.Our app presents to you 3 models based on CNN architecture :
            1-VGG16
            2-RESNET50
            3- ENSEMBLE MODEL(VGG16+RESNET)
      
              NB: This app is dedicated for medical stuff and must be used by a specialist as a dermatoscopic tool for skin cancer detection.
            </Text>
          
      </View>
                
                
                  <View>
                    <CustomButton
                      label="Choose photo and predict"
                      onPress={onSubmitFormHandler}
                     
                      disabled={isLoading}
                    />
                  </View>


                  <View>
                    <CustomButton
                      label="Go Back"
                      onPress={() => navigation.navigate('DiagnosisScreen')}
                     
                      disabled={isLoading}
                    />
                  </View>


                </View>
              </ScrollView>
            );
          }
          
          const styles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: "#da9edb",
              alignItems: "center",
              justifyContent: "center",
              marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
            },
            formHeading: {
              color: "#ffffff",
            },
            wrapper: {
              marginBottom: 10,
            },
            input: {
              borderWidth: 2,
              borderColor: "grey",
              minWidth: 200,
              textAlignVertical: "center",
              paddingLeft: 10,
              borderRadius: 20,
              color: "#ffffff",
            },
            
          });