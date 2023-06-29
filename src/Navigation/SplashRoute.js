import React from 'react'
import 'react-native-gesture-handler';
import navigationStrings from '../constants/navigationStrings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import LoginScreen from '../Screens/Login/LoginScreen';
import SignUpScreen from '../Screens/SighUp/SignUpScreen';
import ForgetPassword from '../Screens/ForgetPassword/ForgetPassword';
import Routes from './Routes';
import OTPScreen from '../Screens/OtpScreen/OTPScreen';
import NewPasswordScreen from '../Screens/OtpScreen/NewPasswordScreen';
import SignUpOtpScreen from '../Screens/SighUp/SignUpOtpScreen';
import AddCustomer from '../Screens/Customer/AddCustomer';
import AddtoCart from '../Screens/Order/AddCardScreen';
import { FinalOrder, FirstScreen } from '../Screens';
import { useEffect } from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import TabRoutes from './TabRouts';
import Onboarding from '../Screens/Login/Onboarding.js';


const SplashRoute = () => {
  const { loginData } = useSelector(state => state.login)
  // const Drawer = createDrawerNavigator();

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{presentation: 'modal', headerShown: false }}>
        <Stack.Screen name={navigationStrings.FIRSTSCREEN} component={FirstScreen} />
        <Stack.Screen name={navigationStrings.ONBOARD} component={Onboarding} />
        <Stack.Screen name={navigationStrings.LOGIN} component={LoginScreen} />
        <Stack.Screen name={navigationStrings.Routes} component={Routes} />
        <Stack.Screen name={navigationStrings.TABROUTES} component={TabRoutes} />
        <Stack.Screen name={navigationStrings.SIGNUP} component={SignUpScreen} />
        <Stack.Screen name={navigationStrings.FORGETPASSWORD} component={ForgetPassword} />
        <Stack.Screen name={navigationStrings.OTPSCREEN} component={OTPScreen} />
        <Stack.Screen name={navigationStrings.NEWPASSWORD} component={NewPasswordScreen} />
        <Stack.Screen name={navigationStrings.SIGNUPOTP} component={SignUpOtpScreen} />
        <Stack.Screen name={navigationStrings.ADDCUSTOMER} component={AddCustomer} />
        <Stack.Screen name={navigationStrings.ADDTOCART} component={AddtoCart} />
        <Stack.Screen name={navigationStrings.FINALORDER} component={FinalOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default SplashRoute