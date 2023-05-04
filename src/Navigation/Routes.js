import React, { useEffect } from 'react';
import CustomDrawer from '../Components/CustomeDrawer';
import navigationStrings from '../constants/navigationStrings';
import { Image} from 'react-native';
import imagePath from '../constants/imagePath';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabRoutes from './TabRouts';
// import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



function Routes({ navigation }) {
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();
  const { loginData } = useSelector(state => state.login)



  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      
      <Drawer.Screen
        name={navigationStrings.TABROUTES}
        component={TabRoutes}
        options={{
          title: "Dashboard",
          drawerIcon: () => (
            <Image
              source={imagePath.icHome}
              style={{ height: 20, width: 20 }}
            />
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <Image style={{ tintColor: focused ? 'black' : '#3EB489' }} source={imagePath.icHome} />)
          },
        }}
      />
     
    </Drawer.Navigator>
  )
}

export default Routes