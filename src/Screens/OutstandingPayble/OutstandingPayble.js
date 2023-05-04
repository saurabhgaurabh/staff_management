import { StyleSheet, Button, Platform, Text, View, SafeAreaView, Image, ScrollView, FlatList, RefreshControl, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { TouchableOpacity } from 'react-native'
import { StatusBar } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import imagePath from '../../constants/imagePath'
import { SelectList } from 'react-native-dropdown-select-list'
import { ServerUrlPeddle } from '../../Helper/Helper'
import { outstandingRecievable } from '../../redux/MyLoginSlice'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'






const OutstandingPayble = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
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


  const asOnDate = ["date1", "date2", "date3"];
  const [dated, setDated] = useState(asOnDate[0]);

  const reportType = ["report-1", "report-2", "report-3"];
  const [report, setReport] = useState(reportType[0]);
  const [CurrentDate, setCurrentDate] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  useState(() => {
    var date = new Date().getDate(); //current Date
    var month = new Date().getMonth(); //current Month
    var year = new Date().getFullYear(); //full year
    var hours = new Date().getHours(); //full year
    var minutes = new Date().getMinutes(); //minutes
    var seconds = new Date().getSeconds(); //for secomds

    setCurrentDate(
      date + '/' + month + '/' + year,
    );
  }, [])


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

  }

  const showModeenddate = (currentMode) => {
    setShowEnd(true);
    setModEend(currentMode);
  }


  // useEffect(() => {
  //   BillReceivableApi();
  // }, []);


  const onRefresh = () => {
    setuserdata([]);//Clear old data of the list   
    BillReceivableApi(); //Call the Service to get the latest data
  };



  const [userdata, setuserdata] = useState([]);
  const BillReceivableApi = async () => {
    try {
      setRefreshing(true);
      const response = await fetch(`${ServerUrlPeddle()}Leadchain/Peddle/DataServiceForMobile/BillsReceivableReport`, {
        method: "POST",
        headers: {
          'apauth': '{"ConsoleIdentifier":"","DeviceID":"D2DA6C4E28BEA80B","DeviceType":0,"Email":"saurabh@gmail.com","Password":"123"}',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "AccountCode": 1290,
          "BillStatus": 0,
          "CompanyID": 1,
          "FromDateString": "Apr 01, 2022 00:00:00",
          "StatusDateString": "Jan 02, 2023 00:00:00",
          "ToDateString": "Jan 02, 2023 00:00:00",
          "UserID": 1
        })
      });
      const result = await response.json();
      // setuserdata([result])
      setRefreshing(false);
      dispatch(outstandingRecievable([result]))
      setuserdata([result])
    } catch (error) {
      console.log(error)
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
    <View>
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
      <View style={{ flexDirection: 'column' }}>
        <View style={styles.middleContainer}>
          <View style={{ flexDirection: 'column' }}><Text style={styles.item}>Party Name</Text></View>
          <View style={{ flexDirection: 'column' }}><Text style={styles.startdatecss}>
            <SelectList
            // style={{zIndex: 5}}
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
            />
          </Text>
          </View>
        </View>

        <View style={styles.middleContainer}>
          <View style={{ flexDirection: 'column' }}><Text style={styles.item}>Start Date:</Text></View>
          <View style={{ flexDirection: 'column', position: 'absolute', paddingLeft: 125 }}><Text style={styles.item}>{text}</Text></View>
          <View style={{ flexDirection: 'column', marginTop: 8 }}><Text style={styles.startdatecss}>
            <TouchableOpacity onPress={() => showMode('date')}>
              <Image style={{ height: 25, width: 25 }} source={imagePath.icCalender} />
            </TouchableOpacity>
          </Text>
          </View>
        </View>

        <View style={styles.middleContainer}>
          <View style={{ flexDirection: 'column' }}><Text style={styles.item}>End Date:</Text></View>
          <View style={{ flexDirection: 'column', position: 'absolute', paddingLeft: 125 }}><Text style={styles.item}>{textEnd}</Text></View>
          <View style={{ flexDirection: 'column', marginTop: 8 }}><Text style={styles.startdatecss}>
            <TouchableOpacity onPress={() => showModeenddate('date')}>
              <Image style={{ height: 25, width: 25 }} source={imagePath.icCalender} />
            </TouchableOpacity>
          </Text>
          </View>
        </View>
        <View style={styles.middleContainer}>
          <View style={{ flexDirection: 'column' }}><Text style={styles.item}>End Date:</Text></View>
          <View style={{ flexDirection: 'column', position: 'absolute', paddingLeft: 125 }}><Text style={styles.item}>{CurrentDate}</Text></View>
          <View style={{ flexDirection: 'column', marginTop: 8 }}><Text style={styles.startdatecss}>
            <TouchableOpacity >
              <Image style={{ height: 25, width: 25 }} source={imagePath.icCalender} />
            </TouchableOpacity>
          </Text>
          </View>
        </View>

        <View style={{ alignItems: 'flex-end', }}>
          <TouchableOpacity onPress={BillReceivableApi}>
            <Image style={{ height: 25.5, width: 26.9 }} source={imagePath.icrefresh} />
          </TouchableOpacity>
        </View>
        <View style={styles.Headercontainer}>
          <View style={styles.HeadermainCard}>
            <View style={styles.Headermainstyle}>
              <Text style={styles.Headeritemhead}>Date</Text>
              <Text style={styles.Headeritemhead}>Type</Text>
              <Text style={styles.Headeritemhead}>Number</Text>
              <Text style={styles.Headeritemhead}>Amount</Text>
            </View>
            <View style={styles.Headermainstylesecond}>
              <Text style={styles.Headeritemheadsecond}>Pending</Text>
              <Text style={styles.Headeritemheadsecond}>Total</Text>
              <Text style={styles.Headeritemheadsecond}>DueDate</Text>
              <Text style={styles.Headeritemheadsecond}>Days</Text>
            </View>
          </View>
        </View>

        <View style={styles.outputcontainer} >
          <FlatList
            data={userdata}
            renderItem={({ item }) => {
              const { DateString, PendingAmount, TypeName, Amount, TotalAmount, DueDateString, ExceededDays, } = item.BillsReceivable?.Bills[0] //destructuring data...
              return (
                <View style={{ display: 'flex' }}>
                  <View style={styles.mainCard}>
                    <View style={styles.mainstyle}>
                      <Text style={styles.itemData}>{DateString?.split(' ')[0]}{DateString.split(' ')[1]}</Text>
                      <Text style={styles.itemData}>{PendingAmount}</Text>
                    </View>
                    <View style={styles.mainstyle}>
                      <Text style={styles.itemData}>{TypeName}</Text>
                      <Text style={styles.itemData}>{TotalAmount}</Text>
                    </View>
                    <View style={styles.mainstyle}>
                      <Text style={styles.itemData}>{item.BillsReceivable.BillCount}</Text>
                      <Text style={styles.itemData}>{DueDateString.split(' ')[0]}{DueDateString.split(' ')[1]}</Text>

                    </View>
                    <View style={styles.mainstyle}>
                      <Text style={styles.itemData}>{Amount}</Text>
                      <Text style={styles.itemData}>{ExceededDays}</Text>
                    </View>
                    <View style={styles.mainstyle}>
                      {/* <Text style={styles.itemData}>{PendingAmount}</Text> */}
                    </View>
                  </View>
                </View>
              )}}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            enableEmptySections={true}
          />
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  scrcontainer: {
    display: 'flex',
  },
  contentContainer: {
    paddingHorizontal: 5,
  },
  mainCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 12,
    flexDirection: 'row',
    paddingHorizontal: 20,
    height: 70,
  },
  mainstyle: {
    flexDirection: 'column',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#a5b69c',
    height: 45,
    alignItems: 'center'
  },
  itemData: {
    paddingRight: 1,
    paddingLeft: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 45,
    fontSize: 13,
    justifyContent: 'space-between',
    color: 'black'
  },
  outputcontainer: {
    paddingTop: 5,
    display: 'flex',
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
  Headermainstylesecond: {
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
    paddingLeft: 5,
    flexDirection: 'row'
  },
  Headeritemheadsecond: {
    height: 20,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'black',
    paddingLeft: 1,
    flexDirection: 'row',
    paddingRight: 30,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  middleContainer: {
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
    zIndex: 5
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
    flexDirection: 'column',
    width: "50%",
    height: 'auto',
    marginHorizontal: 2,
    zIndex: 5
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
    fontSize: 19,
  },
  FlexBoxTwo: {
    paddingRight: 1,
    height: 70,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',

  },
  payblebuttonstyle: {
    backgroundColor: '#0288D1',
    padding: 8,
    margin: 15,
    height: 45,
    alignContent: 'center',
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15,
    borderTopStartRadius: 15,
    borderBottomStartRadius: 15,
  },
  submitbuttontext: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 110,
    alignItems: 'center',
    alignContent: 'center',
    paddingLeft: 135
  },
  datestyle: {
    height: 100,
    width: '100%',
    flexDirection: 'column',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    alignItems: 'center'
  },
  dateintostyle: {
    padding: 10,
    height: 60
  }
})
export default OutstandingPayble
