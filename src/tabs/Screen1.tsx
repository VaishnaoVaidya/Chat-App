import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Pdf from 'react-native-pdf';


type StateType = {
  key: string;
  name: string;
};
const Screen1 = ({navigation}) => {

  const onFilter = (txt: string) => {
    if (txt.length > 0) {
      let temp = states.filter(item => {
        return item.name
          .toString()
          .toLowerCase()
          .match(txt.toString().toLowerCase());
      });
      setStates(temp);;
    } else {
      setStates(tempStates);
    }
  };
  const [totalPages , setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  const [search, setSearch] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('Select State');
  const [openDropDown, setOpenDropDown] = useState(false);
  const [states, setStates] = useState<StateType[]>([
    {
      key: 'AN',
      name: 'Andaman   and Nicobar Islands',
    },
    {
      key: 'AP',
      name: 'Andhra Pradesh',
    },
    {
      key: 'AR',
      name: 'Arunachal Pradesh',
    },
    {
      key: 'AS',
      name: 'Assam',
    },
    {
      key: 'BR',
      name: 'Bihar',
    },
    {
      key: 'CG',
      name: 'Chandigarh',
    },
    {
      key: 'CH',
      name: 'Chhattisgarh',
    },
    {
      key: 'DH',
      name: 'Dadra and Nagar Haveli',
    },
    {
      key: 'DD',
      name: 'Daman and Diu',
    },
    {
      key: 'DL',
      name: 'Delhi',
    },
    {
      key: 'GA',
      name: 'Goa',
    },
    {
      key: 'GJ',
      name: 'Gujarat',
    },
    {
      key: 'HR',
      name: 'Haryana',
    },
    {
      key: 'HP',
      name: 'Himachal Pradesh',
    },
    {
      key: 'JK',
      name: 'Jammu and Kashmir',
    },
    {
      key: 'JH',
      name: 'Jharkhand',
    },
    {
      key: 'KA',
      name: 'Karnataka',
    },
    {
      key: 'KL',
      name: 'Kerala',
    },
    {
      key: 'LD',
      name: 'Lakshadweep',
    },
    {
      key: 'MP',
      name: 'Madhya Pradesh',
    },
    {
      key: 'MH',
      name: 'Maharashtra',
    },
    {
      key: 'MN',
      name: 'Manipur',
    },
    {
      key: 'ML',
      name: 'Meghalaya',
    },
    {
      key: 'MZ',
      name: 'Mizoram',
    },
    {
      key: 'NL',
      name: 'Nagaland',
    },
    {
      key: 'OR',
      name: 'Odisha',
    },
    {
      key: 'PY',
      name: 'Puducherry',
    },
    {
      key: 'PB',
      name: 'Punjab',
    },
    {
      key: 'RJ',
      name: 'Rajasthan',
    },
    {
      key: 'SK',
      name: 'Sikkim',
    },
    {
      key: 'TN',
      name: 'Tamil Nadu',
    },
    {
      key: 'TS',
      name: 'Telangana',
    },
    {
      key: 'TR',
      name: 'Tripura',
    },
    {
      key: 'UK',
      name: 'Uttar Pradesh',
    },
    {
      key: 'UP',
      name: 'Uttarakhand',
    },
    {
      key: 'WB',
      name: 'West Bengal',
    },
  ]);

  const [tempStates, setTempStates] = useState<StateType[]>([
    {
      key: 'AN',
      name: 'Andaman and Nicobar Islands',
    },
    {
      key: 'AP',
      name: 'Andhra Pradesh',
    },
    {
      key: 'AR',
      name: 'Arunachal Pradesh',
    },
    {
      key: 'AS',
      name: 'Assam',
    },
    {
      key: 'BR',
      name: 'Bihar',
    },
    {
      key: 'CG',
      name: 'Chandigarh',
    },
    {
      key: 'CH',
      name: 'Chhattisgarh',
    },
    {
      key: 'DH',
      name: 'Dadra and Nagar Haveli',
    },
    {
      key: 'DD',
      name: 'Daman and Diu',
    },
    {
      key: 'DL',
      name: 'Delhi',
    },
    {
      key: 'GA',
      name: 'Goa',
    },
    {
      key: 'GJ',
      name: 'Gujarat',
    },
    {
      key: 'HR',
      name: 'Haryana',
    },
    {
      key: 'HP',
      name: 'Himachal Pradesh',
    },
    {
      key: 'JK',
      name: 'Jammu and Kashmir',
    },
    {
      key: 'JH',
      name: 'Jharkhand',
    },
    {
      key: 'KA',
      name: 'Karnataka',
    },
    {
      key: 'KL',
      name: 'Kerala',
    },
    {
      key: 'LD',
      name: 'Lakshadweep',
    },
    {
      key: 'MP',
      name: 'Madhya Pradesh',
    },
    {
      key: 'MH',
      name: 'Maharashtra',
    },
    {
      key: 'MN',
      name: 'Manipur',
    },
    {
      key: 'ML',
      name: 'Meghalaya',
    },
    {
      key: 'MZ',
      name: 'Mizoram',
    },
    {
      key: 'NL',
      name: 'Nagaland',
    },
    {
      key: 'OR',
      name: 'Odisha',
    },
    {
      key: 'PY',
      name: 'Puducherry',
    },
    {
      key: 'PB',
      name: 'Punjab',
    },
    {
      key: 'RJ',
      name: 'Rajasthan',
    },
    {
      key: 'SK',
      name: 'Sikkim',
    },
    {
      key: 'TN',
      name: 'Tamil Nadu',
    },
    {
      key: 'TS',
      name: 'Telangana',
    },
    {
      key: 'TR',
      name: 'Tripura',
    },
    {
      key: 'UK',
      name: 'Uttar Pradesh',
    },
    {
      key: 'UP',
      name: 'Uttarakhand',
    },
    {
      key: 'WB',
      name: 'West Bengal',
    },
  ]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View
          style={{
            width: '90%',
            height: 50,
            borderWidth: 1,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <Text style={{fontSize: 16, color: 'black'}}>{selectedState}</Text>
          <TouchableOpacity
            onPress={() => {
              setOpenDropDown(!openDropDown);
            }}>
            <Image
              source={
                openDropDown
                  ? require('../images/up.png')
                  : require('../images/drop.png')
              }
            />
          </TouchableOpacity>
        </View>
        {openDropDown && (
          <View
            style={{
              width: 360,
              height: 400,
              backgroundColor: 'white',
              elevation: 15,
              marginTop: 20,
              borderRadius: 10,
            }}>
            <View
              style={{
                width: '90%',
                height: 55,
                borderRadius: 10,
                borderWidth: 0.5,
                alignSelf: 'center',
                marginTop: 20,
                borderColor: '#9e9e9e',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: 10,
                paddingRight: 10,
                marginBottom: 10,
              }}>
              <TextInput
                style={{
                  width: '80%',
                  height: '100%',
                  color: 'black',
                }}
                placeholder="Search State Here...!"
                value={search}
                onChangeText={txt => {
                  setSearch(txt);
                  onFilter(txt);
                }}
              />
              {search !== '' &&
                <TouchableOpacity
                  onPress={() => {
                    setSearch('');
                    setStates(tempStates);
                  }}>
                  <Image source={require('../images/clear.png')} />
                </TouchableOpacity>
              }
            </View>
            <FlatList
              data={states}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: '85%',
                      alignSelf: 'center',
                      height: 40,
                      borderBottomWidth: 0.3,
                      justifyContent: 'center',
                      borderBottomColor: '#9e9e9e',
                    }}
                    onPress={() => {
                      setSelectedState(item.name);
                      setOpenDropDown(false);
                    }}>
                    <Text
                      style={{
                        color: 'black',
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) }
      </View>

      <View>
      <View style={{width: 400, height: 450, marginBottom: 150, backgroundColor: '#9e9e9e', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: '600', fontSize: 20, alignSelf: 'flex-start', marginTop: 1}}>
          {'Redux Toolkit' + currentPage + "/" + totalPages + "pages"}
        </Text>
      <Pdf
        trustAllCerts={false}
        source={require('../images/sample.pdf')}
        onLoadComplete={(numberOfPages, filePath) => {
          setTotalPages(numberOfPages)
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        enablePaging
        horizontal
        onPageChanged={(page, numberOfPages) => {
          setCurrentPage(page)
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={{width: '90%', height: 380, }}
      />
      </View>
        <Text
          style={{fontSize: 30, marginBottom: 30, marginTop: 10}}
          onPress={() => {
            navigation.openDrawer();
          }}>
          Open Side Drawer
        </Text>
      </View>
    </View>
  );
};

export default Screen1;
