import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps  } from '@react-navigation/native-stack';
import { RootStackParamList } from "../navigation/AppNavigator"
import ProductItem from '../components/Producttem';
import Separator from '../components/Seperator';

//data
import {PRODUCTS_LIST} from '../data/constants';


type HomeProps = NativeStackScreenProps<RootStackParamList, 'ShopingDrawer'>

const Home =({navigation} : HomeProps )  => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({item})=> (
          <Pressable
          onPress={() => {
            navigation.navigate('Details', {
              product: item
            })
          }}
            >
            <ProductItem product={item} />
          </Pressable>
        )}
      />

      {/* <Text style={styles.smallText}>Home Screen</Text>
      <Button
       title='Go to details'
      //  onPress={() => navigation.navigate("Details" , {
      //   productId: "86"
      //  })}

       onPress={() => navigation.navigate("Details")}

      //  onPress={() => navigation.push("Details" , {
      //   productId: "86",
      //  })}

      //   onPress={() => navigation.replace("Details" , {
      //   productId: "86",
      //  })}

      /> */}
    </View>
  )
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});