import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from '../constants/navigationStrings';
import imagePath from '../constants/imagePath';
import { Image, useState, BackHandler, Alert } from 'react-native';
import HomeStack from './HomeStack';
import FavoriteStack from './FavoriteStack';
import OrderStack from './OrderStack';
import ProfileStack from './ProfileStack';
import { useNavigation } from '@react-navigation/native';


function TabRoutes() {
    const navigation = useNavigation();
    const Tab = createBottomTabNavigator();
    
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to Exit App?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarInactiveTintColor: 'black',
                tabBarActiveTintColor: 'green',
                tabBarShowLabel: true,
                headerTitleAlign: 'center',
                headerTintColor: '#3CB371',
                tabBarShowLabel: true,
                tabBarStyle: {
                    freezeOnBlur: true,
                    position: 'absolute',
                    shadowColor: 'blue',
                    headerShown: true,
                    position: 'absolute',
                    bottom: 0,
                    shadowColor: "red",
                    shadowOffset: { width: 0, height: 40 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    padding: 2,
                    paddingBottom: 6,
                    paddingTop: 7,
                    shadowColor: "#d9d9d9",
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    shadowOffset: {
                        height: 1,
                        width: 10,
                    }
                }
            }} >

            <Tab.Screen
                name={navigationStrings.HOMESTACK} component={HomeStack}
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ tintColor: focused ? 'green' : 'black' }} source={imagePath.icNavHome} />)
                    }, headerTintColor: 'green', headerShown: false
                }} />
            <Tab.Screen
                name={navigationStrings.FAVORITESTACK} component={FavoriteStack}
                options={{
                    title: "Favorite",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ height: 25, width: 25, tintColor: focused ? 'green' : 'black' }} source={imagePath.icAddfavorite} />)
                    }, headerTintColor: 'green', headerShown: false
                }} />
            <Tab.Screen
                name={navigationStrings.ORDERSTACK} component={OrderStack}
                options={{
                    title: "Order",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ height: 27, width: 27, tintColor: focused ? 'green' : 'black' }} source={imagePath.icNAbCategory} />
                        )
                    }, headerTintColor: 'green', headerShown: false
                }} />
            <Tab.Screen
                name={navigationStrings.PROFILESTACK} component={ProfileStack}
                options={{
                    title: "Profile",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ tintColor: focused ? 'green' : 'black' }} source={imagePath.icNabProfile} />
                        )
                    }, headerTintColor: 'green', headerShown: false
                }} />
        </Tab.Navigator>
    )
}
export default TabRoutes