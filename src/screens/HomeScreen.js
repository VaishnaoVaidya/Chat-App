import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Provider} from 'react-redux';
import { store } from '../redux/Store';
import CallApi from './CallApi';

export default function HomeScreen() {
 
  return (
      <Provider store={store}>
       <CallApi/>
      </Provider>
  );
}

const styles = StyleSheet.create({});
