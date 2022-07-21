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


export default function DiagnosisScreen({navigation}) {
  const [Tab, setTab] = useState(1);
  
  const onSelectSwitch = value => {
    setTab(value);
  };

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
            Choose prediction type!
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
        <Image source={require('../assets/images/prediction.jpg')}style={{width: 350, height: 275}}/>
       
            <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}} >Welcome to our community!</Text>
            <Text style={{ paddingVertical: 10, lineHeight: 25 }} >
            Choose which type of prediction you need.
            NB: This app is dedicated to medical stuff and must be used by a specialist as a dermatoscopic tool for skin cancer detection.
            </Text>
          
      </View>


      <CustomButton label={"Binary Prediction"}
         onPress={() => {
          navigation.navigate('Binary');
            }} />

        <CustomButton label={"Categorical Prediction"}
         onPress={() => {
          navigation.navigate('Categorical');
            }} />


       
      </ScrollView>
    </SafeAreaView>
  );
}
