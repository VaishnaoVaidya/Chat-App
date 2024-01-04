import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from './src/navigation/AppNavigator'
import { Provider } from 'react-redux'
import MyStore from './src/redux/MyStore'

export default function App() {
  return (
      <Provider store={MyStore}>
      <AppNavigator/>
    </Provider>
  )
}

const styles = StyleSheet.create({})