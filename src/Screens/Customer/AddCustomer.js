import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, BackHandler, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import styles from '../MainStyle';
import navigationStrings from '../../constants/navigationStrings';
import { useNavigation } from '@react-navigation/native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import imagePath from '../../constants/imagePath';
// Geolocation.setRNConfiguration(config);

const AddCustomer = () => {
    const navigation = useNavigation();
    const tabSrc = () => {
        navigation.navigate('CustomDrawer')
    }
    const [pincode, setPincode] = useState('');

    // Regular expression for a 6-digit pincode
    const pincodeRegex = /^\d{6}$/;
    const isValidPincode = pincodeRegex.test(pincode);

    // Regular expression for alphabetical characters
    const [text, setText] = useState('');
    const alphaRegex = /^[A-Za-z]+$/;
    const isAlpha = alphaRegex.test(text);

    const [nickname, setNickname] = useState('');
    const nicknameRegex = /^[A-Za-z]+$/;
    const isNickname = nicknameRegex.test(nickname);

    const [mobile, setMobile] = useState('');
    const mobileRegex = /^\d{10}$/;
    const isValidMobile = mobileRegex.test(mobile);

    const options = {
        title: 'Select Image',
        type: 'library',
        options: {
            maxHeight: 200,
            maxWidth: 200,
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: false,
        },
    }
    const openGallery = async () => {
        const images = await launchImageLibrary(options);
        console.log(images)
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
    },[]);

    return (
        <View style={{ height: '100%' }}>
            <ScrollView showsVerticalScrollIndicator={true}
                showsHorizontalScrollIndicator={true}
                style={styles.listsrcsytle} >
                <View style={{ display: 'flex', }}>

                    <View style={styles.topHeadingCss}>
                        <SafeAreaView style={{ paddingHorizontal: 15, paddingTop: 10 }} >
                            <TouchableOpacity onPress={handleBackButtonClick} >
                                <Image style={{ height: 25, width: 15 }} source={imagePath.icback} />
                            </TouchableOpacity>
                        </SafeAreaView>
                        <Text style={stylesCustomer.mainheading}>Add Customer</Text>
                    </View>
                    <View style={{ flexDirection: 'column', }}>
                        <View style={stylesCustomer.FormMainStyles}>
                            <View style={stylesCustomer.inputBoxCss}>
                                <TextInput style={stylesCustomer.input}
                                    label="Username"
                                    activeUnderlineColor="#0288D1"
                                    activeOutlineColor="#0288D1"
                                    mode='outlined'
                                    outlineColor="#0288D1"
                                    returnKeyLabel='next'
                                    placeholderTextColor='#000'
                                    autoCapitalize='none'
                                //   onChangeText={handleUsername}
                                />
                            </View>
                        </View>
                        <View style={stylesCustomer.FormMainStyles}>
                            <View style={stylesCustomer.inputBoxCss}>
                                <TextInput style={stylesCustomer.input}
                                    label="Nick Name(Optonal)"
                                    activeUnderlineColor="#0288D1"
                                    activeOutlineColor="#0288D1"
                                    mode='outlined'
                                    outlineColor="#0288D1"
                                    underlineColorAndroid="transparent"
                                    // placeholder='Enter Nick Name(Optonal)'
                                    placeholderTextColor='gray'
                                    autoCapitalize='none'
                                    returnKeyLabel='next'
                                    value={nickname}
                                    onChangeText={nickname => setNickname(nickname)}
                                />
                                {!isNickname && <Text style={{ color: 'red', marginBottom: 10, paddingLeft: 30 }}>Only alphabetical</Text>}
                            </View>
                        </View>

                        <View style={stylesCustomer.FormMainStyles}>
                            <View style={stylesCustomer.inputBoxCss}>
                                <TextInput style={stylesCustomer.input}
                                    activeUnderlineColor="#0288D1"
                                    activeOutlineColor="#0288D1"
                                    mode='outlined'
                                    outlineColor="#0288D1"
                                    underlineColorAndroid="transparent"
                                    label='Address'
                                    placeholderTextColor='gray'
                                    autoCapitalize='none'
                                    returnKeyLabel='next'
                                // value={nickname}
                                // onChangeText={nickname => setNickname(nickname)}
                                />
                            </View>
                        </View>

                        <View style={stylesCustomer.FormMainStyles}>
                            <View style={stylesCustomer.inputBoxCss}>
                                <TextInput style={stylesCustomer.input}
                                    activeUnderlineColor="#0288D1"
                                    activeOutlineColor="#0288D1"
                                    mode='outlined'
                                    outlineColor="#0288D1"
                                    underlineColorAndroid="transparent"
                                    label='E-Mail'
                                    placeholderTextColor='gray'
                                    autoCapitalize='none'
                                    returnKeyLabel='next'
                                // value={nickname}
                                // onChangeText={nickname => setNickname(nickname)}
                                />
                            </View>
                        </View>

                        <View style={stylesCustomer.FormMainStyles}>
                            <View style={stylesCustomer.inputBoxCss}>
                                <TextInput style={stylesCustomer.input}
                                    activeUnderlineColor="#0288D1"
                                    activeOutlineColor="#0288D1"
                                    mode='outlined'
                                    outlineColor="#0288D1"
                                    keyboardType='numeric'
                                    underlineColorAndroid="transparent"
                                    label='Mobile'
                                    placeholderTextColor='gray'
                                    autoCapitalize='none'
                                    returnKeyLabel='next'
                                    value={mobile}
                                    onChangeText={mobile => setMobile(mobile)}
                                />
                                {/* {!isValidMobile && <Text style={{ color: 'red', paddingTop: 55, paddingRight: 20 }}>Invalid Mobile</Text>} */}

                            </View>
                        </View>

                        <View style={stylesCustomer.FormMainStyles}>
                            <View style={stylesCustomer.inputBoxCss}>
                                <TextInput style={stylesCustomer.input}
                                    activeUnderlineColor="#0288D1"
                                    activeOutlineColor="#0288D1"
                                    mode='outlined'
                                    outlineColor="#0288D1"
                                    keyboardType='numeric'
                                    underlineColorAndroid="transparent"
                                    label='GST No'
                                    placeholderTextColor='gray'
                                    autoCapitalize='none'
                                    returnKeyLabel='next'
                                />
                            </View>
                        </View>

                        <View style={stylesCustomer.FormMainStyles}>
                            <View style={stylesCustomer.inputBoxCss}>
                                <TextInput style={stylesCustomer.input}
                                    activeUnderlineColor="#0288D1"
                                    activeOutlineColor="#0288D1"
                                    mode='outlined'
                                    outlineColor="#0288D1"
                                    underlineColorAndroid="transparent"
                                    label='State'
                                    placeholderTextColor='gray'
                                    autoCapitalize='none'
                                    returnKeyLabel='next'
                                />
                            </View>
                        </View>

                        <View style={stylesCustomer.FormMainStyles}>
                            <View style={stylesCustomer.inputBoxCss}>
                                <TextInput style={stylesCustomer.input}
                                    activeUnderlineColor="#0288D1"
                                    activeOutlineColor="#0288D1"
                                    mode='outlined'
                                    outlineColor="#0288D1"
                                    underlineColorAndroid="transparent"
                                    label='Country'
                                    placeholderTextColor='gray'
                                    autoCapitalize='none'
                                    returnKeyLabel='next'
                                />
                            </View>
                        </View>

                        <View style={stylesCustomer.FormMainStyles}>
                            <View style={stylesCustomer.inputBoxCss}>
                                <TextInput style={stylesCustomer.input}
                                    activeUnderlineColor="#0288D1"
                                    activeOutlineColor="#0288D1"
                                    mode='outlined'
                                    outlineColor="#0288D1"
                                    keyboardType='numeric'
                                    underlineColorAndroid="transparent"
                                    label='PinCode'
                                    placeholderTextColor='gray'
                                    autoCapitalize='none'
                                    returnKeyLabel='next'
                                />
                            </View>
                        </View>
                        {/* <Button title='upload' onPress={openGallery}
                        //  onChangeText={handleImage}
                          /> */}
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', width: '90%', alignContent: 'center', paddingTop: 12 }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '50%' }}>
                        <TouchableOpacity style={styles.submitbuttonforlogin} onPress={() => { handleBackButtonClick() }}>
                            <Text style={styles.submitbuttontext} >Back</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '50%' }}>
                        <TouchableOpacity style={styles.submitbuttonforlogin} >
                            <Text style={styles.submitbuttontext}>Add</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

const stylesCustomer = StyleSheet.create({
    inputBoxCss: {
        flexDirection: 'column',
        width: '100%',
        bottom: 12
    },
    mainheading: {
        paddingLeft: 15,
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
    },
    FormMainStyles: {
        flexDirection: 'row',
        display: 'flex',
        alignContent: 'center',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomTopRadius: 8,
        borderBottomBottomRadius: 8,
        height: 60,
    },
    TextStyles: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        padding: 15,
        paddingLeft: 50,
        height: 50,
        width: '100%',
        fontWeight: 'bold'
    },
    InputBoxStyles: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 15,
        paddingRight: 100,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        margin: 17,
    },
    error: {
        color: 'red',
    },
});

export default AddCustomer
