import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, BackHandler, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import imagePath from "../../constants/imagePath";
import { useNavigation } from '@react-navigation/native';
import navigationStrings from "../../constants/navigationStrings";
// import { Registercheck } from "../../redux/MyLoginSlice";



function Splash(props) {
    const navigation = useNavigation();
    const { loginData } = useSelector(state => state.login)
    
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to Exit App?", [
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

    useEffect(() => {
        const timer = setTimeout(() => {
            if (loginData) {
                if (loginData.token) {
                    navigation.navigate(navigationStrings.Routes)
                }
                else {
                    navigation.navigate('LoginScreen');
                }
            } else {
                navigation.navigate('LoginScreen');
            }
        }, 1000);
        return () => clearTimeout(timer)
    }, []);

    return (
        <View style={styles.splash}>
            <Image source={imagePath.icLogo} style={{ width: 'auto', height: '12%' }} alt="logo" />
            <View>
                <Text style={styles.splashtext}>Sales App</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    splash: {
        fontSize: 20,
        color: '#7d7d7d',
        flex: 1,
        justifyContent: 'center',
    },
    splashtext: {
        color: '#0288D1',
        textAlign: 'center',
        fontSize: 25,
        bottom: -300,
        justifyContent: 'flex-end'
    }
})
export default Splash;