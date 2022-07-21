import React, {useState,  useContext}  from 'react';
import {View, Text,StyleSheet,ScrollView,
  Platform,
  TextInput} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

import Constants from "expo-constants";

import axios from "axios";
import CustomButton from '../components/CustomButton';

export default function  AddPatient() {
  const {userToken} = useContext(AuthContext);

  const [first_name, setfirstname] = useState('');
  const [last_name, setlastname] = useState('');
  const [email, setEmail] = useState('');
  const [birth_date, setbirth_date] = useState('');
  const [gender, setgender] = useState('');
  const [phone, setphone] = useState('');
  const [isLoading, setIsLoading] = useState(false);


 
    

    const onChangefirst_nameHandler = (first_name) => {
      setfirstname(first_name);
    };

    const onChangelast_nameHandler = (last_name) => {
      setlastname(last_name);
    };
  
    const onChangeEmailHandler = (email) => {
      setEmail(email);
    };

    const onChangebirth_dateHandler = (birth_date) => {
      setbirth_date(birth_date);
    };

    const onChangegenderHandler = (gender) => {
      setgender(gender);
    };

    const onChangephoneHandler = (phone) => {
      setphone(phone);
    };


    const onSubmitFormHandler = async (event) => {
      if (!first_name.trim() || !last_name.trim()|| !email.trim()|| !birth_date.trim()|| !gender.trim()|| !phone.trim()) {
        alert("Invalid ");
        return;
      }
      setIsLoading(true);
      try {
        const response = await axios.post(`${BASE_URL}/patients/`,{first_name,
          last_name,
          email,
          birth_date,
          gender,
          phone},{
            headers:{
            'Authorization':'Bearer ' + userToken.tokens.access
            }
        });
        if (response.status === 201) {
          alert(` You have created: ${JSON.stringify(response.data)}`);
          setIsLoading(false);
          setfirstname('');
          setlastname('');
          setEmail('');
          setbirth_date('');
          setgender('');
          setphone('');
          
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
                      <Text style={styles.formHeading}> Creating resource </Text>
                    ) : (
                      <Text style={styles.formHeading}>Create new patient</Text>
                    )}
                  </View>
                  <View style={styles.wrapper}>
                    <TextInput
                      placeholder="first_name"
                      placeholderTextColor="#ffffff"
                      style={styles.input}
                      value={first_name}
                      editable={!isLoading}
                      onChangeText={onChangefirst_nameHandler}
                    />
                  </View>

                  <View style={styles.wrapper}>
                    <TextInput
                      placeholder="last_name"
                      placeholderTextColor="#ffffff"
                      style={styles.input}
                      value={last_name}
                      editable={!isLoading}
                      onChangeText={onChangelast_nameHandler}
                    />
                  </View>

                  <View style={styles.wrapper}>
                    <TextInput
                      placeholder="Email"
                      placeholderTextColor="#ffffff"
                      style={styles.input}
                      value={email}
                      editable={!isLoading}
                      onChangeText={onChangeEmailHandler}
                    />
                  </View>

                  <View style={styles.wrapper}>
                    <TextInput
                      placeholder="gender"
                      placeholderTextColor="#ffffff"
                      style={styles.input}
                      value={gender}
                      editable={!isLoading}
                      onChangeText={onChangegenderHandler}
                    />
                  </View>
                  <View style={styles.wrapper}>
                    <TextInput
                      placeholder="birth_date"
                      placeholderTextColor="#ffffff"
                      style={styles.input}
                      value={birth_date}
                      editable={!isLoading}
                      onChangeText={onChangebirth_dateHandler}
                    />
                  </View>

                  <View style={styles.wrapper}>
                    <TextInput
                      placeholder="phone"
                      placeholderTextColor="#ffffff"
                      style={styles.input}
                      value={phone}
                      editable={!isLoading}
                      onChangeText={onChangephoneHandler}
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