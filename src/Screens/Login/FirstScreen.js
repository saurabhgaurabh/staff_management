import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity, Image, Animated } from 'react-native';
import imagePath from '../../constants/imagePath';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../MainStyle';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../../constants/navigationStrings';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const FirstScreen = () => {
    const navigation = useNavigation();
    const onboard =()=>{ navigation.navigate(navigationStrings.ONBOARD)}
    const goToLogin = () => {
        navigation.navigate(navigationStrings.LOGIN)
    }
    const createAccount = () => {
        navigation.navigate(navigationStrings.SIGNUP)
    }
    return (
        <LinearGradient colors={['#8e9eab', '#eef2f3']}
            style={styles.Linearcontainer}>
            <SafeAreaView style={styles.upper_txt}>
                <Animatable.Text animation={'zoomIn'} delay={2} style={styles.sub_upper_txt}>Welcome To eStudy !</Animatable.Text>
            </SafeAreaView>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image source={imagePath.icuser} style={styles.logoCss} />
            </View>
            <View style={styles.overlay}>
                <Animatable.View animation={'bounceInRight'} delay={1} style={styles.inputContainer}>
                <LinearGradient colors={['#FF3D3D','#e25a6e' ]} style={styles.linearCss}>
                    <View style={styles.networking_container}>
                        <View style={styles.cont_with_goolge_logo}>
                            <Image source={imagePath.icgoogle} style={styles.goole_properties} />
                        </View>
                        <View style={styles.cont_with_goolge}>
                            <Text style={styles.networking_txt}>Continue With Google</Text>
                        </View>
                    </View>
                    </LinearGradient>
                </Animatable.View>
                <Animatable.View animation={'bounceInLeft'} delay={2} style={styles.inputContainer}>
                <LinearGradient colors={['#9ba9f3', '#191ae6']} style={styles.linearCss}>
                    <View style={styles.networking_container}>
                        <View style={styles.cont_with_goolge_logo}>
                            <Image source={imagePath.icfacebook} style={styles.goole_properties} />
                        </View>
                        <View style={styles.cont_with_fb}>
                            <TouchableOpacity onPress={onboard}>
                            <Text style={styles.networking_txt}>Continue With Facebook</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </LinearGradient>
                </Animatable.View>
                <Animatable.View animation={'bounceInRight'} delay={3} style={styles.inputContainer}>
                    <LinearGradient colors={['#b6a2f1', '#7145f1']} style={styles.linearCss}>
                        <View style={styles.networking_container}>
                            <TouchableOpacity style={styles.cont_with_new_acc} onPress={createAccount}>
                                <Text style={styles.networking_txt}>Create an account</Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </Animatable.View>
            </View>
            <Animatable.View animation={'zoomIn'} delay={2} style={styles.main_screen_footer}>
                <View style={styles.main_screen_footer_division}>
                    <Text style={styles.summary_property}>already have an account ? </Text>
                </View>
                <View style={styles.main_screen_footer_division}>
                    <TouchableOpacity onPress={goToLogin}>
                        <Text style={styles.sign_in_property} onPress={goToLogin}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </LinearGradient>
    );
}

export default FirstScreen