import {View, Text, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused, useNavigation} from '@react-navigation/native';
const Setting = () => {
  const [mode, setMode] = useState('LIGHT');
  const navigation = useNavigation()
  const isFocued = useIsFocused();
  const changeMode = async x => {
    await AsyncStorage.setItem('MODE', x);
  };
  useEffect(() => {
    getMode();
  }, [isFocued]);
  const getMode = async () => {
    setMode(await AsyncStorage.getItem('MODE'));
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: mode == 'LIGHT' ? 'white' : 'black'},
      ]}>
      <View style={[styles.themChangeView ,{backgroundColor: mode == 'LIGHT' ? 'white' : '#212121'}
          ]}>
        <Text style={{color: mode == 'LIGHT' ? 'black' : 'white'}}>
          {mode} mode
        </Text>
        <TouchableOpacity
          style={
            styles.btn
           }
          onPress={() => {
            setMode(mode == 'LIGHT' ? 'DARK' : 'LIGHT');
            changeMode(mode == 'LIGHT' ? 'DARK' : 'LIGHT');
          }}> 
          {
                    mode === 'LIGHT' ? (
                    <Image 
                    source={require('../images/off.png')}
                    />                    
                    ) : (
                    <Image 
                    source={require('../images/on.png')}
                    /> 
                    )
         }
        </TouchableOpacity>
        </View>
        <View style={styles.container2}>
        <TouchableOpacity
        style={styles.btn2}
        onPress={() => {
            Alert.alert(
                "LOGOUT",
                'Do you really want to Logout ?',
                [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'OK', 
                    onPress: () =>
                    navigation.navigate('Login')
                  },
                ],
                {cancelable: false},
              );
              
          
        }}>
        <Text style={styles.btnText}>LOG OUT</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Setting;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  themChangeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    height: 80,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
  btn: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  container2:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
  ,
   btn2: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    // alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: '#6A89CC',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
  }
});