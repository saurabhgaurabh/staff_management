import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, BackHandler } from 'react-native'
import CustomHeader from '../Components/CustomHeader'
import styles from '../Screens/MainStyle'
import imagePath from '../constants/imagePath'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'

const AddTeacherList = () => {
  const navigation = useNavigation();
  const { myStaffData } = useSelector(state => state.login)
  console.log(myStaffData, "staffData...---")
  console.log(myStaffData.data, "new staff Data - - -")
  // console.log(myStaffData[0].addTeacherData, "staffData...---")
  // console.log(myStaffData.addTeacherData.address_teacher, "staffData...")
  const newArray = []
  newArray.push(myStaffData)

  // console.log(newArray[0].addTeacherData," new data of array")




  return (
    <View>
      <CustomHeader name={'Existing Members'} color="#2da600" />
      {/* <Animatable.Text animation="zoomIn" delay={2} style={styles.profileHeading}>View All Details </Animatable.Text> */}
      <View style={{ flexDirection: 'row', backgroundColor: 'red', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'column' , backgroundColor: 'green', borderRadius: 10}}>
          <View style={{}}><Text>Add More</Text></View>
        </View>
      </View>
      <ScrollView showsHorizontalScrollIndicator={true} contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}>
        {myStaffData.data?.map((item, index) => {
          return (
            <View style={{ paddingTop: 20 }} key={index}>
              <View style={styles.BoxContainer}>
                <View style={styles.img_Box}>
                  <View style={styles.img_boxSchoolID}><Text style={styles.textCss}>{'ID: ' + item?.school_id}</Text></View>
                  <View style={styles.img_box_Img}><Image style={{ height: 20, width: 10 }} source={imagePath.icMore} /></View>
                </View>
                <View style={styles.BoxContainer_data}>
                  <View style={styles.leftContainer}>
                    <View style={styles.leftContainer_Css}><Image style={{ height: 80, width: '65%' }} source={imagePath.icDummyUser} /></View>
                    <View style={styles.leftContainer_Css}><Text style={styles.textCss}>{item?.username_teacher || 'Username'}</Text></View>
                  </View>
                  <View style={styles.rightContainer}>
                    <View style={styles.rightContainer_Css}><Text style={styles.textCss}>{item?.teacher_name}</Text></View>
                    <View style={styles.rightContainer_Css}><Text style={styles.textCss}>{'Age: ' + item?.age}</Text></View>
                    <View style={styles.rightContainer_Css}><Text style={styles.textCss}>{item?.email_teacher ? item?.email_teacher : 'example@gmail.com'}</Text></View>
                    <View style={styles.rightContainer_Css}><Text style={styles.textCss}>{'Mobile: ' + (item?.mobile || '*'.repeat(10))}</Text></View>
                    <View style={styles.rightContainer_Css}><Text style={styles.textCss}>{'Salary: ' + item?.salary}</Text></View>
                    <View style={styles.rightContainer_Css}><Text style={styles.textCss}>{'Residence: ' + item?.address_teacher}</Text></View>
                  </View>
                </View>
              </View>
            </View>
          )
        })}
      </ScrollView>
      {/* {myStaffData.addTeacherData?.map((item)=><Text>{item.age}</Text>)} */}
    </View>
  )
}

export default AddTeacherList