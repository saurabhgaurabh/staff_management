import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, BackHandler, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../../constants/navigationStrings';
import { TextInput } from 'react-native-paper';
import { ServerUrl } from '../../Helper/Helper';
import { loginFetchDataForProfile, profileUpdate } from '../../redux/MyLoginSlice';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import imagePath from '../../constants/imagePath';
import styles from '../MainStyle';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';



const NewPasswordScreen = (props) => {
    const dispatch = useDispatch();
    // const user_id = props.route.params.user_id
    // console.log(user_id, "new password")
    const navigation = useNavigation();
    const [state, setState] = useState({ password: "" })
    const handlePassword = (text) => { setState({ ...state, password: text }) }

    const forgetpass = async () => {
        const password = state.password
        if (password) {
            try {
                let response = await fetch(`${ServerUrl()}set_forget_password`, {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'password': state.password,
                        user_id: user_id
                    })
                })
                const result = await response.json();
                console.log(result, 'result new password')
                if (result.status) {

                    dispatch(loginFetchDataForProfile(result))
                }
                navigation.navigate(navigationStrings.TABROUTES);
                // navigation.navigate(navigationStrings.Routes);
            } catch (error) {
                console.log(error)
            }
        } else {
            alert("Email not Found Please Try Again");
        }
    }
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

    return (
        <View >
            <View style={styles.headerComponent}>
                <View style={styles.headerTxt}>
                    <TouchableOpacity onPress={handleBackButtonClick} >
                        <Image style={{ height: 30, width: 25 }} source={imagePath.icback} />
                    </TouchableOpacity>
                </View>
                <View style={styles.header_tet_body}>
                    <Text style={styles.headerText}>New Password</Text>
                </View>
            </View>
            <View style={styles.summary_View}>
                <Text style={styles.summary}>Unlock the power of your credentials as they seamlessly guide you to the Dashboard, your ultimate destination for success</Text>
            </View>

            <View style={{ display: 'flex' }}>
                <View style={styles.forgetUIBody}>
                    <View style={{ flexDirection: 'row', paddingTop: 100 }}>
                        <View style={styles.forgerInput}>
                            <View style={styles.FormMainStyles}>
                                <View style={styles.signUp_input}>
                                    <TextInput style={styles.input}
                                        label="Choose New Password"
                                        activeUnderlineColor="#0288D1"
                                        activeOutlineColor="#0288D1"
                                        mode='outlined'
                                        outlineColor="#0288D1"
                                        returnKeyLabel='next'
                                        placeholderTextColor='#000'
                                        onChangeText={handlePassword}
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
                                            <Text style={styles.networking_txt}>Get New Password</Text>
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

// const styles = StyleSheet.create({
//     mainContainer: {
//         paddingTop: 10,
//         height: 200,
//         backgroundColor: '#0288D1',
//         borderBottomEndRadius: 200,
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
//         height: 50,
//         margin: 17,
//     },
//     submitbutton: {
//         backgroundColor: '#0288D1',
//         paddingTop: 10,
//         margin: 20,
//         height: '20%',
//         borderTopEndRadius: 15,
//         borderBottomEndRadius: 15,
//         borderTopStartRadius: 15,
//         borderBottomStartRadius: 15,
//         alignContent: 'center',
//         alignItems: 'center',
//         textAlign: 'center',
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

export default NewPasswordScreen