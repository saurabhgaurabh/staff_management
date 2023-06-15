import { View, Text, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'


const TotalStaff = () => {
    const navigation = useNavigation();

    function handleBackButtonClick(){
        navigation.goBack();
        return true;
    }
    useEffect(()=>{
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
        return ()=>{
            BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
        };
    },[])
    
  return (
    <View>
      <Text>TotalStaff</Text>
    </View>
  )
}

export default TotalStaff