import React, { useState, FC, ReactElement } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, BackHandler, ToastAndroid, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation';
import navigationStrings from '../../constants/navigationStrings';
import Routes from '../../Navigation/Routes';
import { ServerUrl } from '../../Helper/Helper';
import { loginFetchDataForProfile_token } from '../../redux/MyLoginSlice';
import { useDispatch, useSelector } from 'react-redux';
import imagePath from '../../constants/imagePath';
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient';
import styles from '../MainStyle';
import { TextInput } from 'react-native-paper';

const SignUpOtpScreen = (props) => {
    // const user_id = props.route.params.user_id
    // const user_email = props.route.params.user_email

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [state, setState] = useState({ otp: "" })
    const handleOTP = (text) => { setState({ ...state, otp: text }) }



    const submitOpt = async () => {
        const OTP = state.otp
        if (user_id) {
            if (OTP) {
                var raw = JSON.stringify({
                    "user_id": user_id,
                    "otp": OTP,
                });
                try {
                    let response = await fetch(`${ServerUrl()}register_otp`, {
                        method: 'post',
                        headers: {
                            'Accept': 'Application/json',
                            'Content-Type': 'Application/json'
                        },
                        body: raw
                    })
                    const result = await response.json();
                    console.log(result, " result for sign up otp")
                    if (result.status) {
                        navigation.navigate(navigationStrings.Routes, { user_id: result.user_id })
                        dispatch(loginFetchDataForProfile_token(result.token))
                        ToastAndroid.show('Your Registration Successfully Done', ToastAndroid.SHORT);
                    }
                    else {
                        alert("Invalid OTP");
                    }
                } catch (error) {
                    console.log(error)
                }
            } else {
                alert("Enter Invalid OTP");
            }
        } else {
            alert("Invalid UserID ");
        }
    }


    function handleBackButtonClick() {

        navigation.goBack(null);
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
            <View style={styles.headerComponent}>
                <View style={styles.headerTxt}>
                    <TouchableOpacity onPress={handleBackButtonClick} >
                        <Image style={{ height: 30, width: 25 }} source={imagePath.icback} />
                    </TouchableOpacity>
                </View>
                <View style={styles.header_tet_body}>
                    <Text style={styles.headerText}>Registraion OTP</Text>
                </View>
            </View>
            <View style={styles.summary_View}>
                <Text style={styles.summary}>A new OTP has been sent to your registered email.
                    Please check your inbox and enter the new OTP to continue.</Text>
            </View>

            <View style={{ flexDirection: 'row', paddingTop: 100 }}>
                <Animatable.View animation={'bounceInLeft'} style={styles.forgerInput}>
                    <View style={styles.FormMainStyles}>
                        <View style={styles.signUp_input}>
                            <TextInput style={styles.input}
                                label="Please Enter Your OTP"
                                activeUnderlineColor="#0288D1"
                                activeOutlineColor="#0288D1"
                                mode='outlined'
                                outlineColor="#0288D1"
                                returnKeyLabel='next'
                                placeholderTextColor='#000'
                                onChangeText={handleOTP}
                            />
                        </View>
                    </View>
                </Animatable.View>
            </View>

            <View style={{ flexDirection: 'row', }}>
                <View style={styles.overlay}>
                    <Animatable.View animation={'bounceInRight'} delay={3} style={styles.inputContainer}>
                        <LinearGradient colors={['#63f880', '#2a913e']} style={styles.linearCss}>
                            <View style={styles.networking_container}>
                                <TouchableOpacity style={styles.cont_with_new_acc} onPress={submitOpt}>
                                    <Text style={styles.networking_txt}>Submit OTP</Text>
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                    </Animatable.View>
                </View>
            </View>
        </View>
    )
}

// const styles = StyleSheet.create({
//     mainContainer: {
//         // paddingTop: 10,
//         // height: 200,
//         // backgroundColor: '#0288D1',
//         // borderBottomEndRadius: 200,
//     },
//     mainheading: {
//         paddingTop: 99,
//         paddingLeft: 25,
//         fontSize: 29,
//         color: 'white',
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
//     input: {
//         borderWidth: 1,
//         borderColor: '#0288D1',
//         height: 50,
//         margin: 17,
//     },
//     submitbutton: {
//         backgroundColor: '#0288D1',
//         padding: 10,
//         margin: 15,
//         height: 45,
//         borderTopEndRadius: 15,
//         borderBottomEndRadius: 15,
//         borderTopStartRadius: 15,
//         borderBottomStartRadius: 15,
//     },
//     submitbuttontext: {
//         color: 'white',
//         fontSize: 20,
//         alignItems: 'center',
//         alignContent: 'center',
//         alignSelf: 'center'
//     },
//     signupbutton: {
//         backgroundColor: '#cccc33',
//         padding: 10,
//         margin: 15,
//         height: 45,
//         borderTopEndRadius: 15,
//         borderBottomEndRadius: 15,
//         borderTopStartRadius: 15,
//         borderBottomStartRadius: 15,
//     },
//     forgetbutton: {
//         backgroundColor: '#ff8080',
//         padding: 10,
//         margin: 15,
//         height: 45,
//     },
//     signuptext: {
//         color: 'white',
//         fontSize: 20,
//         paddingLeft: 110
//     }
// })

export default SignUpOtpScreen