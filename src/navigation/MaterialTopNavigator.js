import {Dimensions} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import AddUser from '../screens/AddUser';
import Users from '../screens/Users';

const {width} = Dimensions.get('screen');

const Tab = createMaterialTopTabNavigator();

export default function MaterialTopNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarItemStyle: {width: 200},
        tabBarStyle: {backgroundColor: 'powderblue'},
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Users" component={Users} />
    </Tab.Navigator>
  );
}
