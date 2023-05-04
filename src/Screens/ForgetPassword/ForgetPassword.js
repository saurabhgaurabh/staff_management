import React, { useState, FC, ReactElement } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import navigationStrings from '../../constants/navigationStrings';
import { TextInput } from 'react-native-paper';
import { ServerUrl } from '../../Helper/Helper';
import styles from '../MainStyle';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import imagePath from '../../constants/imagePath';




const ForgetPassword = () => {

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

    const navigation = useNavigation();
    const [state, setState] = useState({ email: "" })
    const handleEmail = (text) => { setState({ ...state, email: text }) }

    const forgetpass = async () => {
        const email = state.email
        if (email) {
            const data = {
                email: state.email
            }
            try {
                let response = await fetch(`${ServerUrl()}forget_password`, {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'email': state.email
                    })
                })
                const result = await response.json();
                console.log(result, "rsult forgert password scr")
                if (result.status) {
                    navigation.navigate(navigationStrings.OTPSCREEN, { user_id: result.user_id });
                } else {
                    alert("Invalid User");
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            alert("Email not Found Please Try Again");
        }
    }

    const signupsubmit = () => {
        navigation.navigate(navigationStrings.LOGIN)
    }
    const passwordforgetsubmit = () => {
        navigation.navigate(navigationStrings.FORGETPASSWORD)
    }

    return (

        <View>

            <View style={stylesForget.mainContainer}>
                <View>
                    <SafeAreaView style={{}} >
                        <TouchableOpacity onPress={handleBackButtonClick} style={{ paddingLeft: 20 }}>
                            <Image style={{ height: 25, width: 15 }} source={imagePath.icback} />
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>

                <Text style={stylesForget.mainheading}>Forget Password</Text>
                <Text style={stylesForget.mainsubheading}></Text>

            </View>


            <View style={stylesForget.inputfields}>
                <TextInput style={stylesForget.input}
                    label="E-Mail"
                    activeUnderlineColor="#0288D1"
                    activeOutlineColor="#0288D1"
                    mode='outlined'
                    outlineColor="#0288D1"
                    returnKeyLabel='next'
                    placeholderTextColor='#000'
                    onChangeText={handleEmail}
                />
                <View style={{ display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'row', width: '100%' }} >
                    <View style={{ flexDirection: 'column', width: '45%' }}>
                        <TouchableOpacity onPress={signupsubmit} style={styles.submitbuttonforlogin}>
                            <Text style={styles.submitbuttontext} >Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column', width: '45%' }}>
                        <TouchableOpacity onPress={forgetpass} style={styles.submitbuttonforlogin}>
                            <Text style={styles.submitbuttontext} >Forget</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const stylesForget = StyleSheet.create({
    mainContainer: {
        paddingTop: 10,
        // height: 200,
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
        borderColor: '#4D7CEB',
        // height: 60,
        // height: '10%',
        margin: 17,
    },
    submitbuttonforlogin: {
        backgroundColor: '#0288D1',
        padding: 5,
        margin: 5,
        height: 45,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        alignItems: 'center',
    },
    submitbuttontext: {
        color: 'white',
        fontSize: 20,
        alignItems: 'center',
        alignContent: 'center',
        paddingRight: 10,
        paddingLeft: 12,
        paddingHorizontal: 5
    },
    signupbutton: {
        backgroundColor: '#0288D1',
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

export default ForgetPassword