import React, { useEffect, useState } from 'react'
import { Text, View, Image, Pressable, TouchableOpacity, Button, ScrollView, StyleSheet, Modal, ToastAndroid, BackHandler, RefreshControl, SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../MainStyle';
import { loginFetchDataForProfile, profileUpdate } from '../../redux/MyLoginSlice';
import { TextInput } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import navigationStrings from '../../constants/navigationStrings';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { ServerUrl } from '../../Helper/Helper';
import { loginFetchDataForProfile_token } from '../../redux/MyLoginSlice';
import imagePath from '../../constants/imagePath';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { ZoomIn } from 'react-native-reanimated';

const Profile = ({ navigation }) => {

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
    };
  }, []);

  const getMyObjectRemove = async () => {
    dispatch(loginFetchDataForProfile(''))
    let dd = await AsyncStorage.removeItem('tokenresult')
    navigation.navigate(dd ? navigationStrings.HOME : navigationStrings.LOGIN);
    ToastAndroid.show('User Logged Out Successfully', ToastAndroid.CENTER);
  }
  const nofifyScreen = ()=>{
    navigation.navigate(navigationStrings.NOTIFY);
  }


  const onRefresh = () => {
  };
  const [refreshing, setRefreshing] = React.useState(false);



  return (
    <View style={{ padding: 20 }}>
      <Animatable.Text animation="zoomIn" delay={2} style={styles.profileHeading}>My Profile </Animatable.Text>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View style={styles.profile_header_component}>
          <View style={styles.profile_img_css}>
            <Image source={imagePath.icDummyUser} style={styles.img_size} />
          </View>
          <View style={styles.profile_info}>
            <LinearGradient colors={['#9f9bd4', '#7c79b0']}
              style={styles.linearCss}>
              <View style={styles.profile_info_css}><Animatable.Text animation={'fadeIn'} style={styles.profileText}>Saurabh kumar</Animatable.Text></View>
              <View style={styles.profile_info_css}><Animatable.Text animation={'fadeIn'} style={styles.notificationText}>saurabhprajapati0792@gmail.com</Animatable.Text></View>
              <View style={styles.profile_info_css}><Animatable.Text animation={'fadeIn'} style={styles.notificationText}>9259926746</Animatable.Text></View>
            </LinearGradient>
          </View>
        </View>

        <Animatable.Text animation="zoomIn" delay={2} style={styles.profileHeading_second}>My Accessibility </Animatable.Text>

        <View style={styles.profile_menu}>
          <View style={styles.profile_main_card}>
            <View style={styles.profile_card}>
              <LinearGradient colors={['#e3f7f1', '#d2b3e9']} style={styles.linearCss}>
                <View style={styles.profile_card_img}><Image source={imagePath.icEditProfile} style={{ height: 30, width: 30 }} /></View>
                <View style={styles.profile_card_txt}><Text style={styles.textCss}>Edit Profile</Text></View>
              </LinearGradient>
            </View>
            <View style={styles.profile_card}>
              <LinearGradient colors={['#e3f7f1', '#c7ce78']} style={styles.linearCss}>
                <View style={styles.profile_card_img}><Image source={imagePath.icContactUs} style={{ height: 30, width: 30 }} /></View>
                <View style={styles.profile_card_txt}><Text style={styles.textCss}>Contact Us</Text></View>
              </LinearGradient>
            </View>
          </View>
        </View>
        <View style={styles.profile_menu}>
          <View style={styles.profile_main_card}>
            <View style={styles.profile_card}>
              <LinearGradient colors={['#e3f7f1', '#76c67a']} style={styles.linearCss}>
                <View style={styles.profile_card_img}><Image source={imagePath.icPassword} style={{ height: 30, width: 30 }} /></View>
                <View style={styles.profile_card_txt}><Text style={styles.textCss}>Change Passsword</Text></View>
              </LinearGradient>
            </View>
            <View style={styles.profile_card}>
              <LinearGradient colors={['#e3f7f1','#4c98bf']} style={styles.linearCss}>
                <View style={styles.profile_card_img}><Image source={imagePath.icAboutUs} style={{ height: 30, width: 30 }} /></View>
                <View style={styles.profile_card_txt}><Text style={styles.textCss}>About Us</Text></View>
              </LinearGradient>
            </View>
          </View>
        </View>
        <View style={styles.profile_menu}>
          <View style={styles.profile_main_card}>
            <View style={styles.profile_card}>
              <LinearGradient colors={['#e3f7f1', '#f57a93']} style={styles.linearCss}>
                <View style={styles.profile_card_img}><Image source={imagePath.icLogOut} style={{ height: 30, width: 30 }} /></View>
                <View style={styles.profile_card_txt}><Text style={styles.textCss}>Logout</Text></View>
              </LinearGradient>
            </View>
            <View style={styles.profile_card}>
            <TouchableOpacity onPress={nofifyScreen}>        
              <LinearGradient colors={['#e3f7f1', '#f57a93']} style={styles.linearCss}>
                <View style={styles.profile_card_img}><Image source={imagePath.icLogOut} style={{ height: 30, width: 30 }} /></View>
                <View style={styles.profile_card_txt}><Text style={styles.textCss}>Notifications</Text></View>
              </LinearGradient>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View >
  )
}


export default Profile