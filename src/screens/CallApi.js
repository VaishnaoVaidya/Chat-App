import {  Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/ProductSlice';
import { useGetDataQuery } from '../services/GetApiCall';

const CallApi = () =>{
    const dispatch = useDispatch();
    const products = useSelector(state => state)
    // console.log(JSON.stringify(products));
    const {data} = useGetDataQuery()
    // console.log('mydata' + data);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{padding: 20, borderWidth: 0.5}} onPress={()=>{
        dispatch(fetchProducts())
    }}>Call Api</Text>
  </View>
  )
}

export default CallApi;