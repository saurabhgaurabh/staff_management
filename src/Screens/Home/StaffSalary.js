import { View, Text, BackHandler, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from '../MainStyle'
import { TextInput } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient';


const StaffSalary = () => {

  const navigation = useNavigation();

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
    };
  }, [])

  const [state, setState] = useState({ irctc_data: "" });
  const handleData = (text) => { setState({ ...state, irctc_data: text }) }

  const getDate = async () => {
    const { irctc_data } = state

    try {
      const response = await fetch(`https://irctc1.p.rapidapi.com/api/v1/searchStation`, {
        method: 'POST',
        headers: {
          'X-RapidAPI-Key': 'ebe08e9d3bmshf40b72c7ef66126p17250fjsn84d4fa932de7',
          'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        },
        body: JSON.stringify({ irctc_data })
      });

      const result = await response.json();
      console.log(result, "adisplay data.");
    } catch (error) {
      alert(`Internal Client Error: ${error}`);
      console.log(error, "result error");
    }
  }
  return (
    <View style={{ paddingTop: 30 }}>
      <View style={styles.FormMainStyles}>
        <View style={styles.signUp_input}>
          <TextInput style={styles.Maininput}
            label="PNR No."
            placeholder='PNR No.'
            activeUnderlineColor="#0288D1"
            activeOutlineColor="#2da600"
            mode='outlined'
            outlineColor="green"
            returnKeyLabel='next'
            placeholderTextColor='#000'
            autoCapitalize='none'
            onChangeText={handleData}
          />
        </View>
      </View>
      <View style={styles.overlay}>
        <View style={styles.inputContainer}>
          <LinearGradient colors={['#63f880', '#2a913e']} style={styles.linearCss}>
            <View style={styles.networking_container}>
              <TouchableOpacity style={styles.cont_with_new_acc} onPress={getDate}>
                <Text style={styles.networking_txt}>Save</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </View>
    </View>
  )
}

export default StaffSalary