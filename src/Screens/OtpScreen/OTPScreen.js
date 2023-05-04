import React, { useState, FC, ReactElement } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, BackHandler } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import { ServerUrl } from '../../Helper/Helper';
import imagePath from '../../constants/imagePath';


const OTPScreen = (props) => {
    const navigation = useNavigation();
    const user_id = props.route.params.user_id

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

        <View >
            <View style={styles.mainContainer}>
                <SafeAreaView style={{}} >
                    <TouchableOpacity onPress={handleBackButtonClick} style={{ paddingLeft: 20 }}>
                        <Image style={{ height: 25, width: 15 }} source={imagePath.icback} />
                    </TouchableOpacity>
                </SafeAreaView>
                <Text style={styles.mainheading}>Your OTP</Text>
                <Text style={styles.mainsubheading}>Please Enter Your Verified OTP </Text>
            </View>


            <View style={styles.inputfields}>
                <TextInput style={styles.input}
                    label="Enter OTP"
                    activeUnderlineColor="#0288D1"
                    activeOutlineColor="#0288D1"
                    mode='outlined'
                    outlineColor="#0288D1"
                    returnKeyLabel='next'
                    placeholderTextColor='#000'
                    keyboardType='numeric'
                    onChangeText={handleOTP}
                />

                <TouchableOpacity onPress={submitOpt} style={styles.submitbutton}>
                    <Text style={styles.submitbuttontext} >Submit</Text>
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
        height: 50,
        margin: 17,
    },
    submitbutton: {
        backgroundColor: '#0288D1',
        padding: 10,
        margin: 15,
        // height: 45,
        borderTopEndRadius: 15,
        borderBottomEndRadius: 15,
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
        alignItems: 'center',
        textAlign: 'center',
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

export default OTPScreen