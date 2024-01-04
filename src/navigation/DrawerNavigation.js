import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from '../screens/Main';
import Home from '../screens/ShopingDrawer';
import { useNavigation } from '@react-navigation/native';
import CustomDrawer from '../screens/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const navigation = useNavigation()
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Main"
        component={Main}
        options={{headerShown: true}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;