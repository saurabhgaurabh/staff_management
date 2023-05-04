import React,{useEffect} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationStrings from "../constants/navigationStrings";
import HomeScreen from "../Screens/Home/HomeScreen";
import LedgerBalance from "../Screens/LedgerBalance/LedgerBalance";
import { RoutePlan, TargetScreen } from "../Screens";
import { TouchableOpacity, Image,useState,BackHandler, Alert  } from "react-native";
import imagePath from "../constants/imagePath";
import OutstandingPayble from "../Screens/OutstandingPayble/OutstandingPayble";
import TotalSale from "../Screens/TotalSale/TotalSale";
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from "react-redux";

function HomeStack({navigation}) {

  
    const Stack = createNativeStackNavigator();

    const { loginData } = useSelector(state => state.login)
    // const navigation = useNavigation();
  
  
  
    useEffect(() => {
  
      if (loginData) {
        if (loginData.token) {
          navigation.navigate(navigationStrings.TABROUTES)
        }
        else {
          navigation.navigate('LoginScreen');
        }
      } else {
        navigation.navigate('LoginScreen');
      }
    }, [])
  

    // useEffect(() => {
    //     const backAction = () => {
    //       Alert.alert("Hold on!", "Are you sure you want to Exit App?", [
    //         {
    //           text: "Cancel",
    //           onPress: () => null,
    //           style: "cancel"
    //         },
    //         { text: "YES", onPress: () => BackHandler.exitApp() }
    //       ]);
    //       return true;
    //     };
    
    //     const backHandler = BackHandler.addEventListener(
    //       "hardwareBackPress",
    //       backAction
    //     );
    
    //     return () => backHandler.remove();
    //   }, []);
    
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}> 
            <Stack.Screen
                name={navigationStrings.HOME}
                component={HomeScreen}
                options={({ navigation }) => ({
                    headerTitleAlign: 'center',
                    title: 'Home',
                    headerLeft: () => {
                        return (
                            <TouchableOpacity onPress={navigation.toggleDrawer}>
                                <Image style={{ height: 25, width: 15 }} source={imagePath.iciconsmenu} />
                            </TouchableOpacity>
                        )
                    }
                })} />
            <Stack.Screen name={navigationStrings.LEDGER_BALANCE} component={LedgerBalance} options={{ title: 'Ledger Balance' }} />
            <Stack.Screen name={navigationStrings.OUTSTANDINGPAYBLE} component={OutstandingPayble} options={{ title: 'Outstanding Receivable' }} />
            <Stack.Screen name={navigationStrings.TOTAL_SALE} component={TotalSale} options={{ title: 'Total Sale' }} />
            <Stack.Screen name={navigationStrings.TARGET} component={TargetScreen} options={{ title: 'Target' }} />
            {/* <Stack.Screen name={navigationStrings.ROUTEPLANS} component={RoutePlan} options={{ title: 'Roots Plans' }} /> */}
        </Stack.Navigator>
    )
}

export default HomeStack