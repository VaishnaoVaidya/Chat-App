import {Dimensions} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import Users from '../screens/Users';
import AddUser from '../screens/AddUser';

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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Users" component={Users} />
      <Tab.Screen name="AddUser" component={AddUser} />
    </Tab.Navigator>
  );
}
