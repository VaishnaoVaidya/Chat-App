import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen1 from '../tabs/Screen1';
import Setting from '../tabs/Setting';
import Users from '../tabs/Users';
import { KeyboardAvoidingView, Platform } from 'react-native';
import MainScreen from '../screens/MainScreen';

const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{ flex: 1 }}
  >
    <Bottom.Navigator >
      <Bottom.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../images/home.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: tabInfo.focused ? '#6A89CC' : '#A09F9F',
                }}
              />
            );
          },
        }}
      />
       <Bottom.Screen
        name="Screen1"
        component={Screen1}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../images/checkbox.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: tabInfo.focused ? '#6A89CC' : '#A09F9F',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Users"
        component={Users}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../images/users.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: tabInfo.focused ? '#6A89CC' : '#A09F9F',
                }}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
    </KeyboardAvoidingView>
  );
};

export default BottomNavigator;
