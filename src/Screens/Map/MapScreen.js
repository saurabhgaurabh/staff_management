import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import MapViewComponent from './MapViewComponent';
// import MapView from 'react-native-maps';



const MapScreen = () => {
    const navigation = useNavigation();

    function handleBackButtonClick() {
        navigation.goBack();
        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
        }
    }, [])

    return (
        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' , height: '100%', width: '100%'}}>
            <MapViewComponent />
        </View>
    )
}

export default MapScreen