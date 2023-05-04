import { StyleSheet, Text, View,Image,TouchableOpacity, } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './Routes';
import navigationStrings from '../constants/navigationStrings';
import LoginScreen from '../Screens/Login/LoginScreen';
import TabRoutes from './TabRouts';
import SignUpScreen from '../Screens/SighUp/SignUpScreen';
import ForgetPassword from '../Screens/ForgetPassword/ForgetPassword';
import  Splash  from '../Screens/Splash/Splash';



const Stack = createNativeStackNavigator();

const LoginRoute = (Navigation) => {
  return (
    // <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name={navigationStrings.SPLASH} component={Splash}/> */}
            <Stack.Screen name={navigationStrings.LOGIN} component={LoginScreen}/>
            <Stack.Screen name={navigationStrings.Routes} component={Routes}/>
            <Stack.Screen name={navigationStrings.SIGNUP} component={SignUpScreen}/>
            <Stack.Screen name={navigationStrings.FORGETPASSWORD} component={ForgetPassword}/>
            {/* <Stack.Screen name={navigationStrings.LEDGER} component={LedgerScreen}/> */}
        </Stack.Navigator>
    //  </NavigationContainer>
    
  )
}
export default LoginRoute

const styles = StyleSheet.create({})