import React, {useState, useEffect, useContext}  from 'react';
import {View, Text,TouchableOpacity,  TextInput, ScrollView} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import { BASE_URL } from '../utils/config';
import CustomButton from '../components/CustomButton';
import Feather from 'react-native-vector-icons/Feather';

import axios from "axios"
const Image = ({navigation}) => {
    const [images, setImages] = useState([]);
    const {userToken} = useContext(AuthContext);
    const imageapi = () => {
      axios
          .get(`${BASE_URL}/images`,{
              headers:{
              'Content-Type':'application/json',
              'Authorization':'Bearer ' + userToken.tokens.access
              }
          })
          .then(res => {
              console.log(res.data);
              setImages(res.data);

            })
            .catch (e => {
                console.log(`Image error ${e}`);
    
            });}
        
  
  useEffect(() => {
    imageapi();
  }, []);

  const list = () => {
    return images.map((element) => {
      return (
        <View key={element.date_time} style={{margin: 10}}>
          <Text>{element.title}</Text>
          <Text>{element.status}</Text>
          <Text>{element.author}</Text>
          <Text>{element.image}</Text>
          
        </View>
      );
    });
  };
 
  return (
    <ScrollView style={{padding: 20}}>
      <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 5}}
          />
          <TextInput placeholder="Search" />
        </View>

        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            view your images
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0aada8'}}>See all</Text>
          </TouchableOpacity>
        </View>
      {list()}
      
        <CustomButton label={"Add Image"}
         onPress={() => {
          navigation.navigate('AddImage');
            }} />


        <CustomButton label={"Skin Diagnosis"}
         onPress={() => {
          navigation.navigate('DiagnosisScreen');
            }} />


        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Cancel</Text>
        </TouchableOpacity>
    
    </ScrollView>
   
    );

  
};


export default Image;