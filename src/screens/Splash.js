import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Splash() {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
          checkLogin()
        }, 2000);
    }, [])
   
    const checkLogin = async () => {
      const id = await AsyncStorage.getItem('USERID');
      if (id !== null) {
        navigation.navigate('Parent');
      } else {
        navigation.navigate('Login');
      }
    };
    
  return (
    <View style={styles.container}>
      <Text  style={styles.logo}>{'FireBase Chat\nApp'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple'
    },
    logo: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
    },

})