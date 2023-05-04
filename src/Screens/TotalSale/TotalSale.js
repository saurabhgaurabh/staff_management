import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, FlatList ,RefreshControl,BackHandler} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native-gesture-handler'
import imagePath from '../../constants/imagePath'
import { useState ,useEffect} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { ServerUrlPeddle } from '../../Helper/Helper';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const TotalSale = () => {
  const navigation = useNavigation();
    // Date Time Picker
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('DD/MM/YYYY');
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || Date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
  
      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
      let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes ' + tempDate.getMinutes();
      setText(fDate + '\n' + fTime)
  
      console.log(fDate + '(' + fTime + ')')
    }
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    }
  
     //end  Date Time Picker
  const [dateEnd, setDatEend] = useState(new Date());
  const [modeEnd, setModEend] = useState('date');
  const [showEnd, setShowEnd] = useState(false);
  const [textEnd, setTextEnd] = useState('DD/MM/YYYY');

  const OnChange = (event, selectedDate) => {
    const currentDate = selectedDate || Date;
    setShowEnd(Platform.OS === 'ios');
    setDatEend(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes ' + tempDate.getMinutes();
    setTextEnd(fDate + '\n' + fTime)

    console.log(fDate + '(' + fTime + ')')
  }

  const showModeenddate = (currentMode) => {
    setShowEnd(true);
    setModEend(currentMode);
  }

  useEffect(() => {
    SaleRegisterApi();
  }, []);

  const [refreshing, setRefreshing] = useState(false);
  const [userdata, setuserdata] = useState([]);

  
  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }
  
  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
    };
  }, []);


  const SaleRegisterApi = async () => {
    try {
      setRefreshing(true);
      const response = await fetch(`${ServerUrlPeddle()}Leadchain/Peddle/DataServiceForMobile/SaleRegisterReport`, {
        method: "POST",
        headers: {
          'apauth': '{"ConsoleIdentifier":"","DeviceID":"D2DA6C4E28BEA80B","DeviceType":0,"Email":"saurabh@gmail.com","Password":"123"}',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "AccountCode": 0,
          "CompanyID": 1,
          "FromDateString": "Apr 01, 2022 00:00:00",
          "SaleTypeCode": 0,
          "SeriesCode": 0,
          "ToDateString": "Jan 04, 2023 00:00:00",
          "UserID": 1
        })
      });
      const result = await response.json();
      setRefreshing(false);
      setuserdata([result])
    } catch (error) {
      console.log(error, 'sssserrprss')
    }
  }

  const onRefresh = () => {
    //Clear old data of the list
    setuserdata([]);
    //Call the Service to get the latest data
    SaleRegisterApi();
  };
  return (
    
    <View style={styles.container}>
       {/* Start date */}
       <View style={{ flexDirection: 'column', }}>
        {show && (
          <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={onChange}
          />
        )}
      </View>
       {/* end date */}
      <View style={{ flexDirection: 'column', }}>
        {showEnd && (
          <DateTimePicker
            testID='dateTimePicker'
            value={dateEnd}
            mode={modeEnd}
            is24Hour={true}
            display='default'
            onChange={OnChange}
          />
        )}
      </View>
       <View style={styles.ddt}>
          <View style={{ flexDirection: 'column' }}><Text style={styles.item}>Start Date:</Text></View>
          <View style={{ flexDirection: 'column', position: 'absolute', paddingLeft: 125 }}><Text style={styles.item}>{text}</Text></View>
          <View style={{ flexDirection: 'column', marginTop: 8 }}><Text style={styles.startdatecss}>
            <TouchableOpacity onPress={() => showMode('date')}>
              <Image style={{ height: 25, width: 25 }} source={imagePath.icCalender} />
            </TouchableOpacity>
          </Text>
          </View>
        </View>
        <View style={styles.ddt}>
          <View style={{ flexDirection: 'column' }}><Text style={styles.item}>End Date:</Text></View>
          <View style={{ flexDirection: 'column', position: 'absolute', paddingLeft: 125 }}><Text style={styles.item}>{textEnd}</Text></View>
          <View style={{ flexDirection: 'column', marginTop: 8 }}><Text style={styles.startdatecss}>
            <TouchableOpacity onPress={() => showModeenddate('date')} >
              <Image style={{ height: 25, width: 25 }} source={imagePath.icCalender} />
            </TouchableOpacity>
          </Text>
          </View>
        </View>
      <View style={{ alignItems: 'flex-end', }}>
        <TouchableOpacity onPress={SaleRegisterApi}>
          <Image style={{ height: 25.5, width: 26.9 }} source={imagePath.icrefresh} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.Headercontainer}>
          <View style={styles.HeadermainCard}>
            <View style={styles.Headermainstyle}>
              <Text style={styles.Headeritemhead}>Date</Text>
              <Text style={styles.Headeritemhead}>Vch No.</Text>
              <Text style={styles.Headeritemhead}>Party</Text>
              <Text style={styles.Headeritemhead}>Sale Amt</Text>
              <Text style={styles.Headeritemhead}>Total Amt</Text>
              {/* <Text style={styles.Headeritemhead}>Tax Type</Text> */}
            </View>
            <View style={styles.Headermainstylesecond}>
               <Text style={styles.Headeritemhead}>Tax Type</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.container} >
        <FlatList
          data={userdata}
          renderItem={({ item }) => (
            <View>
              <View style={styles.mainCard}>
                <View style={styles.mainstyle}>
                  <Text style={styles.itemData}>{item.SaleRegister.Transactions[0].DateString.split(' ')[0]}{item.SaleRegister.Transactions[0].DateString.split(' ')[1]}</Text>
                  <Text style={{ paddingLeft: 1 }} >{item.SaleRegister.Transactions[0].SaleTypeName}</Text>
                </View>
                <View style={styles.mainstyle}>
                  <Text style={styles.itemData}>{item.SaleRegister.Transactions[0].Number.replace(/\s+/g, ' ')}</Text>
                </View>
                <View style={styles.mainstyle}>
                  <Text style={styles.itemData}>{item.SaleRegister.Transactions[0].AccountName}</Text>
                </View>
                <View style={styles.mainstyle}>
                  <Text style={styles.itemData}>{item.SaleRegister.Transactions[0].SaleAmount}</Text>
                </View>
                <View style={styles.mainstyle}>
                  <Text style={styles.itemData}>{item.SaleRegister.TotalAmount}</Text>
                </View>
              </View>
            </View>
          )}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
          enableEmptySections={true}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    paddingTop: 5,
    display: 'flex',
  },
  mainCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 12,
    flexDirection: 'row',
    paddingHorizontal: 25,
    height: 70,
  },
  mainstyle: {
    flexDirection: 'column',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#a5b69c',
    height: 45,
  },
  itemData: {
    paddingRight: 1,
    paddingLeft: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 30,
    fontSize: 13,
    justifyContent: 'space-between',
    color: 'black'
  },
  Headermainstylesecond: {
    flexDirection: 'row',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#a5b69c',
  },
  Headeritemheadsecond: {
    height: 20,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'black',
    paddingLeft: 1,
    flexDirection: 'row',
    paddingRight: 20,
    marginVertical: 5,
  },
  Headercontainer: {
    display: 'flex',
    paddingTop: 5,
  },
  HeadermainCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    paddingHorizontal: 25,
    height: 70,
  },
  Headermainstyle: {
    flexDirection: 'row',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#a5b69c',
  },
  Headeritemhead: {
    height: 20,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'black',
    // paddingLeft: 5,
    flexDirection: 'row'
    // paddingRight: 1
  },
  safeareastyle: {
    width: 'auto',
    backgroundColor: 'rgb(122, 196, 115)',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    // alignItems: 'center',
    fontWeight: 800,
    fontSize: 45,
    paddingBottom: 5
  },
  topheading: {
    alignItems: 'center',
    alignContent: 'center',
    // paddingLeft: 100,
    // backgroundColor: 'green'
    paddingHorizontal: 150,
    fontSize: 14,
  },
  ddt: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    display: 'flex',
    margin: 2,
    padding: 2,
    alignContent: 'center',
    justifyContent: 'space-between',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomTopRadius: 8,
    borderBottomBottomRadius: 8,
  },
  item: {
    height: 50,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    padding: 18,
    paddingRight: 10,
    color: 'black'
  },
  startdatecss: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 15,
  },
})
export default TotalSale
