import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawer = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#74B9FF', flex: 1}}>
      <View style={styles.info}>
         <Text></Text>
      </View>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image
          source={require('../images/home.png')}
          style={[styles.tabIcon]}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold' , marginVertical: 25, marginTop: 25, color: '#192A56' }}>Shoping</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => {
          navigation.navigate('MainScreen');
          
        }}>
        <Image
          source={require('../images/screen.png')}
          style={[styles.tabIcon]}
        />
         <Text style={{fontSize: 20, fontWeight: 'bold' , marginTop: 25, color: '#192A56' }}>Material Top Screen</Text>
      </TouchableOpacity> 
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  info: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderBottomColor: 'black',
    borderBottomWidth: 2
  },
  tab: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderBottomWidth: 2
  },
  tabIcon: {
    margin: 11,
    width: 50,
    height: 50,
  },
});
