import React, {useState, useEffect, useContext}  from 'react';
import {View, Text,TouchableOpacity,  TextInput, ScrollView} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import { BASE_URL } from '../utils/config';
import CustomButton from '../components/CustomButton';
import Feather from 'react-native-vector-icons/Feather';


import axios from "axios"
const Visit = ({navigation}) => {
    const [visits, setVisits] = useState([]);
    const {userToken} = useContext(AuthContext);
    const visitapi = () => {
      axios
          .get(`${BASE_URL}/visits`,{
              headers:{
              'Content-Type':'application/json',
              'Authorization':'Bearer ' + userToken.tokens.access
              }
          })
          .then(res => {
              console.log(res.data);
              setVisits(res.data);

            })
            .catch (e => {
                console.log(` error ${e}`);
    
            });}
        
  
  useEffect(() => {
    visitapi();
  }, []);

  const list = () => {
    return visits.map((element) => {
      return (
        <View key={element.datevisit} style={{margin: 10}}>
          
          <Text>{element.notes}</Text>
          <Text>{element.datevisit}</Text>
          

        
        
          
          
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
            view your visits
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0aada8'}}>See all</Text>
          </TouchableOpacity>
        </View>
      {list()}
      
        <CustomButton label={"Add Visit"}
         onPress={() => {
          navigation.navigate('AddVisit');
            }} />


        <CustomButton label={"View Images"}
         onPress={() => {
          navigation.navigate('Images');
            }} />

    

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={{color: '#AD40AF', fontWeight: '700'}}> Cancel</Text>
          </TouchableOpacity>
    
    </ScrollView>
   
    );

  
};


export default Visit;

