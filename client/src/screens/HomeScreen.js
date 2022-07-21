import React, { useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import CustomButton from '../components/CustomButton';


export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Hello Doctor!
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../assets/images/doctor.png')}
              style={{width: 35, height: 35}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>

        

      <View>
        <Image source={require('../assets/images/doctors.jpg')}style={{width: 350, height: 300}}/>
       
            <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}} >Welcome to our community!</Text>
            <Text style={{ paddingVertical: 10, lineHeight: 25 }} >
              We appreciate you taking the time for downloading our app and
              evaluating us.
              NB: This app is dedicated for medical stuff and must be used by a specialist as a dermatoscopic tool for skin cancer detection.
            </Text>
          
      </View>

        <CustomButton label={"View patients"}
         onPress={() => {
          navigation.navigate('Patients');
            }} />

        <CustomButton label={"Add patient"}
         onPress={() => {
          navigation.navigate('AddPatient');
            }} />


       
      </ScrollView>
    </SafeAreaView>
  );
}
