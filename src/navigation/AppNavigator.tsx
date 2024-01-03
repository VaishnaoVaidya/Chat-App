import { Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
// import { createStackNavigator } from '@react-navigation/stack';
import Chat from '../screens/Chat';
import Details from '../screens/Details';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Parent from '../screens/Parent';
import MainScreen from '../screens/MainScreen';
// import { AuthProvider } from '../context/authContext';

export type RootStackParamList = {
  Home: undefined;
  Parent: undefined;
  Splash: undefined;
  Signup: undefined;
  Login: undefined;
  MainScreen: undefined;
  Chat: undefined;
  Details: {product : Product}
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      {/* <AuthProvider> */}
      {/* <Stack.Navigator initialRouteName='Parent'> */}
      <Stack.Navigator>
        <Stack.Screen
          name={'Splash'}
          component={Splash}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name={'Signup'}
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Login'}
          component={Login}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name={'MainScreen'}
          component={MainScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name={'Chat'}
          component={Chat}
          options={{headerShown: true}}
        /> 
         <Stack.Screen
          name={'Details'}
          component={Details}
          options={{
            title: 'Product Details'
          }}
        />
        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{
            title: 'Trending Product'
          }}
        /> 
        <Stack.Screen
          name={'Parent'}
          component={Parent}
          options={{headerShown: false}}
        /> 
      </Stack.Navigator>
      {/* </AuthProvider> */}
     
    </NavigationContainer>
    
  );
}
