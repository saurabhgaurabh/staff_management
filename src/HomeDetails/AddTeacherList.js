import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, BackHandler } from 'react-native'
import CustomHeader from '../Components/CustomHeader'
import styles from '../Screens/MainStyle'
import imagePath from '../constants/imagePath'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux'

const AddTeacherList = () => {
  const navigation = useNavigation();
  const { myStaffData } = useSelector(state => state.login)
  console.log(myStaffData, "staffData...")

  return (
    <View>
      <CustomHeader name={'Listing of Added Staff'} color="#2da600" />
      <Animatable.Text animation="zoomIn" delay={2} style={styles.profileHeading}>View All Details </Animatable.Text>
      <ScrollView showsHorizontalScrollIndicator={true}>
        <View style={{ flexDirection: 'column', backgroundColor: '#fdf4c9', height: 100, width: '95%', alignContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 5, borderBottomWidth: 0.9, borderBottomColor: 'grey', opacity: 0.4, }}>
          <View style={{ flexDirection: 'row', width: '100%', }}>
            <View style={{ flexDirection: 'column', width: '50%', backgroundColor: 'red', paddingHorizontal: 10 }}><Text style={styles.textCss}>Tech_ID</Text></View>
            <View style={{ flexDirection: 'column', width: '50%', backgroundColor: 'red', paddingLeft: 100 }}><Text>Tech_ID</Text></View>
          </View>
        </View>

      </ScrollView>
    </View>
  )
}

export default AddTeacherList