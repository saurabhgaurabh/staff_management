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
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';




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

    const otpUi = () => {
        navigation.navigate(navigationStrings.OTPSCREEN)
    }

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
                console.log(error, "Ui internal server Error.")
            }
        } else {
            alert("Email not Found Please Try Again");
        }
    }

    return (
        <View>
            <View style={styles.mainContainer}>
                <View style={styles.headerComponent}>
                    <View style={styles.headerTxt}>
                        <TouchableOpacity onPress={handleBackButtonClick} >
                            <Image style={{ height: 30, width: 25 }} source={imagePath.icback} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.header_tet_body}>
                        <Text style={styles.headerText}>Forget Password</Text>
                    </View>
                </View>
            </View>
            <View style={styles.summary_View}>
                <Text style={styles.summary}>Recover your access by initiating the password reset process. Let us guide you through the steps to regain control of your account and continue your seamless experience.</Text>
            </View>
            <View style={{ display: 'flex' }}>
                <View style={styles.forgetUIBody}>
                    <View style={{ flexDirection: 'row', paddingTop: 100 }}>
                        <View style={styles.forgerInput}>
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
                                        onChangeText={handleEmail}
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
                                        <TouchableOpacity style={styles.cont_with_new_acc} onPress={forgetpass}>
                                            <Text style={styles.networking_txt}>Forget Password</Text>
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

export default ForgetPassword