import React, {useState,  useContext}  from 'react';
import {View, Text,StyleSheet,ScrollView,TextInput} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

import CustomButton from '../components/CustomButton'
import axios from "axios";

export default function  AddVisit() {
  const {userToken} = useContext(AuthContext);

  const [datevisit, setdatevisit] = useState('');
  const [notes, setnotes] = useState('');
  const [patientId, setpatientId] = useState('');
  const [dermaId, setdermaId] = useState('');
 
  const [isLoading, setIsLoading] = useState(false);


    const onChangenotesHandler = (notes) => {
      setnotes(notes);
    };

    const onChangedateHandler = (datevisit) => {
      setdatevisit(datevisit);
    };

    const onChangedermaIdHandler = (dermaId) => {
      setdermaId(dermaId);
    };
    const onChangepatientIdHandler = (patientId) => {
      setpatientId(patientId);
    };

    


  
    

    const onSubmitFormHandler = async (event) => {
      const formData = new FormData()
      
      formData.append('datevisit', datevisit);
      formData.append('notes',notes);
      formData.append('patient', patientId);
      formData.append('dermatologist', dermaId);

    
       axios.
       post(`${BASE_URL}/visits/`,formData,{
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
                      <Text style={styles.formHeading}>Create new visit</Text>
                    )}
                  </View>
                  <View style={styles.wrapper}>
                    <TextInput
                      placeholder="datevisit"
                      placeholderTextColor="#ffffff"
                      style={styles.input}
                      value={datevisit}
                      editable={!isLoading}
                      onChangeText={onChangedateHandler}
                    />
                  </View>
                  <View style={styles.wrapper}>
                    <TextInput
                      placeholder="notes"
                      placeholderTextColor="#ffffff"
                      style={styles.input}
                      value={notes}
                      editable={!isLoading}
                      onChangeText={onChangenotesHandler}
                    />
                  </View>

                  <View style={styles.wrapper}>
                    <TextInput
                      placeholder="patient"
                      placeholderTextColor="#ffffff"
                      style={styles.input}
                      value={patientId}
                      editable={!isLoading}
                      onChangeText={onChangepatientIdHandler}
                    />
                  </View>

                  <View style={styles.wrapper}>
                    <TextInput
                      placeholder="dermatologist"
                      placeholderTextColor="#ffffff"
                      style={styles.input}
                      value={dermaId}
                      editable={!isLoading}
                      onChangeText={onChangedermaIdHandler}
                    />
                  </View>

                
                  <View>
                    <CustomButton
                      label="Submit"
                      onPress={onSubmitFormHandler}
                     
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


