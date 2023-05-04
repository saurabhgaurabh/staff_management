import { StyleSheet, Text, View, Image, Button, FlatList, TouchableOpacity, ScrollView, SafeAreaView, RefreshControl, BackHandler, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker'
import imagePath from '../../constants/imagePath';
import { SelectList } from 'react-native-dropdown-select-list'
import { ServerUrlPeddle } from '../../Helper/Helper';
import { useDispatch } from 'react-redux';
import { ledgerBalcance } from '../../redux/MyLoginSlice';



const LedgerBalance = ({ navigation }) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(true);
  const [selected, setSelected] = useState("");
  const data = [
    { key: '1', value: 'Mobiles', disabled: true },
    { key: '2', value: 'Appliances' },
    { key: '3', value: 'Cameras' },
    { key: '4', value: 'Computers', disabled: true },
    { key: '5', value: 'Vegetables' },
    { key: '6', value: 'Diary Products' },
    { key: '7', value: 'Drinks' },
  ]



  const period = ["This Month", "This Year", "Last Month", "Last Week"];
  const [party, setParty] = useState(period[0]);

  //start  Date Time Picker
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
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }


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
  }

  const showModeenddate = (currentMode) => {
    setShowEnd(true);
    setModEend(currentMode);
  }


  const onRefresh = () => {
    setuserdata([]);
    AccountLedgerApi();
  };

  const [userdata, setuserdata] = useState([]);


  const AccountLedgerApi = async () => {
    try {
      const response = await fetch(`${ServerUrlPeddle()}Leadchain/Peddle/DataServiceForMobile/AccountLedgerReport`, {
        method: "POST",
        headers: {
          'apauth': '{"ConsoleIdentifier":"","DeviceID":"D2DA6C4E28BEA80B","DeviceType":0,"Email":"saurabh@gmail.com","Password":"123"}',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "AccountCode": "1290",
          "CompanyID": "1",
          "FromDateString": "Apr 01, 2022 00:00:00",
          "ShowLedgerRecords": 0,
          "ToDateString": "Nov 16, 2022 00:00:00",
          "UserID": "1"
        })
      });
      const result = await response.json();
      setRefreshing(false);
      setuserdata([result])
      dispatch(ledgerBalcance([result]))
    } catch (error) {
    }
  }

  
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
        <View style={{ flexDirection: 'column' }}><Text style={styles.item}>Party Name</Text></View>
        <View style={{ flexDirection: 'column' }}><Text style={styles.startdatecss}>
          <SelectList
            style={{ zIndex: 5 }}
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
            maxHeight={200}
            dropdownStyles={{ backgroundColor: 'lightgray' }}
          />

        </Text>
        </View>
      </View>
      <View style={styles.ddt}>
        <View style={{ flexDirection: 'column' }}><Text style={styles.item}>Period</Text></View>
        <View style={{ flexDirection: 'column' }}><Text style={styles.startdatecss}>
          <SelectList
            style={{ zIndex: 99999 }}
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
          />
        </Text>
        </View>
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
          <TouchableOpacity onPress={() => showModeenddate('date')}>
            <Image style={{ height: 25, width: 25 }} source={imagePath.icCalender} />
          </TouchableOpacity>
        </Text>
        </View>
      </View>


      <View style={{ alignItems: 'flex-end', }}>
        <TouchableOpacity onPress={AccountLedgerApi}>
          <Image style={{ height: 25.5, width: 26.9 }} source={imagePath.icrefresh} />
        </TouchableOpacity>
      </View>
      {/* headers for API data */}
      <View style={styles.Headercontainer}>
        <View style={styles.HeadermainCard}>
          <View style={styles.Headermainstyle}>
            <Text style={styles.Headeritemhead}>Date</Text>
            <Text style={styles.Headeritemhead}>Type</Text>
            <Text style={styles.Headeritemhead}>Vch No.</Text>
            <Text style={styles.Headeritemhead}>Debit</Text>
            <Text style={styles.Headeritemhead}>Credit</Text>
            <Text style={styles.Headeritemhead}>Balance</Text>
          </View>
          <View>
            <Text style={styles.Headeritemhead}>Narration</Text>
          </View>
        </View>
      </View>
      <View style={styles.container} >
        <FlatList data={userdata}
          renderItem={({ item }) => (
            <View>
              <View style={styles.mainCard}>
                <View style={styles.mainstyle}>
                  <Text style={styles.itemData}>{item.AccountLedger.Transactions[0].DateString.split(' ')[0]}
                    {item.AccountLedger.Transactions[0].DateString.split(' ')[1]}
                  </Text>
                  <Text style={{ paddingLeft: 10 }} >{item.AccountLedger.CompanyName}</Text>
                </View>
                <View style={styles.mainstyle}>
                  <Text style={styles.itemData}>{item.AccountLedger.Transactions[0].TypeName}</Text>
                </View>
                <View style={styles.mainstyle}>
                  <Text style={styles.itemData}>{item.AccountLedger.Transactions[0].Number.replace(/\s+/g, ' ')}</Text>
                </View>
                <View style={styles.mainstyle}>
                  <Text style={styles.itemData}>{item.AccountLedger.TotalDebit}</Text>
                </View>
                <View style={styles.mainstyle}>
                  <Text style={styles.itemData}>{item.AccountLedger.TotalCredit}</Text>
                </View>
                <View style={styles.mainstyle}>
                  <Text style={styles.itemData}>{item.AccountLedger.Transactions[0].Balance}</Text>
                </View>
              </View>
            </View>
          )}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          enableEmptySections={true}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemText: {
    height: 50,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    padding: 18,
    color: 'black'
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
    height: 50,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 15,
    flexDirection: 'column',
    width: "50%",
    height: 'auto',
    marginHorizontal: 2,
    zIndex: 5
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
  itemhead: {
    height: 22,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    paddingLeft: 15,
  },
  Headeritemhead: {
    height: 20,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    paddingLeft: 10,
  },
  itemData: {
    paddingRight: 7,
    paddingLeft: 9,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    fontSize: 13,
    color: 'black',
    alignSelf: 'center'
  },
  narrationitemData: {
    paddingLeft: 1,
    fontSize: 13,
  },

  itemcontent: {
    height: 50,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    padding: 18,
    paddingRight: 120,
    paddingVertical: 10
  },
  mainstyle: {
    flexDirection: 'column',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#a5b69c',
    height: 45,
    alignSelf: 'center'
  },
  Headermainstyle: {
    flexDirection: 'row',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#a5b69c',
  },
  mainCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 12,
    flexDirection: 'row',
    // paddingHorizontal: 22,
    height: 70,
  },
  HeadermainCard: {
    backgroundColor: '#fff',
    // backgroundColor: 'red',
    borderRadius: 15,
    padding: 15,
    paddingHorizontal: 15,
    height: 70,

  },

  card: {
    padding: 20,
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titlecard: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 10,
    color: 'gray',
  },
  container: {
    paddingTop: 5,
    display: 'flex',
  },
  Headercontainer: {
    display: 'flex',
    paddingTop: 10,
    // backgroundColor: 'gray'
  },
  Datacontainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    overflow: 'scroll',
    justifyContent: "center",
    alignItems: "center",
    overflow: 'scroll'
  },
  title: {
    padding: 15,
    overflow: 'scroll',
    fontWeight: 'bold',
    // margin: 10,
  },
  contentContainer: {
    paddingHorizontal: 5,
  },
  scrcontainer: {
    display: 'flex',
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
    fontWeight: 'bold',
  },
  tdx: {
    padding: 10,
    marginHorizontal: 15,
    borderColor: '#000',
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
  },

  safeareastyle: {
    width: 'auto',
    backgroundColor: 'rgb(122, 196, 115)',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    fontWeight: 800,
    fontSize: 45,
    paddingBottom: 5
  },
  topheading: {
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 150,
    fontSize: 14,
    // paddingBottom: 40,
    paddingTop: -30
  },
  flexContainer: {
    // paddingTop: '10',
    display: 'flex',
    height: '50%',
    width: '98%',
    paddingTop: 10,
    justifyContent: 'space-around',
    alignContent: 'center',
    // alignItems: 'center',
    // paddingBottom: 30,
    flexDirection: 'row',
    // borderRadius: '2px solid red',
  },
  // flexContainertwo: {
  //   display: 'flex',
  //   // height: '100%',
  //   width: 98,
  // },
  FlexBoxOne: {
    // backgroundColor: 'red',
    height: 70,
    // paddingLeft: 5,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  FlexBoxTwo: {
    // backgroundColor: 'blue',
    // paddingLeft: 15,
    height: 70,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  FlexBoxDateOne: {
    margin: 2,
    alignItems: 'center',
  },
  FlexBoxDateTwo: {
    margin: 2,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#19d887',
    height: 40,
    margin: 17,
  },
  flexContainerdata: {
    height: 25,
    width: 350,
    border: '2px solid rgb(137, 28, 44)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: 'grey',
    alignContent: 'center',
    alignContent: 'center'
  },
  boxone: {
    flexDirection: 'column',
    backgroundColor: "beige",
    borderWidth: 1,
    paddingHorizontal: 6,
  },
  boxone2: {
    borderEndColor: 'black',
    flexDirection: 'column',
    paddingHorizontal: 2,
    whiteSpace: 'nowrap'
  },
  datestyle: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    alignItems: 'center'
  },
  dateintostyle: {
    paddingLeft: 22,
    alignContent: 'center',
    alignItems: 'center',
    height: 100,
    paddingTop: 20
  },
  card: {
    width: 20,
    // flexDirection: 'row',
    display: 'flex'

  }
})
export default LedgerBalance
