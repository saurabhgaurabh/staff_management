import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ToastAndroid, Image, Pressable, Linking, BackHandler, Alert, Button, ScrollView } from 'react-native'
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
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';


const LoginScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const passwordforgetsubmit = () => {
        navigation.navigate(navigationStrings.FORGETPASSWORD)
    }

    const [state, setState] = useState({ email: "", password: "" })
    const handleEmail = (text) => { setState({ ...state, email: text }) }
    const handlePassword = (text) => { setState({ ...state, password: text }) }
    const [showNotification, setShowNotification] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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
    useEffect(() => {
        if (showNotification) {
            setTimeout(() => {
                setShowNotification(false);
            }, 2000);
        }
    }, [showNotification]);

    React.useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
        };
    }, []);



    const Redirect_To_Dashboard = async () => {
        const { email, password } = state
        if (email) {
            if (password) {
                try {
                    let response = await fetch(`${ServerUrl()}login_user`, {
                        method: "post",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, password })
                    })
                    const result = await response.json();
                    // console.log(result,"resulr login")
                    if (result.status) {
                        dispatch(loginFetchDataForProfile(result))
                        await AsyncStorage.setItem('tokenresult', result.token);
                        setShowNotification(true);
                        navigation.navigate(navigationStrings.Routes)
                        ToastAndroid.show('User Logged in Successfully', ToastAndroid.SHORT);
                    } else {
                        alert(`${result.message}`);
                    }
                } catch (error) {
                    console.log(error);
                }
            } else {
                alert("Please Enter Password")
            }
        } else {
            alert("Please Enter Email")
        }
    }


    return (
        <ScrollView showsHorizontalScrollIndicator={true}>
            <LinearGradient colors={['#8e9eab', '#eef2f3']}
                style={styles.Linearcontainer}>
                <View style={styles.mainbackground}>
                    <View>
                        <SafeAreaView style={{ paddingHorizontal: 15, paddingTop: 8, alignItems: 'flex-start', }} >
                            <TouchableOpacity onPress={handleBackButtonClick} >
                                <Image style={{ height: 25, width: 25 }} source={imagePath.icbackNoraml} />
                            </TouchableOpacity>
                            {/* Notification Popup */}
                            {showNotification && (
                                <View style={styles.notificationContainer}>
                                    <Text style={styles.notificationText}>Login Successful!</Text>
                                </View>
                            )}
                        </SafeAreaView>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <Image source={imagePath.icuser} style={styles.logoCss} />
                        <Text style={styles.loginMiddleText}>Login</Text>
                    </View>
                    <Animatable.View animation={'zoomIn'} duration={1000} delay={100} style={styles.formbodycss}>
                        <View style={styles.form_field_container}>
                            <View style={{ alignSelf: 'center', width: '95%', paddingTop: 20 }}>
                                <TextInput style={styles.inputCss}
                                    label="Email"
                                    placeholder='example@gmail.com'
                                    activeUnderlineColor="#0288D1"
                                    activeOutlineColor="#A594F9"
                                    mode='outlined'
                                    outlineColor="#A594F9"
                                    returnKeyLabel='next'
                                    placeholderTextColor='#000'
                                    autoCapitalize='none'
                                    onChangeText={(text) => { handleEmail(text) }}
                                />
                                <TextInput style={styles.inputCss}
                                    label="Password"
                                    placeholder='**********'
                                    activeUnderlineColor="#0288D1"
                                    activeOutlineColor="#A594F9"
                                    mode='outlined'
                                    outlineColor="#A594F9"
                                    returnKeyLabel='next'
                                    placeholderTextColor='#000'
                                    autoCapitalize='none'
                                    secureTextEntry={!showPassword}
                                    onChangeText={(text) => { handlePassword(text) }}
                                />
                                <TouchableOpacity onPress={togglePasswordVisibility} style={{ position: 'absolute', right: 10 }}>
                                    <Image source={showPassword ? imagePath.icHide : imagePath.icShow} style={{ height: 25, width: 25 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.passwordContainer}>
                            <View style={styles.forgerPasswordCss}><Text style={{ color: '#33cc5a', fontWeight: 'normal', fontSize: 14, fontStyle: 'italic' }} onPress={passwordforgetsubmit}>Forget Passsword ?</Text></View>
                        </View>
                        <View style={styles.loginCss}>
                            <View style={{}}>
                                <TouchableOpacity onPress={Redirect_To_Dashboard} activeOpacity={0.7}>
                                    <LinearGradient
                                        colors={['#A594F9', '#6247AA',]}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        style={{
                                            paddingVertical: 10,
                                            paddingHorizontal: '45%',
                                            borderRadius: 5,
                                        }}
                                    >
                                        <Text style={styles.submitbuttontext}>Login</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Animatable.View>
                </View>
            </LinearGradient>
        </ScrollView>
    )
}

export default LoginScreen;
