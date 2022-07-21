import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingsScreen from '../screens/SettingsScreen'

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Patient from '../screens/Patients'
import AddPatient from '../screens/AddPatient';
import AddPatientScreen from '../screens/AddPatientScreen';

import DiagnosisScreen from '../screens/DiagnosisScreen';

import AddVisitScreen from '../screens/AddVisitScreen';

import AddImageScreen from '../screens/AddImageScreen';
import AddImage from '../screens/AddImage';
import Visit from '../screens/Visits';
import Image from '../screens/Images';
import Binary from '../screens/Binary';
import ImageId from '../screens/ImageId';

import Categorical from '../screens/Categorical';
import AddVisit from '../screens/AddVisit';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="Patients"
        component={Patient}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Visits"
        component={Visit}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Images"
        component={Image}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Binary"
        component={Binary}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="ImageId"
        component={ImageId}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Categorical"
        component={Categorical}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="DiagnosisScreen"
        component={DiagnosisScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="AddPatientScreen"
        component={AddPatientScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddVisitScreen"
        component={AddVisitScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddImageScreen"
        component={AddImageScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddPatient"
        component={AddPatient}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="AddVisit"
        component={AddVisit}
        options={{headerShown: false}}
      />
     
       <Stack.Screen
        name="AddImage"
        component={AddImage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({route}) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#AD40AF'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow',
      }}>
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#AD40AF',
          },
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
            <Feather name="person-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if( routeName == 'Details' ) {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
