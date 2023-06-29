import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import messaging  from '@react-native-firebase/messaging';

const Notification = () => {

    useEffect(()=>{
        getDeviceToken();
    },[]);

    useEffect(() => {
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        alert('A new FCM message arrived from forground mode!', JSON.stringify(remoteMessage));
      });
  
      return unsubscribe;
    }, []);

    const getDeviceToken = async()=>{
        let token = await messaging().getToken();
        console.log(token,"token") 
    }


  return (
    <View>
      <Text>Notification</Text>
    </View>
  )
}

export default Notification