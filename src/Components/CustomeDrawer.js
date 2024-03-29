import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Image, View, ToastAndroid } from 'react-native';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { loginFetchDataForProfile, profileUpdate } from '../redux/MyLoginSlice';
import styles from '../Screens/MainStyle';
import 'react-native-gesture-handler';


function CustomDrawer(props) {
    const { navigation } = props
    const dispatch = useDispatch()

    const getMyObjectRemove = async () => {
        dispatch(loginFetchDataForProfile(''))
        let dd = await AsyncStorage.removeItem('tokenresult')
        ToastAndroid.show('User Logged Out Successfully', ToastAndroid.SHORT);
        navigation.navigate(dd ? navigationStrings.HOME : navigationStrings.LOGIN);
    }

    return (
        <DrawerContentScrollView style={{}} {...props}>
            <View style={{
                backgroundColor: '#0288D1',
                alignItems: 'center',
            }}>
                <View style={{ paddingVertical: 15 }}>
                    <Image style={{
                        height: 80,
                        width: 150
                    }} source={imagePath.icDrawer_logo} />
                </View>
            </View>

            <DrawerItemList {...props} />
            <View style={styles.drawercontentStyle} >
                <View >
                    <DrawerItem
                        label="Log Out"
                        onPress={getMyObjectRemove}
                        icon={() => <Image style={{ height: 25.5, width: 26.9 }} source={imagePath.ingotoLogin} />}
                        labelStyle={styles.lblCssDrawer}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    );
}

export default CustomDrawer;