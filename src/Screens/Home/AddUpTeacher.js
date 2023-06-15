import { View, Text, BackHandler } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

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
      <Text>AddUpTeacher</Text>
    </View>
  )
}

export default AddUpTeacher