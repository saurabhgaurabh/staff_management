import { View, Text, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'


const Joining = () => {

    const navigation = useNavigation();

    function handleBackButtonClick() {
        navigation.goBack();
        return true;
    }
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
        };
    }, [])
    return (
        <View>
            <Text>Joining</Text>
        </View>
    )
}

export default Joining