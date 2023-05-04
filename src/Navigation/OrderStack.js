import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddtoCart, FavoriteScreen, FinalOrder, OrderDetails, OrderScreen, PaymentScreen } from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import { TouchableOpacity, Image } from 'react-native';
import imagePath from '../constants/imagePath';
// import { Image } from 'react-native-svg';

const Stack = createNativeStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true, headerStyle: { } }} >
      <Stack.Screen name={navigationStrings.ORDER} component={OrderScreen}
        options={({ navigation }) => ({
          headerTitleAlign: 'center',
          title: 'Order',
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
      <Stack.Screen name={navigationStrings.ADDTOCART} component={AddtoCart} options={{title: 'Add To Cart'}}/>
      <Stack.Screen name={navigationStrings.FINALORDER} component={FinalOrder} options={{title: 'Place Order'}}/>
      <Stack.Screen name={navigationStrings.ORDERDETAILS} component={OrderDetails} options={{title: 'Checkout'}}/>
      <Stack.Screen name={navigationStrings.PAYMENTS} component={PaymentScreen} options={{title: 'Payment'}}/>


    </Stack.Navigator>
  )
}

export default OrderStack

const styles = StyleSheet.create({})