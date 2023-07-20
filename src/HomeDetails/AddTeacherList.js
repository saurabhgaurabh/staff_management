import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, BackHandler, RefreshControl } from 'react-native'
import CustomHeader from '../Components/CustomHeader'
import styles from '../Screens/MainStyle'
import imagePath from '../constants/imagePath'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import navigationStrings from '../constants/navigationStrings'
import { uploadFiles } from 'react-native-fs'
import { ServerUrl } from '../Helper/Helper'



const AddTeacherList = () => {
  
  const navigation = useNavigation();
  const addStaff = () => { navigation.navigate(navigationStrings.AddUPTeacher) }
  const { myStaffData } = useSelector(state => state.login)
  console.log(myStaffData.data, "new staff Data - - -")
  // console.log(myStaffData.data.image, "new staff Data - - -")


  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setRefreshing(false);
  };

  const dmImg = require('../assets/images/dummy_user.png');

  return (
    <View>
      <CustomHeader name={'Existing Members'} />
      {/* <Animatable.Text animation="zoomIn" delay={2} style={styles.profileHeading}>View All Details </Animatable.Text> */}
      <View style={styles.teacherListAddMenu}>
        <View style={styles.contanerBody}>
          <LinearGradient colors={['#f9cc0a', '#f9b511']} style={styles.linearCss} >
            <View style={styles.ContainerCss}>
              <TouchableOpacity onPress={addStaff}>
                <Text style={styles.btn_txt}>Add More</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </View>
      <ScrollView showsHorizontalScrollIndicator={true} contentContainerStyle={{ flexGrow: 1, paddingBottom: 110 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        {myStaffData.data?.map((item, index) => {
          return (
            <Animatable.View animation={'fadeInUpBig'} delay={index * 500} duration={1000} style={{ paddingTop: 20 }} key={index}>
              <View style={styles.BoxContainer}>
                <View style={styles.img_Box}>
                  <View style={styles.img_boxSchoolID}><Text style={styles.textCsslist}>{'ID: ' + item?.school_id}</Text></View>
                  <View style={styles.img_box_Img}><Image style={{ height: 20, width: 10 }} source={imagePath.icMore} /></View>
                </View>
                <View style={styles.BoxContainer_data}>
                  <View style={styles.leftContainer}>
                    {/* <View style={styles.leftContainer_Css}><Image style={{ height: 80, width: '65%' }} source={imagePath.icDummyUser} /></View> */}
                    <View style={styles.leftContainer_Css}><Image style={styles.addTeachImgCss} source={item?.image ? { uri: `${ServerUrl()}${item?.image}` } : dmImg} /></View>
                    <View style={styles.leftContainer_Css}><Text style={styles.textCsslist}>{item?.username_teacher || 'Username'}</Text></View>
                  </View>
                  <View style={styles.rightContainer}>
                    <View style={styles.rightContainer_Css}><Text style={styles.textCsslist}>{item?.teacher_name.toUpperCase()}</Text></View>
                    <View style={styles.rightContainer_Css}><Text style={styles.textCsslist}>{'Age: ' + item?.age}</Text></View>
                    <View style={styles.rightContainer_Css}><Text style={styles.textCsslist}>{item?.email_teacher ? item?.email_teacher : 'example@gmail.com'}</Text></View>
                    <View style={styles.rightContainer_Css}><Text style={styles.textCsslist}>{'Mobile: ' + (item?.mobile || '*'.repeat(10))}</Text></View>
                    <View style={styles.rightContainer_Css}><Text style={styles.textCsslist}>{'Salary: ' + item?.salary}</Text></View>
                    <View style={styles.rightContainer_Css}><Text style={styles.textCsslist}>{'Residence: ' + item?.address_teacher}</Text></View>
                  </View>
                </View>
              </View>
            </Animatable.View>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default AddTeacherList