import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoriteScreen } from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import { TouchableOpacity, Image } from 'react-native';
import imagePath from '../constants/imagePath';
// import { Image } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';



const Stack = createNativeStackNavigator();

const FavoriteStack = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true, headerStyle: {  } }}>
      <Stack.Screen name={navigationStrings.FAVORITESCREEN} component={FavoriteScreen}

        options={({ navigation }) => ({
          headerTitleAlign: 'center',
          title: 'Favorites',
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => { navigation.toggleDrawer(); }}>
                  <Image style={{ height: 25, width: 15 }} source={imagePath.iciconsmenu} />
              </TouchableOpacity>
          )
          }
        })}
        screenOptions={{ headerShown: true }}
      />


    </Stack.Navigator>
  )
}

export default FavoriteStack

const styles = StyleSheet.create({})