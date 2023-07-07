import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, BackHandler } from 'react-native'
import CustomHeader from '../Components/CustomHeader'
import styles from '../Screens/MainStyle'
import imagePath from '../constants/imagePath'
import { useNavigation } from '@react-navigation/native'


const AddTeacherList = () => {
  const navigation = useNavigation();
  
  return (
    <View>
      <CustomHeader name={'Listing of Added Staff'} color="#2da600" />
      <Text>AddTeacherList</Text>
    </View>
  )
}

export default AddTeacherList