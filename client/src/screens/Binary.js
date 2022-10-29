import React, {useState,  useContext}  from 'react';
import {View, Text,StyleSheet,ScrollView,Image,
  Button,
  Platform,
  TextInput} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import { BASE_URL } from '../utils/config';
import { launchImageLibrary} from 'react-native-image-picker';

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

export default function  Binary({navigation}) {
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
        const response = await axios.post(`${BASE_URL}/binary/prediction/`,formData,{
            headers:{
            'Content-Type' : 'multipart/form-data',
            'Authorization':'Bearer ' + userToken.tokens.access
            }
        });
        if (response.status === 201) {
          alert(` Binary Prediction: ${JSON.stringify(response.data.cnn_binary_pred)}`);
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
                      <Text style={styles.formHeading}> Creating Binary Prediction </Text>
                    ) : (
                      <Text style={styles.formHeading}>Create new binary prediction</Text>
                    )}
                  </View>

                  <View>
        <Image source={require('../assets/images/checking2.png')}style={{width: 350, height: 300}}/>
       
            <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}} >Begnin Vs Malignant </Text>
            <Text style={{ paddingVertical: 10, lineHeight: 25 }} >
              Send a picture of the skin to evaluate.
              Our deep learning model called InceptionV3 is based on CNN architecture.
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