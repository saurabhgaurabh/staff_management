import { View, Text, BackHandler } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const TeacherRoute = () => {

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
            <Text>TeacherRoute</Text>
        </View>
    )
}

export default TeacherRoute