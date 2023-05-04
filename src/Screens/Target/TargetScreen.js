import { StyleSheet, Text, View, SafeAreaView, BackHandler } from 'react-native'
import React from 'react'
import { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { useNavigation } from '@react-navigation/native'





const TargetScreen = () => {
    const navigation = useNavigation();
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
  // const MonthsName = ["April", "May", "Jun", "July", "August", "September", "October", "November", "December", "January", "February", "March"];
  const MonthsName = ["Monthly", "Quarterly", "Yearly"];
  const [party, setParty] = useState(MonthsName[0]);
  const QuarterName = ["April-Jun", "July-September", "October-December", "January-March"];
  const [quartername, setquartername] = useState(QuarterName[0]);
  const YearName = ["2020","2021","2022"];
  const [yearname, setyearname] = useState(YearName[0]);

  return (
    <View>

      <View style={{ flexDirection: 'column' }}>
        <View style={styles.middleContainer}>
          <View style={{ flexDirection: 'column' }}><Text style={styles.monthscss}>Sale Type</Text></View>
          <View style={{ flexDirection: 'column' }}><Text style={styles.monthstextcss}>
            <SelectDropdown
              data={MonthsName}
              // defaultButtonText={getSelection}
              onSelect={(selectedItem, index) => {
                setSelected(selectedItem)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
            />
          </Text>
          </View>
        </View>
        {/* <View style={styles.ddt}>
          <View style={{ flexDirection: 'column' }}><Text style={styles.monthscss}>Quarter</Text></View>
          <View style={{ flexDirection: 'column' }}><Text style={styles.monthstextcss}>
            <SelectDropdown
              data={QuarterName}
              // defaultButtonText={getSelection}
              onSelect={(selectedItem, index) => {
                setSelected(selectedItem)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
            />
          </Text>
          </View>
        </View> */}
        {/* <View style={styles.ddt}>
          <View style={{ flexDirection: 'column' }}><Text style={styles.monthscss}>Yearly</Text></View>
          <View style={{ flexDirection: 'column' }}><Text style={styles.monthstextcss}>
            <SelectDropdown
              data={YearName}
              // defaultButtonText={getSelection}
              onSelect={(selectedItem, index) => {
                setSelected(selectedItem)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
            />
          </Text>
          </View>
        </View> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
  },
  monthscss: {
    height: 50,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    padding: 18,
    paddingRight: 10,
    color: 'black'
  },
  monthstextcss: {
    // height: 50,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingBottom: 10,
    paddingRight: 15,
  },
})
export default TargetScreen
