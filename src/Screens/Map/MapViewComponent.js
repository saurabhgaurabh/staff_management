// Import the necessary modules from React Native
import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

// Create a functional component called MapView
const MapViewComponent = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default MapViewComponent;
