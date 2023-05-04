import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ToastAndroid, Image, Pressable, Linking, BackHandler, Alert, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import imagePath from '../../constants/imagePath';
import AsyncStorage from '@react-native-async-storage/async-storage';
import navigationStrings from '../../constants/navigationStrings';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextBox from 'react-native-password-eye';
import { loginFetchDataForProfile, profileUpdate } from '../../redux/MyLoginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ServerUrl } from '../../Helper/Helper';
import { text } from '@fortawesome/fontawesome-svg-core';
import { Clipboard, useClipboard } from '@react-native-clipboard/clipboard';




const LoginScreen = () => {
    const navigation = useNavigation();
    const [state, setState] = useState({ email: "", password: "" })
    const handleEmail = (text) => {console.log(text,"text"), setState({ ...state, email: text }) }
    const handlePassword = (text) => { setState({ ...state, password: text }) }
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
    const { loginData } = useSelector(state => state.login)
    const dispatch = useDispatch();

    const handlePasswordVisibility = () => {
        if (rightIcon === 'eye') {
            setRightIcon('eye-off');
            setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-off') {
            setRightIcon('eye');
            setPasswordVisibility(!passwordVisibility);
        }
    };

    const [hidePassword, setHidePassword] = useState(true);
    const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };


    const login = async () => {
        const { email, password } = state
        console.log(email, password,"email, password")
        if (email) {
            if (password) {
                try {
                    let response = await fetch(`${ServerUrl()}sign_in`, {
                        method: "post",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, password })
                    })
                    const result = await response.json();
                    if (result.status) {
                        dispatch(loginFetchDataForProfile(result))
                        await AsyncStorage.setItem('tokenresult', result.token);
                        navigation.navigate(navigationStrings.TABROUTES)
                        // navigation.navigate(navigationStrings.Routes)
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
    const signupsubmit = () => {
        navigation.navigate(navigationStrings.SIGNUP)
    }
    const passwordforgetsubmit = () => {
        navigation.navigate(navigationStrings.FORGETPASSWORD)
    }
    const [string, setString] = useClipboard();

    const handleCopy = async () => {
        // await Clipboard.setString(state.email);
        alert('Text copied!');
        setString(state.email)
    };
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

    const copyIt = () => Clipboard.setString(state.email)
    const [copy, setCopy] = useState('')
    return (
        <View >
            <View style={styles.mainContainer}>
                <View style={styles.forgerPasswordCss}><Text style={{ color: 'white' }} onPress={passwordforgetsubmit}>Forget Passsword ?</Text></View>
                <View>
                    <Text style={styles.mainheading}>Login Us</Text>
                    <Text style={styles.mainsubheading}>Welcome To Taxlin </Text>
                </View>
            </View>
            <View style={styles.inputfields}>

                <TextInput style={styles.input}
                    label="Email"
                    activeUnderlineColor="#0288D1"
                    activeOutlineColor="#0288D1"
                    autoCorrect={false}
                    mode='outlined'
                    outlineColor="#0288D1"
                    returnKeyLabel='next'
                    autoCapitalize='none'
                    placeholderTextColor='#000'
                    onChangeText={(text) => { handleEmail(text) }}
                    onPress={handleCopy}
                />

                <TextInput style={styles.input}
                    label="Password"
                    activeUnderlineColor="#0288D1"
                    activeOutlineColor="#0288D1"
                    autoCorrect={false}
                    mode='outlined'
                    outlineColor="#0288D1"
                    returnKeyLabel='next'
                    autoCapitalize='none'
                    placeholderTextColor='#000'
                    enablesReturnKeyAutomatically
                    secureTextEntry={passwordVisibility}
                    // onChangeText={handlePassword}
                    onChangeText={text => handlePassword(text)}
                />
                {/* <TouchableOpacity
                    style={{
                        marginTop: -60,
                        marginLeft: 325,
                    }}
                    onPress={handlePasswordVisibility}>
                    <Icon name={passwordVisibility ? 'eye-slash' : 'eye'} size={30} color="#0C8A7B" />
                </TouchableOpacity> */}

                <View style={styles.loginEvents} >
                    <TouchableOpacity onPress={login} style={styles.submitbuttonforlogin}>
                        <Text style={styles.submitbuttontext}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={signupsubmit} style={styles.submitbuttonforlogin}>
                        <Text style={styles.submitbuttontext} >Sign Up</Text>
                    </TouchableOpacity>
                    <View style={styles.loginFooterCss}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/login/')}>
                            <Image style={styles.socialIconStyle} source={imagePath.icfacebook} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/signup')}>
                            <Image style={styles.socialIconStyle} source={imagePath.icinstagram} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/home')}>
                            <Image style={styles.socialIconStyle} source={imagePath.ictwiter} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    socialIconStyle: {
        height: 45,
        width: 55,
        borderRadius: 50,
        margin: 10
    },
    mainContainer: {
        paddingTop: 10,
        backgroundColor: '#0288D1',
        borderBottomEndRadius: 200,
    },
    mainheading: {
        paddingTop: 99,
        paddingLeft: 25,
        fontSize: 29,
        color: 'white'
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
    forgerPasswordCss: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingLeft: 230
    },
    input: {
        margin: 12,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    submitbutton: {
        backgroundColor: '#3EB489',
        padding: 5,
        margin: 15,
        height: 45,
        borderTopEndRadius: 15,
        borderBottomEndRadius: 15,
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
        alignItems: 'center'
    },
    submitbuttonforlogin: {
        backgroundColor: '#0288D1',
        padding: 5,
        margin: 5,
        height: '25%',
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
        alignSelf: 'center',
        paddingTop: 5
    },
    submitbuttontextforforget: {
        color: 'white',
        fontSize: 20,
        alignItems: 'center',
        alignContent: 'center',
        paddingRight: 10,
        marginLeftl: 12,
        paddingHorizontal: 5,
        paddingBottom: 6
    },
    submitbuttontextforsubmit: {
        color: 'white',
        fontSize: 20,
        alignItems: 'center',
        alignContent: 'center',
        paddingRight: 10,
        marginLeftl: 12,
        paddingTop: 10,
        marginHorizontal: 9,
        paddingBottom: 5

    },
    signupbutton: {
        backgroundColor: '#246EE9',
        width: 130,
        alignItems: 'center',
        borderTopEndRadius: 15,
        borderBottomEndRadius: 15,
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
        paddingRight: 12,
        paddingLeft: 9,
        marginHorizontal: 8,

    },
    forgetbutton: {
        backgroundColor: '#FF2400',
        padding: 6,
        width: 130,
        alignItems: 'center',
        alignContent: 'center',
        borderTopEndRadius: 15,
        borderBottomEndRadius: 15,
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
        paddingRight: 12,
        paddingLeft: 10,
        marginHorizontal: 9
    },
    signuptext: {
        color: 'white',
        fontSize: 20,
    },
    signinforgetproperty: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingTop: 240,
        justifyContent: 'space-around',
    },
    loginFooterCss: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 40
    },
    loginEvents: {
        display: 'flex',
        justifyContent: 'center',
        width: '90%',
        alignSelf: 'center',
        height: '50%',
        paddingTop: 50
    }
})

export default LoginScreen