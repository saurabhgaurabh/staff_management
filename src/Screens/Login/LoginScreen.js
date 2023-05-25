import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ToastAndroid, Image, Pressable, Linking, BackHandler, Alert, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import imagePath from '../../constants/imagePath';
import AsyncStorage from '@react-native-async-storage/async-storage';
import navigationStrings from '../../constants/navigationStrings';
import { TextInput } from 'react-native-paper';
import { loginFetchDataForProfile, profileUpdate } from '../../redux/MyLoginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ServerUrl } from '../../Helper/Helper';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../MainStyle';




const LoginScreen = () => {
    const navigation = useNavigation();

    const signupsubmit = () => {
        navigation.navigate(navigationStrings.SIGNUP)
    }
    const passwordforgetsubmit = () => {
        navigation.navigate(navigationStrings.FORGETPASSWORD)
    }
    const gotoDashboard = () => {
        navigation.navigate(navigationStrings.TABROUTES)
    }


    // here if press back from login then it works...
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to Exit Login ?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

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
        <View style={styles.mainbackground}>
            <View 
            // style={styles.topHeadingCss}
            >
                <SafeAreaView style={{ paddingHorizontal: 15, paddingTop: 10 }} >
                    <TouchableOpacity onPress={handleBackButtonClick} >
                        <Image style={{ height: 25, width: 15 }} source={imagePath.icback} />
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
            {/* <View style={styles.mainContainer}>
                <View style={styles.forgerPasswordCss}><Text style={{ color: 'white' }} onPress={passwordforgetsubmit}>Forget Passsword ?</Text></View>

            </View> */}
            {/* <View style={styles.inputfields}>
                <View style={styles.loginEvents} >
                    <TouchableOpacity onPress={gotoDashboard} style={styles.submitbuttonforlogin}>
                        <Text style={styles.submitbuttontext}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={signupsubmit} style={styles.submitbuttonforlogin}>
                        <Text style={styles.submitbuttontext} >Sign Up</Text>
                    </TouchableOpacity>

                </View>
            </View> */}
        </View>
    )
}

// const styles = StyleSheet.create({
//     socialIconStyle: {
//         height: 45,
//         width: 55,
//         borderRadius: 50,
//         margin: 10
//     },
//     mainContainer: {
//         paddingTop: 10,
//         backgroundColor: '#0288D1',
//         borderBottomEndRadius: 200,
//     },
//     mainheading: {
//         paddingTop: 99,
//         paddingLeft: 25,
//         fontSize: 29,
//         color: 'white'
//     },
//     mainsubheading: {
//         paddingLeft: 25,
//         color: 'white'
//     },
//     label: {
//         color: '#9CA4A1',
//         fontSize: 18,
//         paddingLeft: 25,
//     },
//     inputfields: {
//         paddingTop: 60,
//     },
//     forgerPasswordCss: {
//         display: 'flex',
//         justifyContent: 'flex-end',
//         paddingLeft: 230
//     },
//     input: {
//         margin: 12,
//         backgroundColor: 'white',
//         borderRadius: 10,
//     },
//     submitbutton: {
//         backgroundColor: '#3EB489',
//         padding: 5,
//         margin: 15,
//         height: 45,
//         borderTopEndRadius: 15,
//         borderBottomEndRadius: 15,
//         borderTopStartRadius: 15,
//         borderBottomStartRadius: 15,
//         alignItems: 'center'
//     },
//     submitbuttonforlogin: {
//         backgroundColor: '#0288D1',
//         padding: 5,
//         margin: 5,
//         height: '105%',
//         borderTopEndRadius: 10,
//         borderBottomEndRadius: 10,
//         borderTopStartRadius: 10,
//         borderBottomStartRadius: 10,
//         alignItems: 'center',
//     },
//     submitbuttontext: {
//         color: 'white',
//         fontSize: 20,
//         alignItems: 'center',
//         alignContent: 'center',
//         alignSelf: 'center',
//         paddingTop: 5
//     },
//     submitbuttontextforforget: {
//         color: 'white',
//         fontSize: 20,
//         alignItems: 'center',
//         alignContent: 'center',
//         paddingRight: 10,
//         marginLeftl: 12,
//         paddingHorizontal: 5,
//         paddingBottom: 6
//     },
//     submitbuttontextforsubmit: {
//         color: 'white',
//         fontSize: 20,
//         alignItems: 'center',
//         alignContent: 'center',
//         paddingRight: 10,
//         marginLeftl: 12,
//         paddingTop: 10,
//         marginHorizontal: 9,
//         paddingBottom: 5

//     },
//     signupbutton: {
//         backgroundColor: '#246EE9',
//         width: 130,
//         alignItems: 'center',
//         borderTopEndRadius: 15,
//         borderBottomEndRadius: 15,
//         borderTopStartRadius: 15,
//         borderBottomStartRadius: 15,
//         paddingRight: 12,
//         paddingLeft: 9,
//         marginHorizontal: 8,

//     },
//     forgetbutton: {
//         backgroundColor: '#FF2400',
//         padding: 6,
//         width: 130,
//         alignItems: 'center',
//         alignContent: 'center',
//         borderTopEndRadius: 15,
//         borderBottomEndRadius: 15,
//         borderTopStartRadius: 15,
//         borderBottomStartRadius: 15,
//         paddingRight: 12,
//         paddingLeft: 10,
//         marginHorizontal: 9
//     },
//     signuptext: {
//         color: 'white',
//         fontSize: 20,
//     },
//     signinforgetproperty: {
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'flex-end',
//         paddingTop: 240,
//         justifyContent: 'space-around',
//     },

//     loginEvents: {
//         display: 'flex',
//         justifyContent: 'center',
//         width: '90%',
//         alignSelf: 'center',
//         height: '50%',
//         paddingTop: 50
//     }
// })

// export default LoginScreen
// import React, { useState } from 'react';
// import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity, Image, Animated } from 'react-native';
// import imagePath from '../../constants/imagePath';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import styles from '../MainStyle';

// const LoginScreen = () => {

//   return (
//     // <View>
//      <ImageBackground source={imagePath.iclogin_back} style={styles.background}>
//       <SafeAreaView style={styles.upper_txt}>
//         <Text style={styles.sub_upper_txt}>Welcome To eStudy !</Text>
//         <Text style={styles.subtitle}>Type here something related to screen</Text>
//       </SafeAreaView>
//       <View style={styles.overlay}>
//         <View style={styles.inputContainer}>
//           <View style={styles.networking_container}>
//             <View style={styles.cont_with_goolge_logo}>
//               <Image source={imagePath.icgoogle} style={styles.goole_properties}/>
//               </View>
//               <View style={styles.cont_with_goolge}>
//               <Text style={styles.networking_txt}>Continue With Google</Text>
//               </View>
//           </View>
//         </View>
//         <View style={styles.inputContainer}>
//           <View style={styles.networking_container}>
//             <View style={styles.cont_with_goolge_logo}>
//               <Image source={imagePath.icfacebook} style={styles.goole_properties}/>
//               </View>
//               <View style={styles.cont_with_goolge}>
//               <Text style={styles.networking_txt}>Continue With Facebook</Text>
//               </View>
//           </View>
//         </View>
//       </View>
//       <View style={styles.main_screen_footer}>
//         <View style={styles.main_screen_footer_division}>
//           <Text style={styles.summary_property}>already have an account ? </Text>
//         </View>
//         <View style={styles.main_screen_footer_division}>
//           <Text style={styles.sign_in_property}>{'Sign In' + '>'}</Text>
//         </View>
//       </View>
//      </ImageBackground>
//     // </View>
//   );
// };

export default LoginScreen;
