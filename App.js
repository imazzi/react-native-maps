import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker } from "react-native-maps";
import * as SQLite from 'expo-sqlite';

export default function App() {

  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [coords, setCoord] = useState([
    {  latitude: 18.171579519562194, longitude: -11.72067604959011  },
    { latitude: 29.653282097453683, longitude: 0.1313169300556183 },
    { latitude: 31.783219103248882, longitude: -9.042389765381813 },
  ])
 

  const addNewMarker = (event) => {
    const newCoord = [...coords, event.nativeEvent.coordinate];
    setCoord(newCoord);
  }
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        onRegionChangeComplete={(region) => setRegion(region)}
        onPress={addNewMarker}

      >
   
        {coords.map((item, index) => (
          <Marker key={index} title="Test" coordinate={item} />
        ))}
        
      </MapView>
      <Text style={styles.text}>Current latitude: {region.latitude}</Text>
      <Text style={styles.text}>Current longitude: {region.longitude}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});