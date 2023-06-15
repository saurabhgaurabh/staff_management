import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react';
import { BackHandler } from 'react-native';


const TeacherTimeline = () => {
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
        <View>
            <Text>TeacherTimeline</Text>
        </View>
    )
}

export default TeacherTimeline