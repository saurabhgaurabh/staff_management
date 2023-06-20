import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import { TouchableOpacity, Image } from "react-native";
import imagePath from "../constants/imagePath";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
      name={navigationStrings.PROFILE} 
      component={Profile}
        options={({ navigation }) => ({
          headerTitleAlign: 'center',
          title: 'Profile',
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

export default ProfileStack