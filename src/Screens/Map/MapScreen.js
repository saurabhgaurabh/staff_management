import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import MapView from 'react-native-maps';


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
        <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            />
        </View>
    )
}

export default MapScreen