import { View, Text, BackHandler, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import imagePath from '../../constants/imagePath';
import styles from '../MainStyle';
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../../Components/CustomHeader';




const AddUpTeacher = () => {
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

  return (
    <View>
      {/* <View style={styles.headerComponent}>
        <View style={styles.headerTxt}>
          <TouchableOpacity onPress={handleBackButtonClick} >
            <Image style={{ height: 25, width: 20 }} source={imagePath.icbackNoraml} />
          </TouchableOpacity>
        </View>
        <View style={styles.header_tet_body}>
          <Text style={styles.headerText}>Registration</Text>
        </View>
      </View> */}

      <CustomHeader name="My Custom Header" color="#8e2cc3" />
      <View style={{}}></View>

      <ScrollView>
      </ScrollView>
    </View>
  )
}


export default AddUpTeacher