import React, { useState } from 'react'
import { View, Text, BackHandler, TouchableOpacity, StyleSheet, ScrollView, Image, ImageBackground, ToastAndroid } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import imagePath from '../../constants/imagePath';
import styles from '../MainStyle';
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../../Components/CustomHeader';
import { TextInput } from 'react-native-paper';
import { ServerUrl } from '../../Helper/Helper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import { MyStaffReduceres } from '../../redux/MyStaffSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MyStaffAddData } from '../../redux/MyLoginSlice';
import navigationString from '../../constants/navigationStrings'





const AddUpTeacher = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const listView = () => { navigation.navigate(navigationString.TEACHLIST) }
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




  const [state, setState] = useState({ username_teacher: "", teacher_name: "", age: "", email_teacher: "", address_teacher: "", salary: "", mobile: "", password: "", confirm_password: "", eligibility: "", degree: "", experience: "", position: "", fileName: "", base64File: "" });
  const handleUsername = (text) => { setState({ ...state, username_teacher: text }) }
  const handleTeacherName = (text) => { setState({ ...state, teacher_name: text }) }
  const handleAge = (text) => { setState({ ...state, age: text }) }
  const handleEmail = (text) => { setState({ ...state, email_teacher: text }) }
  const handleResidence = (text) => { setState({ ...state, address_teacher: text }) }
  const handleSalary = (text) => { setState({ ...state, salary: text }) }
  const handleMobile = (text) => { setState({ ...state, mobile: text }) }
  const handlePassword = (text) => { setState({ ...state, password: text }) }
  const handleConfirmPassword = (text) => { setState({ ...state, confirm_password: text }) }
  const handleEligibility = (text) => { setState({ ...state, eligibility: text }) }
  const handleNoOfDegree = (text) => { setState({ ...state, degree: text }) }
  const handleExperience = (text) => { setState({ ...state, experience: text }) }
  const handlePosition = (text) => { setState({ ...state, position: text }) }

  const openGallery = () => {
    const options = {
      title: 'Select Image',
      type: 'library',
      options: {
        maxHeight: 200,
        maxWidth: 200,
        selectionLimit: 1,
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
        console.log(response.assets[0].fileName, "response.assets[0]")
        setState({ ...state, base64File: response.assets[0].base64, fileName: response.assets[0].fileName })
      }
    })
  }



  const submitTeacherDetails = async () => {
    const { username_teacher, teacher_name, age, email_teacher, address_teacher, salary, mobile, password, confirm_password, eligibility, degree, experience, position, fileName, base64File } = state;

    if (!username_teacher) return alert("Username is required.");
    if (!teacher_name) return alert("Teacher Name is required.");
    if (!age) return alert("Age is required.");
    if (!email_teacher) return alert("Email is required.");
    if (!address_teacher) return alert("Address is required.");
    if (!salary) return alert("Salary is required.");
    if (!mobile) return alert("Mobile is required.");
    if (!password) return alert("Password is required.");
    if (password !== confirm_password) return alert("Passwords do not match.");
    if (!eligibility) return alert("Eligibility is required.");
    if (!degree) return alert("Degree is required.");
    if (!experience) return alert("Experience is required.");
    if (!position) return alert("Position is required.");
    if (!fileName) return alert("Image is required.");

    try {
      const response = await fetch(`${ServerUrl()}add_teacher_management`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username_teacher, teacher_name, age, email_teacher, address_teacher, salary, mobile, password, confirm_password, eligibility, degree, experience, position, image: fileName, base64File })
      });

      const result = await response.json();
      console.log(result, "add teacher result.");
      dispatch(MyStaffAddData(result))
      if (result.status === true) {
        if (result.message === "Duplicate Record Can't Accept") {
          return alert("Duplicate data: Teacher with the same name and email already exists.");
        } else if (result.message === "Already Exist") {
          return alert("Duplicate data: Teacher with the same name and email already exists.");
        }
        else {
          ToastAndroid.show('Inserted Successfully', ToastAndroid.SHORT);
          navigation.navigate(navigationString.TEACHLIST)
        }
      }
    } catch (error) {
      alert(`Internal Client Error: ${error}`);
      console.log(error, "result error");
    }
  };


  return (
    <View>
      {/* <View style={styles.headerComponent}>
        <View style={styles.headerTxt}>
          <TouchableOpacity onPress={handleBackButtonClick} >
            <Image style={{ height: 25, width: 20 }} source={imagePath.icbackNoraml} />
          </TouchableOpacity>
        </View>
        <View style={styles.header_tet_body}>
          <Text style={styles.headerText}>Registration</Text>
        </View>
      </View> */}

      {/* <CustomHeader name="My Custom Header" color="#2da600" /> */}

      <ScrollView showsVerticalScrollIndicator={true} style={styles.listsrcsytle}>
        <LinearGradient colors={['#fff', '#eef2f3']}
          style={styles.Linearcontainer}>
          <View style={{ display: 'flex' }}>
          <View style={styles.teacherListAddMenu}>
        <View style={styles.contanerBody}>
          <LinearGradient colors={['#f9cc0a', '#f9b511']} style={styles.linearCss} >
            <View style={styles.ContainerCss}>
              <TouchableOpacity onPress={listView}>
                <Text>View List</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </View>
            <Animatable.View animation={'zoomIn'} style={{ flexDirection: 'column', paddingTop: 30 }}>
              <View style={styles.FormMainStyles}>
                <View style={styles.signUp_input}>
                  <TextInput style={styles.input}
                    label="Username"
                    placeholder='Short Name'
                    activeUnderlineColor="#0288D1"
                    activeOutlineColor="#2da600"
                    mode='outlined'
                    outlineColor="green"
                    returnKeyLabel='next'
                    placeholderTextColor='#000'
                    autoCapitalize='none'
                    onChangeText={handleUsername}
                  />
                </View>
              </View>
              <View style={styles.FormMainStyles}>
                <View style={styles.signUp_input}>
                  <TextInput style={styles.input}
                    label="Teacher Name"
                    placeholder='Your Name'
                    activeUnderlineColor="#0288D1"
                    activeOutlineColor="#2da600"
                    mode='outlined'
                    outlineColor="green"
                    returnKeyLabel='next'
                    placeholderTextColor='#000'
                    autoCapitalize='none'
                    onChangeText={handleTeacherName}
                  />
                </View>
              </View>
              <View style={styles.FormMainStyles}>
                <View style={styles.signUp_input}>
                  <TextInput style={styles.input}
                    label="Teacher Age"
                    placeholder='**'
                    activeUnderlineColor="#0288D1"
                    activeOutlineColor="#2da600"
                    mode='outlined'
                    outlineColor="green"
                    returnKeyLabel='next'
                    placeholderTextColor='#000'
                    autoCapitalize='none'
                    keyboardType='numeric'
                    onChangeText={handleAge}
                  />
                </View>
              </View>
              <View style={styles.FormMainStyles}>
                <View style={styles.signUp_input}>
                  <TextInput style={styles.input}
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
                  <TextInput style={styles.input}
                    label="Residence"
                    placeholder='Delhi, India'
                    activeUnderlineColor="#0288D1"
                    activeOutlineColor="#2da600"
                    mode='outlined'
                    outlineColor="green"
                    returnKeyLabel='next'
                    placeholderTextColor='#000'
                    autoCapitalize='none'
                    onChangeText={handleResidence}
                  />
                </View>
              </View>
              <View style={styles.FormMainStyles}>
                <View style={styles.signUp_input}>
                  <TextInput style={styles.input}
                    label="Previous Salary"
                    placeholder='*****'
                    activeUnderlineColor="#0288D1"
                    activeOutlineColor="#2da600"
                    mode='outlined'
                    outlineColor="green"
                    returnKeyLabel='next'
                    placeholderTextColor='#000'
                    keyboardType='numeric'
                    autoCapitalize='none'
                    onChangeText={handleSalary}
                  />
                </View>
              </View>
              <View style={styles.FormMainStyles}>
                <View style={styles.signUp_input}>
                  <TextInput style={styles.input}
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
                  <TextInput style={styles.input}
                    label="Password"
                    placeholder='**********'
                    activeUnderlineColor="#0288D1"
                    activeOutlineColor="#2da600"
                    mode='outlined'
                    // secureTextEntry={true}
                    outlineColor="green"
                    returnKeyLabel='next'
                    autoCapitalize='none'
                    placeholderTextColor='#000'
                    onChangeText={handlePassword}
                  />
                </View>
              </View>
              <View style={styles.FormMainStyles}>
                <View style={styles.signUp_input}>
                  <TextInput style={styles.input}
                    label="Confirm Password"
                    placeholder='**********'
                    activeUnderlineColor="#0288D1"
                    activeOutlineColor="#2da600"
                    mode='outlined'
                    outlineColor="green"
                    returnKeyLabel='next'
                    autoCapitalize='none'
                    placeholderTextColor='#000'
                    onChangeText={handleConfirmPassword}
                  />
                </View>
              </View>
              <View style={styles.FormMainStyles}>
                <View style={styles.signUp_input}>
                  <TextInput style={styles.input}
                    label="Eligibility"
                    placeholder='Qualification'
                    activeUnderlineColor="#0288D1"
                    activeOutlineColor="#2da600"
                    mode='outlined'
                    outlineColor="green"
                    returnKeyLabel='next'
                    autoCapitalize='none'
                    placeholderTextColor='#000'
                    onChangeText={handleEligibility}
                  />
                </View>
              </View>
              <View style={styles.FormMainStyles}>
                <View style={styles.signUp_input}>
                  <TextInput style={styles.input}
                    label="How many Degrees Do You Have"
                    placeholder='*'
                    activeUnderlineColor="#0288D1"
                    activeOutlineColor="#2da600"
                    mode='outlined'
                    outlineColor="green"
                    returnKeyLabel='next'
                    autoCapitalize='none'
                    placeholderTextColor='#000'
                    onChangeText={handleNoOfDegree}
                  />
                </View>
              </View>
              <View style={styles.FormMainStyles}>
                <View style={styles.signUp_input}>
                  <TextInput style={styles.input}
                    label="Your Experience"
                    placeholder='xyz years'
                    activeUnderlineColor="#0288D1"
                    activeOutlineColor="#2da600"
                    mode='outlined'
                    outlineColor="green"
                    returnKeyLabel='next'
                    autoCapitalize='none'
                    placeholderTextColor='#000'
                    onChangeText={handleExperience}
                  />
                </View>
              </View>
              <View style={styles.FormMainStyles}>
                <View style={styles.signUp_input}>
                  <TextInput style={styles.input}
                    label="Your Position"
                    placeholder='Your Position'
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
              <View style={styles.signUpFileUpload}>
                <View style={{ flexDirection: 'column', width: '40%', }}><TouchableOpacity onPress={openGallery}>
                  <Text style={styles.img_text} >Upload File</Text>
                </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'column', width: '60%', alignItems: 'center' }}>
                  <Text>{state.fileName}</Text>
                </View>
              </View>
            </Animatable.View>
          </View>

          <View style={styles.overlay}>
            <Animatable.View animation={'bounceInRight'} delay={9} style={styles.inputContainer}>
              <LinearGradient colors={['#63f880', '#2a913e']} style={styles.linearCss}>
                <View style={styles.networking_container}>
                  <TouchableOpacity style={styles.cont_with_new_acc} onPress={submitTeacherDetails}>
                    <Text style={styles.networking_txt}>Save</Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </Animatable.View>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  )
}


export default AddUpTeacher