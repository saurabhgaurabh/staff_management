import React, { useState, FC, ReactElement } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, BackHandler, ToastAndroid } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation';
import navigationStrings from '../../constants/navigationStrings';
import Routes from '../../Navigation/Routes';
import { ServerUrl } from '../../Helper/Helper';
import { loginFetchDataForProfile_token } from '../../redux/MyLoginSlice';
import { useDispatch, useSelector } from 'react-redux';

const SignUpOtpScreen = (props) => {
    const user_id = props.route.params.user_id
    const user_email = props.route.params.user_email

    // const { isregister } = useSelector(state => state.login)
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [state, setState] = useState({ otp: "" })
    const handleOTP = (text) => { setState({ ...state, otp: text }) }

    // if (isregister) {
    //     dispatch(Registercheck(false))
    // }


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

        <View style={styles.mainContainer}>
            <Text style={styles.mainheading}>Verification OTP</Text>
            <Text style={styles.mainsubheading}>Please Enter Your Verified OTP </Text>


            <View style={styles.inputfields}>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder='Please Enter Your OTP'
                    placeholderTextColor='#000'
                    autoCapitalize='none'
                    returnKeyLabel='next'
                    keyboardType='numeric'
                    onChangeText={handleOTP}
                />

                <TouchableOpacity style={styles.submitbutton}>
                    <Text style={styles.submitbuttontext} onPress={submitOpt}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 10,
        height: 200,
        backgroundColor: '#0288D1',
        borderBottomEndRadius: 200,
    },
    mainheading: {
        paddingTop: 99,
        paddingLeft: 25,
        fontSize: 29,
        color: 'white',
    },
    mainsubheading: {
        paddingLeft: 25,
        color: 'white'
    },
    label: {
        color: '#9CA4A1',
        fontSize: 18,
        paddingLeft: 25,
    },
    inputfields: {
        paddingTop: 60,
    },
    input: {
        borderWidth: 1,
        borderColor: '#0288D1',
        height: 50,
        margin: 17,
    },
    submitbutton: {
        backgroundColor: '#0288D1',
        padding: 10,
        margin: 15,
        height: 45,
        borderTopEndRadius: 15,
        borderBottomEndRadius: 15,
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
    },
    submitbuttontext: {
        color: 'white',
        fontSize: 20,
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center'
    },
    signupbutton: {
        backgroundColor: '#cccc33',
        padding: 10,
        margin: 15,
        height: 45,
        borderTopEndRadius: 15,
        borderBottomEndRadius: 15,
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
    },
    forgetbutton: {
        backgroundColor: '#ff8080',
        padding: 10,
        margin: 15,
        height: 45,
    },
    signuptext: {
        color: 'white',
        fontSize: 20,
        paddingLeft: 110
    }
})

export default SignUpOtpScreen