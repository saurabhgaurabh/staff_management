import { View, Text, BackHandler, ImageBackground, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import styles from '../MainStyle';
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-paper';



const TeacherRoute = () => {

    const navigation = useNavigation();

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
        // <ImageBackground source={require('../../assets/images/graduation.webp')} style={styles.backgroundImage}>
        <ScrollView showsVerticalScrollIndicator={true} style={styles.listsrcsytle}>
            <LinearGradient colors={['#fff', '#eef2f3']}
                style={styles.Linearcontainer}>
                <View style={{ display: 'flex' }}>
                    <View style={styles.teacherListAddMenu}>
                        <View style={styles.contanerBody}>
                            <LinearGradient colors={['#f9cc0a', '#f9b511']} style={styles.linearCss} >
                                <View style={styles.ContainerCss}>
                                    <TouchableOpacity onPress={{}}>
                                        <Text style={styles.btn_txt}>List View</Text>
                                    </TouchableOpacity>
                                </View>
                            </LinearGradient>
                        </View>
                    </View>
                    <Animatable.View animation={'zoomIn'} style={{ flexDirection: 'column', paddingTop: 30 }}>
                        <View style={styles.FormMainStyles}>
                            <View style={styles.signUp_input}>
                                <TextInput style={styles.Maininput}
                                    label="Teacher Name"
                                    placeholder='Your Name'
                                    activeUnderlineColor="#0288D1"
                                    activeOutlineColor="#2da600"
                                    mode='outlined'
                                    outlineColor="green"
                                    returnKeyLabel='next'
                                    placeholderTextColor='#000'
                                    autoCapitalize='none'
                                // onChangeText={handleTeacherName}
                                />
                            </View>
                        </View>
                        <View style={styles.FormMainStyles}>
                            <View style={styles.signUp_input}>
                                <TextInput style={styles.Maininput}
                                    label="E-Mail"
                                    placeholder='Example@gmail.com'
                                    activeUnderlineColor="#0288D1"
                                    activeOutlineColor="#2da600"
                                    mode='outlined'
                                    outlineColor="green"
                                    returnKeyLabel='next'
                                    placeholderTextColor='#000'
                                    autoCapitalize='none'
                                // onChangeText={handleEmail}
                                />
                            </View>
                        </View>
                        <View style={styles.FormMainStyles}>
                            <View style={styles.signUp_input}>
                                <TextInput style={styles.Maininput}
                                    label="Mobile"
                                    placeholder='0000000000'
                                    activeUnderlineColor="#0288D1"
                                    activeOutlineColor="#2da600"
                                    mode='outlined'
                                    outlineColor="green"
                                    returnKeyLabel='next'
                                    keyboardType='numeric'
                                    placeholderTextColor='#000'
                                // onChangeText={handleMobile}
                                />
                            </View>
                        </View>


                        <View style={styles.FormMainStyles}>
                            <View style={styles.signUp_input}>
                                <TextInput style={styles.Maininput}
                                    label="Previous Organization"
                                    placeholder='Previous Organization'
                                    activeUnderlineColor="#0288D1"
                                    activeOutlineColor="#2da600"
                                    mode='outlined'
                                    outlineColor="green"
                                    returnKeyLabel='next'
                                    placeholderTextColor='#000'
                                    autoCapitalize='none'
                                    keyboardType='numeric'
                                // onChangeText={handleAge}
                                />
                            </View>
                        </View>

                        <View style={styles.FormMainStyles}>
                            <View style={styles.signUp_input}>
                                <TextInput style={styles.Maininput}
                                    label="Experience"
                                    placeholder='Experience'
                                    activeUnderlineColor="#0288D1"
                                    activeOutlineColor="#2da600"
                                    mode='outlined'
                                    outlineColor="green"
                                    returnKeyLabel='next'
                                    placeholderTextColor='#000'
                                    autoCapitalize='none'
                                // onChangeText={handleResidence}
                                />
                            </View>
                        </View>
                        <View style={styles.FormMainStyles}>
                            <View style={styles.signUp_input}>
                                <TextInput style={styles.Maininput}
                                    label="Qualification"
                                    placeholder='Qualification'
                                    activeUnderlineColor="#0288D1"
                                    activeOutlineColor="#2da600"
                                    mode='outlined'
                                    outlineColor="green"
                                    returnKeyLabel='next'
                                    placeholderTextColor='#000'
                                    keyboardType='numeric'
                                    autoCapitalize='none'
                                // onChangeText={handleSalary}
                                />
                            </View>
                        </View>

                        <View style={styles.FormMainStyles}>
                            <View style={styles.signUp_input}>
                                <TextInput style={styles.Maininput}
                                    label="Permanent Residence"
                                    placeholder='Delhi/India'
                                    activeUnderlineColor="#0288D1"
                                    activeOutlineColor="#2da600"
                                    mode='outlined'
                                    // secureTextEntry={true}
                                    outlineColor="green"
                                    returnKeyLabel='next'
                                    autoCapitalize='none'
                                    placeholderTextColor='#000'
                                // onChangeText={handlePassword}
                                />
                            </View>
                        </View>
                        <View style={styles.FormMainStyles}>
                            <View style={styles.signUp_input}>
                                <TextInput style={styles.Maininput}
                                    label="Current Residence"
                                    placeholder='Delhi/India'
                                    activeUnderlineColor="#0288D1"
                                    activeOutlineColor="#2da600"
                                    mode='outlined'
                                    outlineColor="green"
                                    returnKeyLabel='next'
                                    autoCapitalize='none'
                                    placeholderTextColor='#000'
                                // onChangeText={handleConfirmPassword}
                                />
                            </View>
                        </View>
                        <View style={styles.FormMainStyles}>
                            <View style={styles.signUp_input}>
                                <TextInput style={styles.Maininput}
                                    label="Previous Position"
                                    placeholder='Sr/Jr/Manager. etc'
                                    activeUnderlineColor="#0288D1"
                                    activeOutlineColor="#2da600"
                                    mode='outlined'
                                    outlineColor="green"
                                    returnKeyLabel='next'
                                    autoCapitalize='none'
                                    placeholderTextColor='#000'
                                // onChangeText={handleEligibility}
                                />
                            </View>
                        </View>
                        <View style={styles.FormMainStyles}>
                            <View style={styles.signUp_input}>
                                <TextInput style={styles.Maininput}
                                    label="Current Position"
                                    placeholder='Sr/Jr/Manager. etc'
                                    activeUnderlineColor="#0288D1"
                                    activeOutlineColor="#2da600"
                                    mode='outlined'
                                    outlineColor="green"
                                    returnKeyLabel='next'
                                    autoCapitalize='none'
                                    placeholderTextColor='#000'
                                // onChangeText={handleNoOfDegree}
                                />
                            </View>
                        </View>
                        <View style={styles.signUpFileUpload}>
                            <View style={{ flexDirection: 'column', width: '40%', }}><TouchableOpacity onPress={{}}>
                                <Text style={styles.img_text} >Upload File</Text>
                            </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'column', width: '60%', alignItems: 'center' }}>
                                {/* <Text>{state.fileName}</Text> */}
                            </View>
                        </View>
                    </Animatable.View>
                </View>

                <View style={styles.overlay}>
                    <Animatable.View animation={'bounceInRight'} delay={9} style={styles.inputContainer}>
                        <LinearGradient colors={['#63f880', '#2a913e']} style={styles.linearCss}>
                            <View style={styles.networking_container}>
                                <TouchableOpacity style={styles.cont_with_new_acc} onPress={{}}>
                                    <Text style={styles.networking_txt}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                    </Animatable.View>
                </View>
            </LinearGradient>
        </ScrollView>
        // </ImageBackground>
    )
}

export default TeacherRoute