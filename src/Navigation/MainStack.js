import React from "react";
import navigationStrings from "../constants/navigationStrings";
import TabRoutes from "./TabRouts";
import TotalSale from "../Screens/TotalSale/TotalSale";
import TargetScreen from "../Screens/Target/TargetScreen";
import RoutePlan from "../Screens/RoutePlan/RoutePlan";
import LedgerBalance from "../Screens/LedgerBalance/LedgerBalance";
import OutstandingPayble from "../Screens/OutstandingPayble/OutstandingPayble";
import SignUpScreen from "../Screens/SighUp/SignUpScreen";
import ForgetPassword from "../Screens/ForgetPassword/ForgetPassword";
import Splash from "../Screens/Splash/Splash";
import OTPScreen from "../Screens/OtpScreen/OTPScreen";
import NewPasswordScreen from "../Screens/OtpScreen/NewPasswordScreen";
import SignUpOtpScreen from "../Screens/SighUp/SignUpOtpScreen";
import FavoriteStack from "./FavoriteStack";
import AddCustomer, { AddtoCart, OrderDetails } from "../Screens";
import demoScreen from "../Screens/Customer/demoScreen";
import Routes from "./Routes";
import FinalOrder from "../Screens/Order/FinalOrder"
import PaymentScreen from "../Screens/Order/PaymentScreen";

export default function (Stack) {

    const getMyObject = async () => {
        let auth = await AsyncStorage.getItem("tokenresult")
        if (auth) {
            navigation.navigate(navigationStrings.Routes)
        } else {
            navigation.navigate(navigationStrings.LOGIN)
        }
    }

    useEffect(() => {
        getMyObject()
    }, [])

    return (
        <>
            <Stack.Screen
                name={navigationStrings.Routes}
                component={Routes}
            />
            <Stack.Screen
                name={navigationStrings.TABROUTES}
                component={TabRoutes}
            />

            <Stack.Screen
                name={navigationStrings.SIGNUP}
                component={SignUpScreen}
            />

            <Stack.Screen
                name={navigationStrings.FORGETPASSWORD}
                component={ForgetPassword}
            />
            <Stack.Screen
                name={navigationStrings.NEWPASSWORD}
                component={NewPasswordScreen}
            />
            <Stack.Screen
                name={navigationStrings.SIGNUPOTP}
                component={SignUpOtpScreen}
            />

            <Stack.Screen
                name={navigationStrings.SPLASH}
                component={Splash}
            />
            <Stack.Screen
                name={navigationStrings.OTPSCREEN}
                component={OTPScreen}
            />
            <Stack.Screen
                name={navigationStrings.FAVORITESTACK}
                component={FavoriteStack}
            />

            {/* Home screen pages  Start's Here */}

            <Stack.Screen
                name={navigationStrings.LEDGER_BALANCE}
                component={LedgerBalance}
            />
            <Stack.Screen
                name={navigationStrings.OUTSTANDINGPAYBLE}
                component={OutstandingPayble}
            />
            <Stack.Screen
                name={navigationStrings.TOTAL_SALE}
                component={TotalSale}
            />
            <Stack.Screen
                name={navigationStrings.TARGET}
                component={TargetScreen}
            />
            <Stack.Screen
                name={navigationStrings.ROUTEPLANS}
                component={RoutePlan}
            />
            <Stack.Screen
                name={navigationStrings.ADDCUSTOMER}
                component={AddCustomer}
            />
            <Stack.Screen
                name={navigationStrings.DEMOSCREEN}
                component={demoScreen}
            />
            <Stack.Screen
                name={navigationStrings.ADDTOCART}
                component={AddtoCart}
            />
            <Stack.Screen
                name={navigationStrings.FINALORDER}
                component={FinalOrder}
            />
            <Stack.Screen
                name={navigationStrings.PAYMENTS}
                component={PaymentScreen}
            />
            <Stack.Screen
                name={navigationStrings.ORDERDETAILS}
                component={OrderDetails}
            />
        </>
    )
}