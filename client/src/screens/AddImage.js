

import React, {useState,  useContext}  from 'react';
import {View, Text,StyleSheet,ScrollView,Button,
  TextInput} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

import CustomButton from '../components/CustomButton'

import axios from "axios";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
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
export default function  AddImage({navigation}) {
  
  const {userToken} = useContext(AuthContext);



  const [title, settitle] = useState('');
  const [author, setauthor] = useState('');
  const [image, setimage] = useState('');
  const [comment, setcomment] = useState('');
  const [postData, updateFormData] = useState(initialFormData);
	const [postimage, setPostImage] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const initialFormData = Object.freeze({
		title: '',
		slug: '',
		comment: '',
	});

  const onChangetitleHandler = (title) => {
    settitle(title);
  };


  const onChangecommentHandler = (comment) => {
    setcomment(comment);
  };

  

  const onChangeauthorHandler = (author) => {
    setauthor(author);
  };


  const openGallery= async ()=>{
    const images= await launchImageLibrary(options);
    console.log(images.assets[0])
    
    const formData = new FormData()
    formData.append('image',{
      uri: images.assets[0].uri,
      type:images.assets[0].type,
      name: images.assets[0].fileName
    })

    formData.append('title', title);
    formData.append('author',author);
    formData.append('comment', comment);

    axios
    .post(`${BASE_URL}/images/`, formData,{
      headers:{
        'Content-Type' : 'multipart/form-data',
        'Authorization':'Bearer ' + userToken.tokens.access
      }
  });
  let responseJson = await res.json();
  console.log(responseJson,"responseJson")

  }



            return (
              <ScrollView contentContainerStyle={styles.container}>
                <View>
                  <View style={styles.wrapper}>
                    {isLoading ? (
                      <Text style={styles.formHeading}> Creating resource </Text>
                    ) : (
                      <Text style={styles.formHeading}>Create new Image</Text>
                    )}
                  </View>
                  

                  <View style={styles.wrapper}>
                    <TextInput
                      placeholder="title"
                      placeholderTextColor="#ffffff"
                      style={styles.input}
                      value={title}
                      editable={!isLoading}
                      onChangeText={onChangetitleHandler}
                    />
                  </View>

                  <View style={styles.wrapper}>
                    <TextInput
                      placeholder="author"
                      placeholderTextColor="#ffffff"
                      style={styles.input}
                      value={author}
                      editable={!isLoading}
                      onChangeText={onChangeauthorHandler}
                    />
                  </View>

                  <View style={styles.wrapper}>
                    <TextInput
                      placeholder="comment"
                      placeholderTextColor="#ffffff"
                      style={styles.input}
                      value={comment}
                      editable={!isLoading}
                      onChangeText={onChangecommentHandler}
                    />
                  </View>

                   
                  <CustomButton
                      label="Choose photo and Submit"
                      onPress={openGallery}
                      style={styles.submitButton}
                    
                    />


                  <CustomButton label={"Go Back "}
                      onPress={() => {
                      navigation.navigate('Images');
                    }} />

                 
                </View>
              </ScrollView>
            );
          }
          
          const styles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: "#d698cf",
              alignItems: "center",
              justifyContent: "center",
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
