import React, { useState, FC, ReactElement } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, BackHandler } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import { ServerUrl } from '../../Helper/Helper';
import imagePath from '../../constants/imagePath';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../MainStyle';
import navigationStrings from '../../constants/navigationStrings';


const OTPScreen = (props) => {
    const navigation = useNavigation();
    // const user_id = props.route.params.user_id
    const newUI = () => { navigation.navigate(navigationStrings.NEWPASSWORD) }
    const [state, setState] = useState({ otp: "" })
    const handleOTP = (text) => { setState({ ...state, otp: text }) }

    const submitOpt = async () => {
        const OTP = state.otp
        if (user_id) {
            if (OTP) {
                const data = {
                    user_id: user_id,
                    otp: OTP
                }
                var raw = JSON.stringify({
                    "user_id": user_id,
                    "otp": OTP
                });
                try {
                    let response = await fetch(`${ServerUrl()}verify_forget_otp`, {
                        method: 'post',
                        headers: {
                            'Accept': 'Application/json',
                            'Content-Type': 'Application/json'
                        },
                        body: raw
                    })
                    const result = await response.json();
                    console.log(result, " result otp ")
                    if (result.status) {
                        navigation.navigate('NewPasswordScreen', { user_id: result.user_id })
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
        <View>
            <View style={styles.headerComponent}>
                <View style={styles.headerTxt}>
                    <TouchableOpacity onPress={handleBackButtonClick} >
                        <Image style={{ height: 30, width: 25 }} source={imagePath.icback} />
                    </TouchableOpacity>
                </View>
                <View style={styles.header_tet_body}>
                    <Text style={styles.headerText}>Submit OTP</Text>
                </View>
            </View>
            <View style={styles.summary_View}>
                <Text style={styles.summary}>Complete the process by submitting the OTP (One-Time Password), ensuring a secure and seamless journey to your destination.</Text>
            </View>
            <View style={{ display: 'flex' }}>
                <View style={styles.forgetUIBody}>
                    <View style={{ flexDirection: 'row', paddingTop: 100 }}>
                        <View style={styles.forgerInput}>
                            <View style={styles.FormMainStyles}>
                                <View style={styles.signUp_input}>
                                    <TextInput style={styles.Maininput}
                                        label="Enter OTP"
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
                        </View>
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
            </View>
        </View>
    )
}


export default OTPScreen