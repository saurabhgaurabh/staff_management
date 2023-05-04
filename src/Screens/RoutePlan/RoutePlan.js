import { StyleSheet, View, Text, Button, TouchableOpacity, PermissionsAndroid, Platform, SafeAreaView, StatusBar } from 'react-native';
import React from 'react'
import Geolocation, { PositionError } from 'react-native-geolocation-service';
import { useState, useEffect } from 'react';
import Geocoder from 'react-native-geocoding';
// import Geocoder from 'react-native-geocoder';
import axios from 'axios';
// import MapView from 'react-native-maps';
// import * as Location from "expo-location";
import MapView from 'react-native-maps';







// const requestLocationPermission = async () => {
//   try {

//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       {
//         title: 'Geolocation Permission',
//         message: 'Can we access your location?',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },
//     );
//     console.log('granted', granted);
//     if (granted === 'granted') {
//       console.log('You can use Geolocation');
//       return true;
//     } else {
//       console.log('You cannot use Geolocation');
//       return false;
//     }
//   } catch (err) {
//     return false;
//   }
// };

const RoutePlan = () => {
  const [currlocation,setCurrlocation] = useState({});
  const [currlocationjs,setCurrlocationjs] = useState({});

  useEffect(() => {
    // CheckIfLocationEnabled();
    // getaddLocation();
    // getaddLocation();
  }, []);

  // const [location, setLocation] = useState(false);

  // const getLocation = () => {
  //   const result = requestLocationPermission();
  //   console.log(result," result ...................");

  //   result.then(res => {
  //     console.log('res is:', res);
  //     if (res) {
  //       Geolocation.getCurrentPosition(
  //         position => {
  //           console.log(position, "position");
  //           // console.log(position.coords.latitude, " latidute from position"); //working
  //           const address = position.coords;
  //           console.log(address, ",,,,,,,,,,,,,,address,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");
            
  //           if(position.coords) {
  //             console.log(position.coords,"position. testing...............");
  //             const { latitude, longitude } = position.coords;
  //             let resp = Location.reverseGeocodeAsync({
  //               latitude,
  //               longitude
  //             });
  //             console.log(resp," response from location\\\\\\\\\\\\\\\\\\\\");
             
  //           }

  //           setLocation(position);
  //           console.log(location," location for demo")
  //         },
  //         error => {
  //           // See error code charts below.
  //           console.log(error.code, error.message);
  //           setLocation(false);
  //         },
  //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
  //       );
  //     }
  //   });
  //   console.log(location);
  // };

  // const API_KEY = 'AIzaSyCj9tqBveV4evbTf_WnekkzOdFhlp1_0GE';
  // Geocoder.init('AIzaSyCj9tqBveV4evbTf_WnekkzOdFhlp1_0GE'); // use a valid API key

const getaddLocation=async()=>{
  const location = await fetch('https://ipapi.co/json');
  setCurrlocation(location.data);
  console.log(location," location...........");
}

  // const getlocation=()=>{
  //   navigator.geolocation.getCurrentPosition((Position)=>{
  //     const {latitude,longitude} = Position.coords;
  //     setCurrlocationjs({latitude,longitude});
  //   })
  // }


  return (
    <View style={styles.container}>
      {/* <View
        style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
        <Button title="Get Location" onPress={getLocation} />
      </View>
      <Text>Latitude: {location ? location.coords.latitude : null}</Text>
      <Text>Longitude: {location ? location.coords.longitude : null}</Text> */}


      <View
        style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
        <Button title="Send Location"
          // onPress={getlocation}   
          />
      </View>
      <View
        style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
        <Button title="Send Location"
          onPress={getaddLocation}   />
      </View>

    </View>
  );
}


const styles = StyleSheet.create({})
export default RoutePlan