import React, {useState, useEffect, useContext}  from 'react';
import {View, Text, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';


import {AuthContext} from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

import axios from "axios"

const AddImageScreen = ({navigation}) => {

    
  const [date_time, setdate_time] = useState('');
  const [source, setsource] = useState('');
  const [area, setarea] = useState('');
  const [comment, setcomment] = useState('');



  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Add a new Image</Text>

            <CustomInput
                placeholder="date_time"
                value={date_time}
                setValue={setdate_time}
            />
            <CustomInput
                placeholder="source"
                value={source}
                setValue={setsource}
            />
            <CustomInput
                placeholder="area"
                value={area}
                setValue={setarea}
            />
            


            <CustomButton label={'Save Image'} onPress={() => {}} />

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

export default AddImageScreen;
