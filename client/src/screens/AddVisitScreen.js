import React, {useState}  from 'react';
import {View, Text, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';


const AddVisitScreen = ({navigation}) => {
  const [open, setOpen] = useState(false);
 
  const [date, setdate] =  useState(new Date());
  const [notes, setnotes] = useState('');
  const [dobLabel, setDobLabel] = useState('Date of Birth');




  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Add a new visit</Text>

             
            <CustomInput
                placeholder="notes"
                value={notes}
                setValue={setnotes}
            />

            
           
            
            


            <CustomButton label={'SAVE NEW visit'} onPress={() => {navigation.navigate('AddVisit')}} />

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

export default AddVisitScreen;
