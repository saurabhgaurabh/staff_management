import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationStrings from "../constants/navigationStrings";
import HomeScreen from "../Screens/Home/HomeScreen";
import { RoutePlan, TargetScreen } from "../Screens";
import { TouchableOpacity, Image, useState, BackHandler, Alert } from "react-native";
import imagePath from "../constants/imagePath";
import OutstandingPayble from "../Screens/OutstandingPayble/OutstandingPayble";
// import TotalSale from "../Screens/TotalSale/TotalSale";
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from "react-redux";
import AddUpTeacher from "../Screens/Home/AddUpTeacher";
import TeacherRoute from "../Screens/Home/TeacherRoute";
import TeacherTimeline from "../Screens/Home/TeacherTimeline";
import StaffSalary from "../Screens/Home/StaffSalary";
import InvoiceGenerate from "../Screens/Home/InvoiceGenerate";
import Joining from "../Screens/Home/Joining";
import TotalStaff from "../Screens/Home/TotalStaff";
import TotalClass from "../Screens/Home/TotalClass";
import AddBooks from "../Screens/Home/AddBooks";
import AddTeacherList from "../HomeDetails/AddTeacherList";

function HomeStack({ navigation }) {


    const Stack = createNativeStackNavigator();

    const { loginData } = useSelector(state => state.login)
    // const navigation = useNavigation();



    // useEffect(() => {  
    //   if (loginData) {
    //     if (loginData.token) {
    //       navigation.navigate(navigationStrings.TABROUTES)
    //     }
    //     else {
    //       navigation.navigate('LoginScreen');
    //     }
    //   } else {
    //     navigation.navigate('LoginScreen');
    //   }
    // }, [])

    return (
        <Stack.Navigator screenOptions={{ headerShown: true, }}>
            <Stack.Screen
                name={navigationStrings.HOME} component={HomeScreen} options={({ navigation }) => ({
                    headerTitleAlign: 'center',
                    title: 'eStudy',
                    headerLeft: () => {
                        return (
                            <TouchableOpacity onPress={navigation.toggleDrawer}>
                                <Image style={{ height: 25, width: 15 }} source={imagePath.iciconsmenu} />
                            </TouchableOpacity>
                        )
                    },
                    headerRight: () => {
                        return (
                            <TouchableOpacity onPress={navigation.toggleDrawer}>
                                <Image style={{ height: 35, width: 25 }} source={imagePath.icDummyUser} />
                            </TouchableOpacity>
                        )
                    },
                    headerStyle: {
                        backgroundColor: '#9f9bd4', // Set the background color to purple
                      },
                })} />
            <Stack.Screen name={navigationStrings.AddUPTeacher} component={AddUpTeacher} options={{ title: 'Add Treacher' , headerStyle:{ backgroundColor: '#fff'}}} />
            <Stack.Screen name={navigationStrings.TEACHEROUTE} component={TeacherRoute} options={{ title: 'Teacher Tracking' }} />
            <Stack.Screen name={navigationStrings.TEACHERTIMELINE} component={TeacherTimeline} options={{ title: 'Teacher Timeline' }} />
            <Stack.Screen name={navigationStrings.STAFFSALARY} component={StaffSalary} options={{ title: 'Staff Salary' }} />
            <Stack.Screen name={navigationStrings.INVOICE} component={InvoiceGenerate} options={{ title: 'Invoice enerate' }} />
            <Stack.Screen name={navigationStrings.JOINING} component={Joining} options={{ title: 'Teacher joining' }} />
            <Stack.Screen name={navigationStrings.TOTALSTAFF} component={TotalStaff} options={{ title: 'Total Staff' }} />
            <Stack.Screen name={navigationStrings.TOTALCLASS} component={TotalClass} options={{ title: 'Total Class' }} />
            <Stack.Screen name={navigationStrings.BOOKS} component={AddBooks} options={{ title: 'Total Books' }} />
        </Stack.Navigator>
    )
}

export default HomeStack