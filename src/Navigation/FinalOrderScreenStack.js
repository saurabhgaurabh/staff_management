import React from "react";
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationStrings from "../constants/navigationStrings";
import { FinalOrder } from "../Screens";
import { useNavigation } from "@react-navigation/native";

const FinalOrderScreenStack = () => {
    const navigation = useNavigation();
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name={navigationStrings.FINALORDER} component={FinalOrder} options={{ title: 'Final Order' }}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default FinalOrderScreenStack

const styles = StyleSheet.create({})