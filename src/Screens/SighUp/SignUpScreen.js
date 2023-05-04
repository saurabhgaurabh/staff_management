import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Sizedbox, BackHandler, ToastAndroid, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import navigationStrings from '../../constants/navigationStrings';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { ServerUrl } from '../../Helper/Helper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { loginFetchDataForProfile, Registercheck } from '../../redux/MyLoginSlice';
import imagePath from '../../constants/imagePath';




const SignUpScreen = () => {

  const gotologin = () => { navigation.navigate('LoginScreen') }
  const gotoSignUpOtpScreen = () => { navigation.navigate('SignUpOtpScreen') }
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const [state, setState] = useState({ user_name: "", user_email: "", user_mobile: "", position: "", password: "", confirmpassword: "", message: "", fileName: "", base64File: "" })

  const handleUsername = (text) => { setState({ ...state, user_name: text }) }
  const handleEmail = (text) => { setState({ ...state, user_email: text }) }
  const handleMobile = (text) => { setState({ ...state, user_mobile: text }) }
  const handlePosition = (text) => { setState({ ...state, position: text }) }
  const handlePassword = (text) => { setState({ ...state, password: text }) }
  const handleConfirmPassword = (text) => { setState({ ...state, confirmpassword: text }) }
  const handleMessage = (text) => { setState({ ...state, message: text }) }
  const { loginData } = useSelector(state => state.login)
  console.log(loginData, " loginData")

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
      // console.log(response, " response")
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        setState({ ...state, base64File: response.assets[0].base64, fileName: response.assets[0].fileName })
      }
    })
  }

  // console.log(state.fileName, " response.assets[0].fileName")

  const SignUpSubmit = async () => {
    const user_name = state.user_name
    const user_email = state.user_email
    const user_mobile = state.user_mobile
    const position = state.position
    const fileName = state.fileName
    const password = state.password
    const confirmpassword = state.confirmpassword
    const message = state.message

    if (user_name) {
      if (user_email) {
        if (user_mobile) {
          if (position) {
            if (fileName) {
              if (password) {
                if (confirmpassword) {
                  if (message) {
                    try {
                      let response = await fetch(`${ServerUrl()}register`, {
                        method: "post",
                        headers: {
                          'Accept': 'Application/json',
                          'Content-type': 'Application/json'
                        },
                        body: JSON.stringify({
                          'name': state.user_name,
                          'email': state.user_email,
                          'mobile': state.user_mobile,
                          'position': state.position,
                          'fileName': state.fileName,
                          'password': state.password,
                          'confirmPassword': state.confirmpassword,
                          'base64File': state.base64File,
                          'message': state.message
                        })
                      })
                      const result = await response.json();
                      console.log(result, 'resul register');
                      const new_data = { name: result.user_name, email: result.user_email, mobile: result.user_mobile, image: result.image }
                      dispatch(loginFetchDataForProfile(new_data))
                      if (result.status) {
                        navigation.navigate(navigationStrings.SIGNUPOTP, { user_id: result.user_id, user_email: result.user_email })
                        ToastAndroid.show("Please Check Your Email", ToastAndroid.CENTER)
                      } else {
                        // ToastAndroid.show("Please Enter Valid Email", ToastAndroid.SHORT)
                        alert('Email Already Exist')
                      }
                    } catch (error) {
                      console.log(error, "sign up error");
                    }
                  } else {
                    alert('Message Required')
                  }
                } else {
                  alert('Confirm Password Required')
                }
              } else {
                alert("Password not Fount PLease Try Again")
              }
            }
            else {
              alert("Image Not Found");
            }
          } else {
            alert("Please Enter Your Position?");
          }
        } else {
          alert("Mobile not found Please Try Again")
        }
      } else {
        alert("Email not Found Please Try Again");
      }
    } else {
      alert("User Name not Found Please Try Again...");
    }
  }


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
    <View style={{ height: '100%' }}>
      <View style={styles.mainContainer}>
        <SafeAreaView style={{ paddingHorizontal: 15, paddingTop: 10 }} >
          <TouchableOpacity onPress={handleBackButtonClick} >
            <Image style={{ height: 25, width: 15 }} source={imagePath.icback} />
          </TouchableOpacity>
        </SafeAreaView>
        <Text style={styles.mainheading}>Registration</Text>
        {/* <Text style={styles.mainsubheading}>Welcome To Taxlin</Text> */}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={true}
        style={styles.listsrcsytle}>
        <View style={{ display: 'flex' }}>
          <View style={{ flexDirection: 'column', }}>
            <View style={styles.FormMainStyles}>
              <View style={styles.signUp_input}>
                <TextInput style={styles.input}
                  label="Username"
                  activeUnderlineColor="#0288D1"
                  activeOutlineColor="#0288D1"
                  mode='outlined'
                  outlineColor="#0288D1"
                  returnKeyLabel='next'
                  placeholderTextColor='#000'
                  autoCapitalize='none'
                  onChangeText={handleUsername}
                />
              </View>
            </View>
            <View style={styles.FormMainStyles}>
              <View style={styles.signUp_input}>
                <TextInput style={styles.input}
                  label="E-Mail"
                  activeUnderlineColor="#0288D1"
                  activeOutlineColor="#0288D1"
                  mode='outlined'
                  outlineColor="#0288D1"
                  returnKeyLabel='next'
                  placeholderTextColor='#000'
                  autoCapitalize='none'
                  onChangeText={handleEmail}
                />
              </View>
            </View>
            <View style={styles.FormMainStyles}>
              <View style={styles.signUp_input}>
                <TextInput style={styles.input}
                  label="Mobile"
                  activeUnderlineColor="#0288D1"
                  activeOutlineColor="#0288D1"
                  mode='outlined'
                  outlineColor="#0288D1"
                  returnKeyLabel='next'
                  keyboardType='numeric'
                  placeholderTextColor='#000'
                  onChangeText={handleMobile}
                />
              </View>
            </View>
            <View style={styles.FormMainStyles}>
              <View style={styles.signUp_input}>
                <TextInput style={styles.input}
                  label="Position"
                  activeUnderlineColor="#0288D1"
                  activeOutlineColor="#0288D1"
                  mode='outlined'
                  outlineColor="#0288D1"
                  returnKeyLabel='next'
                  autoCapitalize='none'
                  placeholderTextColor='#000'
                  onChangeText={handlePosition}
                />
              </View>
            </View>
            <View style={styles.FormMainStyles}>
              <View style={styles.signUp_input}>
                <TextInput style={styles.input}
                  label="Password"
                  activeUnderlineColor="#0288D1"
                  activeOutlineColor="#0288D1"
                  mode='outlined'
                  outlineColor="#0288D1"
                  returnKeyLabel='next'
                  autoCapitalize='none'
                  placeholderTextColor='#000'
                  onChangeText={handlePassword}
                />
              </View>
            </View>
            <View style={styles.FormMainStyles}>
              <View style={styles.signUp_input}>
                <TextInput style={styles.input}
                  label="Confirm Password"
                  activeUnderlineColor="#0288D1"
                  activeOutlineColor="#0288D1"
                  mode='outlined'
                  outlineColor="#0288D1"
                  returnKeyLabel='next'
                  autoCapitalize='none'
                  placeholderTextColor='#000'
                  onChangeText={handleConfirmPassword}
                />
              </View>
            </View>
            <View style={styles.FormMainStyles}>
              <View style={styles.signUp_input}>
                <TextInput style={styles.input}
                  label="Message"
                  activeUnderlineColor="#0288D1"
                  activeOutlineColor="#0288D1"
                  mode='outlined'
                  outlineColor="#0288D1"
                  returnKeyLabel='next'
                  placeholderTextColor='#000'
                  onChangeText={handleMessage}
                />
              </View>
            </View>
            <View style={styles.FormMainStyles}>
              <View style={styles.signUp_input}>
                <TextInput style={styles.input}
                  label="Code"
                  activeUnderlineColor="#0288D1"
                  activeOutlineColor="#0288D1"
                  mode='outlined'
                  outlineColor="#0288D1"
                  returnKeyLabel='next'
                  placeholderTextColor='#000'
                />
              </View>
            </View>
            <View style={styles.image_css}>
              <View style={{ flexDirection: 'column', width: '40%', }}><TouchableOpacity onPress={openGallery}>
                <Text style={styles.img_text} >Upload File</Text>
              </TouchableOpacity></View>
              <View style={{ flexDirection: 'column', width: '60%', }}><Text>{state.fileName}</Text></View>
            </View>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
          <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'center' }}>
            <TouchableOpacity onPress={gotologin} style={styles.submitbutton}>
              <Text style={styles.submitbuttontext}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={{ display: 'flex', flexDirection: 'column', }}>
            <TouchableOpacity onPress={SignUpSubmit} style={styles.submitbutton}>
              <Text style={styles.submitbuttontext}>Register</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={{ display: 'flex', flexDirection: 'column' }}>
          <TouchableOpacity onPress={gotologin} style={styles.submitbuttonsignIn}>
            <Text style={styles.submitbuttontext}>Sign In</Text>
          </TouchableOpacity>
        </View> */}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 100,
    backgroundColor: '#0288D1',
    borderBottomEndRadius: 210,
    paddingTop: 10
  },
  mainheading: {
    // paddingTop: 1,
    paddingLeft: 15,
    fontSize: 25,
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
  },
  // mainsubheading: {
  //   paddingLeft: 15,
  //   color: 'white',
  // },
  FormMainStyles: {
    flexDirection: 'row',
    display: 'flex',
    padding: 2,
    alignContent: 'center',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomTopRadius: 8,
    borderBottomBottomRadius: 8,
    height: 65,

  },
  label: {
    color: '#9CA4A1',
    fontSize: 18,
    paddingLeft: 25,
  },
  inputfields: {
    paddingTop: 40,
  },
  TextStyles: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    padding: 18,
    paddingLeft: 50,
    height: 50,
    width: '100%',
    fontWeight: 'bold',
    bottom: 8,
  },
  input: {
    height: 50,
    margin: 17,
    // height: '10%'
  },
  submitbutton: {
    backgroundColor: '#0288D1',
    paddingHorizontal: 45,
    margin: 5,
    // height: '8%',
    height: 50,
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15,
    borderTopStartRadius: 15,
    borderBottomStartRadius: 15,
    paddingTop: 10,
    alignSelf: 'center'
  },
  submitbuttonsignIn: {
    backgroundColor: '#0288D1',
    paddingHorizontal: 52,
    margin: 5,
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15,
    borderTopStartRadius: 15,
    borderBottomStartRadius: 15,
    paddingTop: 8,
  },
  submitbuttontext: {
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  },
  signUp_input: { flexDirection: 'column', width: '100%', bottom: 20 },
  image_css: {
    width: '90%',
    alignContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    borderWidth: 1,
    height: '7%',
    fontWeight: 'bold',
  },
  img_text: { color: 'green', fontSize: 20, textAlign: 'center', margin: 5 },
  image_btn: { width: '100%' },
})

export default SignUpScreen