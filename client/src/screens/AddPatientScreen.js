
import React, {useState, useEffect, useContext}  from 'react';
import {View, Text, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';


import {AuthContext} from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

import axios from "axios"

const AddPatientScreen = ({navigation}) => {


  const [first_name, setfirstname] = useState('');
  const [last_name, setlastname] = useState('');
  const [email, setEmail] = useState('');
  const [birth_date, setbirth_date] = useState('');
  const [gender, setgender] = useState('');
  const [phone, setphone] = useState('');

 


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      

      
        <View style={styles.root}>
            <Text style={styles.title}>Add a new patient</Text>

            

           
            <CustomButton label={'Add PATIENT'} onPress={() => {navigation.navigate('AddPatient')}} />

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={{color: '#AD40AF', fontWeight: '700'}}> Cancel</Text>
            </TouchableOpacity>
      
      
            
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default AddPatientScreen;
