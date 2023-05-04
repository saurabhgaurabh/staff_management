import React, { useEffect, useState } from 'react'
import { Text, View, Image, Pressable, TouchableOpacity, Button, ScrollView, StyleSheet, Modal, ToastAndroid, BackHandler,  RefreshControl,SafeAreaView } from 'react-native'
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


const Profile = ({ navigation }) => {
  const loginData = useSelector(state => state.login)

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

  const [state, setState] = useState({ name: `${loginData.loginData.name}`, address: `${loginData.loginData.address}`, company: `${loginData.loginData.company}`, mobile: `${loginData.loginData.mobile}`, fileName: `${loginData.loginData.image}`, base64File: '' })
  const handleUsername = (e) => { setState({ ...state, name: e }) }
  const handleAddress = (e) => { setState({ ...state, address: e }) }
  const handleCompany = (e) => { setState({ ...state, company: e }) }
  const handleMobile = (e) => { setState({ ...state, mobile: e }) }

  const openGallery = () => {
    const options = {
      title: 'Select Image',
      type: 'library',
      options: {
        maxHeight: 200,
        maxWidth: 200,
        selectionLimit: 1,
        mediaType: 'photo',
        path: 'images'
      },
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        setState({ ...state, base64File: response.assets[0].base64, fileName: response.assets[0].fileName })
      }
    })
  }


  const dispatch = useDispatch();
  const login = useSelector(state => state.login)
  const { cardProduct, favoriteProduct } = useSelector(state => state.product)
  const TotalOfFavItemCount = () => {

    console.log(loginData.loginData.address," loginData")
    var dataQty = 0;
    cardProduct?.map((item) => {
      dataQty = dataQty + item.quantity
    });
    return dataQty;
  }
  const getMyObjectRemove = async () => {
    dispatch(loginFetchDataForProfile(''))
    let dd = await AsyncStorage.removeItem('tokenresult')
    navigation.navigate(dd ? navigationStrings.HOME : navigationStrings.LOGIN);
    ToastAndroid.show('User Logged Out Successfully', ToastAndroid.CENTER);
  }


  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const [aboutShowPopup, setAboutPopup] = useState(false);
  const aboutTogglePopup = () => {
    setAboutPopup(!aboutShowPopup);
  };

  const onRefresh = () => {
    loginData
};
  const [refreshing, setRefreshing] = React.useState(false);
  const updateProfile = async () => {
    const name = state.name
    const address = state.address
    const company = state.company
    const mobile = state.mobile
    const fileName = state.fileName
    if (name) {
      if (address) {
        if (company) {
          if (mobile) {
            if (fileName) {
              try {
                setRefreshing(true);
                let response = await fetch(`${ServerUrl()}profile_edit`, {
                  method: "post",
                  headers: {
                    'Authorization': `Bearer ${loginData.loginData.token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    'user_id': login.loginData.user_id,
                    'name': state.name,
                    'address': state.address,
                    'company': state.company,
                    'mobile': state.mobile,
                    'fileName': state.fileName,
                    'base64File': state.base64File
                  })
                })
                const result = await response.json();
                setRefreshing(false);
                dispatch(profileUpdate(result))
                if (result) {
                  ToastAndroid.show('User Profile Updated Successfully', ToastAndroid.SHORT);
                  setShowPopup(false)
                }
                else {
                  alert("Profile Not Updated");
                }
              } catch (error) {
                console.log(error, "Profile Error");
              }
            } else {
              alert('Image Required')
            }
          } else {
            alert('Mobile Required')
          }
        } else {
          alert('Company Required')
        }
      } else {
        alert('Address Required')
      }
    } else {
      alert('Name Required')
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ flexWrap: 'wrap', fontSize: 20, fontWeight: 'bold', paddingLeft: 10, color: 'grey' }}>My Account</Text>
      <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
      }
      >
        <View style={styles.profile_image_Css} >
          <View style={styles.profile_image_style}>
            <Image style={{ height: 80, width: 80, borderRadius: 50 }} source={{ uri: `${ServerUrl()}register_img/${login.loginData.image}`}} />
          </View>
          <View style={styles.profile_text_css} >
            <Text style={styles.dataStyleCss}>{login.loginData.name}</Text>
            <Text style={styles.dataStyleCss}>{login.loginData.email}</Text>
            <Text style={styles.dataStyleCss}>{login.loginData.mobile}</Text>
            <Text style={styles.dataStyleCss}>{login.loginData.address}</Text>
          </View>
        </View>

{console.log(login.loginData.address,login.loginData.name," login.loginData.address")}
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
          <View style={styles.profile_count}>
            <Text style={styles.font_size}>0</Text>
            <Text style={styles.profile_text}>Orders</Text>
          </View>
          <View style={styles.profile_count}>
            <Text style={styles.font_size}>{TotalOfFavItemCount()}</Text>
            <Text style={styles.profile_text}>Added</Text>
          </View>
          <View style={styles.profile_count}>
            <Text style={styles.font_size}>{favoriteProduct.length}</Text>
            <Text style={styles.profile_text}>Favorites</Text>
          </View>
        </View>

        <View style={styles.profile_middle_main_css}>
          <View style={{ flexDirection: 'row', }}>
            <Text style={styles.info_css}>Your Information</Text>
          </View>
          <View style={styles.middle_Css}>
            <View style={styles.profile_information_image}>
              <Image style={{ height: 25, width: 25, bottom: 14 }} source={require('../../assets/images/user-avatar.png')} />
            </View>

            <View style={styles.profile_information_Css}>
              <TouchableOpacity>
                <Text onPress={togglePopup} style={styles.profile_text_editProfile}>Edit Profile</Text>
              </TouchableOpacity>
              <Modal visible={showPopup} transparent={true}>
                <View style={styles.popupInnerCss}>
                  <SafeAreaView style={{ }} >
                    <TouchableOpacity onPress={togglePopup}  style={{paddingLeft: 260}}>
                      <Image style={{ height: 15, width: 15 }} source={imagePath.icClose_image} />
                    </TouchableOpacity>
                  </SafeAreaView>
                  <View style={styles.popupInfoTextCss}>
                    <Image style={{ height: 35, width: 35, paddingRight: 20, borderRadius: 50, }} source={{ uri: `${ServerUrl()}register_img/${login.loginData.image}` }} />
                    <View style={styles.inputfields}>
                      <TextInput style={styles.inputForProfile}
                        label="User Name"
                        activeUnderlineColor="#0288D1"
                        activeOutlineColor="#0288D1"
                        autoCorrect={false}
                        mode='outlined'
                        outlineColor="#0288D1"
                        returnKeyLabel='next'
                        autoCapitalize='none'
                        placeholderTextColor='#000'
                        onChangeText={handleUsername}
                        value={state.name}
                      />
                      <TextInput style={styles.inputForProfile}
                        label="Address"
                        mode='outlined'
                        activeUnderlineColor="#0288D1"
                        activeOutlineColor="#0288D1"
                        autoCorrect={false}
                        outlineColor="#0288D1"
                        returnKeyLabel='next'
                        autoCapitalize='none'
                        placeholderTextColor='#000'
                        onChangeText={handleAddress}
                        value={state.address}
                      />
                      <TextInput style={styles.inputForProfile}
                        label="Company"
                        mode='outlined'
                        activeUnderlineColor="#0288D1"
                        activeOutlineColor="#0288D1"
                        autoCorrect={false}
                        outlineColor="#0288D1"
                        returnKeyLabel='next'
                        autoCapitalize='none'
                        placeholderTextColor='#000'
                        onChangeText={handleCompany}
                        value={state.company}
                      />
                      <TextInput style={styles.inputForProfile}
                        label="Mobile"
                        mode='outlined'
                        activeUnderlineColor="#0288D1"
                        activeOutlineColor="#0288D1"
                        autoCorrect={false}
                        outlineColor="#0288D1"
                        returnKeyLabel='next'
                        autoCapitalize='none'
                        keyboardType='numeric'
                        placeholderTextColor='#000'
                        onChangeText={handleMobile}
                        value={state.mobile}
                      />
                      <View style={styles.inputForIMage}>
                        <View style={{ flexDirection: 'column', width: '40%' }}>
                          <TouchableOpacity onPress={openGallery}><Text style={styles.img_text} >Upload Image</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'column', width: '40%' }}><Text>{state.fileName}</Text></View>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity>
                        <Text onPress={updateProfile} style={styles.profile_update_event}>Update</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text onPress={togglePopup} style={styles.profile_close_editProfile}>Close</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>

          </View>
          <View style={styles.middle_Css}>
            <View style={styles.profile_information_image}>
              <Image style={{ height: 25, width: 25, bottom: 30 }} source={require('../../assets/images/information.png')} />
            </View>
            <View style={styles.profile_information_Css}>
              <TouchableOpacity>
                <Text onPress={aboutTogglePopup} style={styles.profile_text_about}>About Us</Text>
              </TouchableOpacity>
              <Modal visible={aboutShowPopup} transparent={true}>
                <View style={styles.popupInnerCss}>
                  <View style={styles.popupInfoTextCss}>
                    <Text>React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.</Text>
                    <TouchableOpacity>
                      <Text onPress={aboutTogglePopup} style={styles.profile_close_editProfile}>Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
          <View style={styles.middle_Css}>
            <View style={styles.profile_information_image}>
              <Image style={{ height: 25, width: 25, bottom: 44 }} source={require('../../assets/images/gotoLogin.png')} />
            </View>
            <View style={styles.profile_information_Css}>
              <TouchableOpacity >

                <Text onPress={getMyObjectRemove} style={styles.profile_text_logout}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>


      </ScrollView>
    </View >
  )
}


export default Profile