import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity, Image, Animated } from 'react-native';
import imagePath from '../../constants/imagePath';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../MainStyle';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../../constants/navigationStrings';
import LinearGradient from 'react-native-linear-gradient';


const FirstScreen = () => {
    const navigation = useNavigation();
    const goToLogin = () => {
        navigation.navigate(navigationStrings.LOGIN)
    }
    const createAccount = () => {
        navigation.navigate(navigationStrings.SIGNUP)
    }
    return (
        <ImageBackground source={imagePath.icfirstss} style={styles.background}>
            <SafeAreaView style={styles.upper_txt}>
                <Text style={styles.sub_upper_txt}>Welcome To eStudy !</Text>
                <Text style={styles.subtitle}>Type here something related to screen</Text>
            </SafeAreaView>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image source={imagePath.icuser} style={styles.logoCss} />
            </View>
            <View style={styles.overlay}>
                <View style={styles.inputContainer}>
                    <View style={styles.networking_container}>
                        <View style={styles.cont_with_goolge_logo}>
                            <Image source={imagePath.icgoogle} style={styles.goole_properties} />
                        </View>

                        <View style={styles.cont_with_goolge}>
                            <Text style={styles.networking_txt}>Continue With Google</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.networking_container}>
                        <View style={styles.cont_with_goolge_logo}>
                            <Image source={imagePath.icfacebook} style={styles.goole_properties} />
                        </View>
                        <View style={styles.cont_with_fb}>
                            <Text style={styles.networking_txt}>Continue With Facebook</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.networking_container}>
                        <TouchableOpacity style={styles.cont_with_new_acc} onPress={createAccount}>
                            <Text style={styles.networking_txt}>Create an account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.main_screen_footer}>
                <View style={styles.main_screen_footer_division}>
                    <Text style={styles.summary_property}>already have an account ? </Text>
                </View>
                <View style={styles.main_screen_footer_division}>
                    <TouchableOpacity onPress={goToLogin}>
                        <Text style={styles.sign_in_property} onPress={goToLogin}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

export default FirstScreen