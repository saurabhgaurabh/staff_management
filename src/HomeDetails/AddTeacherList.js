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
  console.log(myStaffData.addTeacherData.address_teacher, "staffData...")


  return (
    <View>
      <CustomHeader name={'Listing of Added Staff'} color="#2da600" />
      {/* <Animatable.Text animation="zoomIn" delay={2} style={styles.profileHeading}>View All Details </Animatable.Text> */}
      <ScrollView showsHorizontalScrollIndicator={true}>
        {Array.isArray(myStaffData.addTeacherData) && myStaffData.addTeacherData?.map((item, index) => {
          return (
            <View key={index} style={{ paddingTop: 20 }}>
              <View style={styles.BoxContainer}>
                <View style={styles.img_Box}>
                  <View style={styles.img_boxSchoolID}><Text style={styles.textCss}>{item.school_id}</Text></View>
                  <View style={styles.img_box_Img}><Image style={{ height: 20, width: 10 }} source={imagePath.icMore} /></View>
                </View>
                <View style={styles.BoxContainer_data}>
                  <View style={styles.leftContainer}>
                    <View style={styles.leftContainer_Css}><Image style={{ height: 90, width: '60%' }} source={imagePath.icDummyUser} /></View>
                    <View style={styles.leftContainer_Css}><Text style={styles.textCss}>{item.username_teacher}</Text></View>
                  </View>
                  <View style={styles.rightContainer}>
                    <View style={styles.rightContainer_Css}><Text style={styles.textCss}>{item.teacher_name}</Text></View>
                    <View style={styles.rightContainer_Css}><Text style={styles.textCss}>{item.age}</Text></View>
                    <View style={styles.rightContainer_Css}><Text style={styles.textCss}>{item.email_teacher}</Text></View>
                    <View style={styles.rightContainer_Css}><Text style={styles.textCss}>{item.mobile}</Text></View>
                    <View style={styles.rightContainer_Css}><Text style={styles.textCss}>{item.salary}</Text></View>
                    <View style={styles.rightContainer_Css}><Text style={styles.textCss}>{item.address_teacher}</Text></View>
                  </View>
                </View>
              </View>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default AddTeacherList