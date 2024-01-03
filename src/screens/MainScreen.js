import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Users from '../tabs/Users';
import Setting from '../tabs/Setting';
import MaterialTopNavigator from '../navigation/MaterialTopNavigator';



const MainScreen = () => {
    const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.container}>
        {/* {selectedTab == 0 ?<Users/> : <Setting/> } */}
        <MaterialTopNavigator/>

     <View style={styles.bottomTab}>
        {/* <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={require('../images/users.png')}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 0 ? 'white' : '#A09F9F'},
            ]}
          />
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            navigation.navigate('SettingsScreen');
          }}>
          <Image
            source={require('../images/setting.png')}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 1 ? 'white' : '#A09F9F'},
            ]}
          />
        </TouchableOpacity> */}
       </View>
       </View>
  )
}

export default MainScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    bottomTab: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 70,
        backgroundColor: '#6A89CC',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
      tab: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      tabIcon: {
        width: 30,
        height: 30,
      },
});