import { StyleSheet, View, Text, Button, TouchableOpacity, PermissionsAndroid, Platform, SafeAreaView, StatusBar } from 'react-native';
import React from 'react'
import Geolocation from 'react-native-geolocation-service';
import { useState, useEffect } from 'react';
import Geocoder from 'react-native-geocoding';
// import Geocoder from 'react-native-geocoder';
import axios from 'axios';
import MapView from 'react-native-maps';


const requestLocationPermission = async () => {

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};

const DemoScreen = () => {

  const [location, setLocation] = useState(false);

  const getLocation = async () => {
    const result = requestLocationPermission();
    console.log(result, " result ...................");

    result.then(res => {
      console.log('res is:.........', res);
      if (res) {
        Geolocation.getCurrentPosition(
          async position => {
            console.log(position, "position");
            console.log('....result', position.coords);
            // console.log(position.coords.latitude, " latidute from position"); //working
            // const address = position.coords;    
            // console.log(address, ",,,,,,,,,,,,,,address,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");

            if (position.coords) {
              console.log(position.coords, "position. testing...............");
              // console.log(position.coords.altitudeAccuracy,"position. testing...............");
              const { latitude, longitude, altitude } = position.coords;
              console.log("latitude, longitudelatitude, longitude", latitude, longitude, altitude)
              let resp = Location.reverseGeocodeAsync({
                latitude,
                longitude
              });

              console.log(resp, " response from location\\\\\\\\\\\\\\\\\\\\");
              console.log(position.coords, "............ position ................");
              console.log(Location.LocationOptions, "jjjjjjjjjjjjjjjjjjjjjjjjjj");
              for (let item of resp) {
                let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
                setDisplayCurrentAddress(address);
              }
            }
            Geocoder.from(position.coords.latitude, position.coords.longitude)
              .then(json => {
                console.log(json);
                var addressComponent = json.results[0].address_components;
                console.log(addressComponent, " adress,,,,,,,,,,,,")
              })
            setLocation(position);
            console.log(position.coords.LocationAccuracy, " location for demo")
          },

          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          { enableHighAccuracy: true, showLocationDialog: true, forceRequestLocation: true, timeout: 15000, maximumAge: 10000 },
        );
      }
    });
    console.log(location);
  };


  const checkaddress = () => {
    axios.get('https://api.geoapify.com/v1/geocode/reverse?lat=28.514106&lon=77.3774085&apiKey=0ade09a21c95471fb5f6bf1dd865d4fe').then((response) => {
      console.log(response.data.features[0], "response from axios");
      console.log(response.data.features[0].geometry, "geometry from axios");
      console.log(response.data.features[0].properties, "properties from axios");
      console.log(response.data.features[0].properties.address_line1, "address_line1 from axios");
    })
  }

  const GetCurrentLocation = async () => {
    let { coords } = await Location.getCurrentPositionAsync();
    console.log(coords, " .................");
    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      });
      console.log(response, " response of the address array................");
      console.log(response[0].city, " city ...");
      console.log(response[0].name, " city name ...");
      for (let item of response) {
        let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
        setDisplayCurrentAddress(address);
      }
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
        <Button title="Get Location" onPress={getLocation} />
      </View>
      <Text>Latitude: {location ? location.coords.latitude : null}</Text>
      <Text>Longitude: {location ? location.coords.longitude : null}</Text>
      <View
        style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
        <Button title="Send Location"
          onPress={checkaddress}
        // onPress={MapScreen}
        />
      </View>
      <View
        style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
        <Button title="Send address"
          onPress={GetCurrentLocation}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({})
// export default FavoriteScreen
export default DemoScreen

// const styles = StyleSheet.create({})