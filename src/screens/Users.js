import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { deleteUser } from '../redux/UserSlice';

const Users = () => {
  const navigation = useNavigation();
  const users = useSelector(state => state.user);
  const dispatch = useDispatch()

  console.log(users);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={users.data}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '90%',
                padding: 10,
                borderWidth: 1,
                alignSelf: 'center',
                marginTop: 20,
                borderRadius: 10,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <View>
                <Text>{'Name: ' + item.name}</Text>
                <Text>{'Email: ' + item.email}</Text>
                <Text>{'Mobile: ' + item.mobile}</Text>
                <Text>{'Address: ' + item.address}</Text>
              </View>
              <View>
                <Text
                  style={{
                    padding: 7,
                    borderWidth: 1,
                    borderColor: 'black',
                    color: 'blue',
                  }}
                  onPress={() => {
                    navigation.navigate('AddUser', {type: 'edit', data : item, index:index});
                  }}>
                  Edit
                </Text>
                <Text
                  style={{
                    padding: 7,
                    borderWidth: 1,
                    borderColor: 'black',
                    color: 'red',
                    marginTop: 10,
                  }}
                  onPress={()=>{
                    dispatch(deleteUser(index))
                  }}
                  >
                  Delete
                </Text>
              </View>
            </View>
          );
        }}
      />
      <TouchableOpacity
        activeOpacity={1}
        style={{
          width: '100%',
          height: 50,
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('AddUser', {type: 'add'});
        }}>
        <Text style={{color: 'white', fontSize: 12}}>Add New Use</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Users;
