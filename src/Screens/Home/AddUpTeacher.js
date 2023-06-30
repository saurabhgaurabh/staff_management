import { View, Text, BackHandler, TouchableOpacity, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import imagePath from '../../constants/imagePath';
import styles from '../MainStyle';
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../../Components/CustomHeader';
import { TextInput } from 'react-native-paper';




const AddUpTeacher = () => {
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
      <View style={styles.headerView}>
        <View style={styles.headerTxt}>
          <TouchableOpacity onPress={{}} >
            <Text style={styles.headerText}>View</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <CustomHeader name="My Custom Header" color="#2da600" /> */}

      <ScrollView
        showsVerticalScrollIndicator={true} style={styles.listsrcsytle}>
        <View style={{ display: 'flex' }}>
          <Animatable.View animation={'zoomIn'} style={{ flexDirection: 'column', paddingTop: 40 }}>
            <Animatable.View animation={'zoomIn'} duration={100} delay={100} style={styles.FormMainStyles}>
              <View style={styles.signUp_input}>
                <TextInput style={styles.input}
                  label="Username"
                  activeUnderlineColor="#0288D1"
                  activeOutlineColor="#2da600"
                  mode='outlined'
                  outlineColor="green"
                  returnKeyLabel='next'
                  placeholderTextColor='#000'
                  autoCapitalize='none'
                // onChangeText={handleUsername}
                />
              </View>
            </Animatable.View>
            <Animatable.View animation={'bounceInRight'} duration={1000} delay={100} style={styles.FormMainStyles}>
              <View style={styles.signUp_input}>
                <TextInput style={styles.input}
                  label="Teacher Name"
                  activeUnderlineColor="#0288D1"
                  activeOutlineColor="#2da600"
                  mode='outlined'
                  outlineColor="green"
                  returnKeyLabel='next'
                  placeholderTextColor='#000'
                  autoCapitalize='none'
                // onChangeText={handleUsername}
                />
              </View>
            </Animatable.View>
            <View style={styles.FormMainStyles}>
              <View style={styles.signUp_input}>
                <TextInput style={styles.input}
                  label="Teacher Age"
                  activeUnderlineColor="#0288D1"
                  activeOutlineColor="#2da600"
                  mode='outlined'
                  outlineColor="green"
                  returnKeyLabel='next'
                  placeholderTextColor='#000'
                  autoCapitalize='none'
                // onChangeText={handleUsername}
                />
              </View>
            </View>
            <View style={styles.FormMainStyles}>
              <View style={styles.signUp_input}>
                <TextInput style={styles.input}
                  label="E-Mail"
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
                <TextInput style={styles.input}
                  label="Residence"
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
                <TextInput style={styles.input}
                  label="Previous Salary"
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
                <TextInput style={styles.input}
                  label="Mobile"
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
                <TextInput style={styles.input}
                  label="Password"
                  activeUnderlineColor="#0288D1"
                  activeOutlineColor="#2da600"
                  mode='outlined'
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
                <TextInput style={styles.input}
                  label="Confirm Password"
                  activeUnderlineColor="#0288D1"
                  activeOutlineColor="#2da600"
                  mode='outlined'
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
                <TextInput style={styles.input}
                  label="Eligibility"
                  activeUnderlineColor="#0288D1"
                  activeOutlineColor="#2da600"
                  mode='outlined'
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
                <TextInput style={styles.input}
                  label="How many Degrees Do You Have"
                  activeUnderlineColor="#0288D1"
                  activeOutlineColor="#2da600"
                  mode='outlined'
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
                <TextInput style={styles.input}
                  label="Your Experience"
                  activeUnderlineColor="#0288D1"
                  activeOutlineColor="#2da600"
                  mode='outlined'
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
                <TextInput style={styles.input}
                  label="Your Position"
                  activeUnderlineColor="#0288D1"
                  activeOutlineColor="#2da600"
                  mode='outlined'
                  outlineColor="green"
                  returnKeyLabel='next'
                  autoCapitalize='none'
                  placeholderTextColor='#000'
                // onChangeText={handlePassword}
                />
              </View>
            </View>
            <View style={styles.signUpFileUpload}>
              <View style={{ flexDirection: 'column', width: '40%', }}><TouchableOpacity
              // onPress={openGallery}
              >
                <Text style={styles.img_text} >Upload File</Text>
              </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'column', width: '60%', }}>
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
                  <Text style={styles.networking_txt}>Save Your Information</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </Animatable.View>
        </View>
      </ScrollView>
    </View>
  )
}


export default AddUpTeacher