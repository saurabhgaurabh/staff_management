import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, BackHandler } from 'react-native'
import CustomHeader from '../Components/CustomHeader'
import styles from '../Screens/MainStyle'
import imagePath from '../constants/imagePath'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';

const AddTeacherList = () => {
  const navigation = useNavigation();

  return (
    <View>
      <CustomHeader name={'Listing of Added Staff'} color="#2da600" />
      <Animatable.Text animation="zoomIn" delay={2} style={styles.profileHeading}>View All Details </Animatable.Text>
      <ScrollView showsHorizontalScrollIndicator={true}>

      </ScrollView>
    </View>
  )
}

export default AddTeacherList