import { View} from 'react-native'
import React from 'react'
import MaterialTopNavigator from '../navigation/MaterialTopNavigator';
import { Provider } from 'react-redux';
import MyStore from '../redux/MyStore';



const MainScreen = () => {
  return (
    <Provider store={MyStore}>
      <MaterialTopNavigator/>
    </Provider>
    
  )
}

export default MainScreen
