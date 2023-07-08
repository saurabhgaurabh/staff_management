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
      {/* <Animatable.Text animation="zoomIn" delay={2} style={styles.profileHeading}>View All Details </Animatable.Text> */}
      <ScrollView showsHorizontalScrollIndicator={true}>
        <View style={{ paddingTop: 20 }}>
          <View style={{ flexDirection: 'column', backgroundColor: '#fdf4c9', height: '100%', width: '95%', alignContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 5, borderBottomWidth: 0.9, borderBottomColor: 'grey', opacity: 0.4, }}>
            <View style={{ flexDirection: 'row', width: '100%', }}>
              <View style={{ flexDirection: 'column', width: '50%', paddingHorizontal: 10 }}><Text style={styles.textCss}>Tech_ID</Text></View>
              <View style={{ flexDirection: 'column', width: '50%', paddingLeft: 130 }}><Image style={{ height: 20, width: 10 }} source={imagePath.icMore} /></View>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
              <View style={{ flexDirection: 'column', width: '35%', }}>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}><Image style={{ height: 90, width: '60%' }} source={imagePath.icDummyUser} /></View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}><Text style={styles.textCss}>Username</Text></View>
              </View>
              <View style={{ flexDirection: 'column', width: '65%', }}>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}><Text style={styles.textCss}>Teacher Name</Text></View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}><Text style={styles.textCss}>Age 22</Text></View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}><Text style={styles.textCss}>saurabhprajapati0792@gmail.com</Text></View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}><Text style={styles.textCss}>Mobile 9259926746</Text></View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}><Text style={styles.textCss}>Salary 29000</Text></View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}><Text style={styles.textCss}>address</Text></View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default AddTeacherList