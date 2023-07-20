import { View, Text, BackHandler, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import styles from '../MainStyle';
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-paper';
import { ServerUrl } from '../../Helper/Helper';
import navigationStrings from '../../constants/navigationStrings';
import { launchImageLibrary } from 'react-native-image-picker';
import { trackTeacherData } from '../../redux/MyLoginSlice';
import { useDispatch } from 'react-redux';


const TeacherRoute = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const listTrackTeacher = () => { navigation.navigate(navigationStrings.TRACKLIST) }
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

    // here we are selecting the files using array...
    const fileUploadTypes = [
        { name: 'Adhar Card', key: 'adhar_card' },
        { name: 'Pan Card', key: 'pan_card' },
        { name: '10th Document', key: 'document_10th' },
        { name: 'Member Image', key: 'member_image' },
    ];

    // const initialState = {
    //     teacher_name: "",
    //     email: "",
    //     mobile: "",
    //     previous_organization: "",
    //     experience: "",
    //     qualification: "",
    //     permanent_residence: "",
    //     current_residence: "",
    //     previous_position: "",
    //     current_position: "", 
    //     fileName: "", 
    //     base64File: ""
    // };



    // const [state, setState] = useState(initialState);
    const [state, setState] = useState({ teacher_name: "", email: "", mobile: "", previous_organization: "", experience: "", qualification: "", permanent_residence: "", current_residence: "", previous_position: "", current_position: "", fileName: [], base64File: [] });
    const handleTeacher = (text) => { setState({ ...state, teacher_name: text }) }
    const handleEmail = (text) => { setState({ ...state, email: text }) }
    const handleMobile = (text) => { setState({ ...state, mobile: text }) }
    const handleOrganization = (text) => { setState({ ...state, previous_organization: text }) }
    const handleExperience = (text) => { setState({ ...state, experience: text }) }
    const handleQualification = (text) => { setState({ ...state, qualification: text }) }
    const handleAddress = (text) => { setState({ ...state, permanent_residence: text }) }
    const handleCurr_Add = (text) => { setState({ ...state, current_residence: text }) }
    const handlePosition = (text) => { setState({ ...state, previous_position: text }) }
    const handle_CurrentPosition = (text) => { setState({ ...state, current_position: text }) }

    const openGallery = () => {
        const options = {
            title: 'Select Image',
            type: 'library',
            options: {
                maxHeight: 200,
                maxWidth: 200,
                selectionLimit: 4,
                mediaType: 'photo',
                path: 'images'
            },
            includeBase64: true,
        };
        launchImageLibrary(options, response => {
            if (response.didCancel) {
            } else if (response.error) {
            } else if (response.customButton) {
            } else {
                const selectedImages = response.assets;
                const base64File = selectedImages.map(image => image.base64);
                const fileNames = selectedImages.map(image => image.fileName);
                console.log(response.assets[0].fileName, "response.assets for track teacher")
                setState({ ...state, base64File: response.assets[0].base64, fileName: response.assets[0].fileName })
            }
        })
    }

    const trackingTeacher = async () => {
        const { teacher_name, email, mobile, previous_organization, experience, qualification, permanent_residence, current_residence, previous_position, current_position, fileName, base64File } = state;
        if (!teacher_name) return alert("Teacher Name is Required.");
        if (!email) return alert("Email is Required.");
        if (!mobile) return alert("Mobile is Required.");
        if (!previous_organization) return alert("Previous Orgaization is Required.");
        if (!experience) return alert("Experience is Required.");
        if (!qualification) return alert("Qualification is Required.");
        if (!permanent_residence) return alert("Permanent Address is Required.");
        if (!current_residence) return alert("Current Address is Required.");
        if (!previous_position) return alert("Previous Position is Required.");
        if (!current_position) return alert("Current Position is Required.");
        if (!fileName) return alert("Image is required.");

        try {
            const response = await fetch(`${ServerUrl()}track_teacher_management`, {
                method: "POST",
                headers: {
                    'Accept': 'Application/json',
                    'Content-Type': 'Application/json',
                },
                body: JSON.stringify({
                    teacher_name,
                    email,
                    mobile,
                    previous_organization,
                    experience,
                    qualification,
                    permanent_residence,
                    current_residence,
                    previous_position,
                    current_position,
                    adhar_card: fileName[0],
                    pan_Card: fileName[1],
                    img_highschool: fileName[2],
                    teacher_img: [3],
                    base64File
                })
            });
            const result = await response.json();
            dispatch(trackTeacherData(result))
            
            // setState(initialState);
            console.log(result, "result of tracking...")


        } catch (error) {
            alert(`Internal Client Error,'${error}'`);
            console.log(error, "client error")
        }
    }


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
                                    <TouchableOpacity onPress={listTrackTeacher}>
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
                                    onChangeText={handleTeacher}
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
                                    onChangeText={handleEmail}
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
                                    onChangeText={handleMobile}
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
                                    onChangeText={handleOrganization}
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
                                    onChangeText={handleExperience}
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
                                    autoCapitalize='none'
                                    onChangeText={handleQualification}
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
                                    onChangeText={handleAddress}
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
                                    onChangeText={handleCurr_Add}
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
                                    onChangeText={handlePosition}
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
                                    onChangeText={handle_CurrentPosition}
                                />
                            </View>
                        </View>

                        {fileUploadTypes.map((type) => (
                            <View style={styles.signUpFileUpload} key={type.key}>
                                <View style={styles.fileUpldLeftCon}>
                                    <TouchableOpacity onPress={openGallery}>
                                        <Text style={styles.img_text}>{type.name}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.fileUploadRightCon}>
                                    {state.fileName ? (
                                        <TouchableOpacity onPress={() => alert(state.fileName)}>
                                            <Text style={styles.rightText}>File Upload Successful ✔</Text>
                                        </TouchableOpacity>
                                    ) : (
                                        <Text style={{ color: 'red' }}>No File Selected</Text>
                                    )}
                                </View>
                            </View>
                        ))}

                    </Animatable.View>
                </View>

                <View style={styles.overlay}>
                    <Animatable.View animation={'bounceInRight'} delay={9} style={styles.inputContainer}>
                        <LinearGradient colors={['#63f880', '#2a913e']} style={styles.linearCss}>
                            <View style={styles.networking_container}>
                                <TouchableOpacity style={styles.cont_with_new_acc} onPress={trackingTeacher}>
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