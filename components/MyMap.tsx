import React from 'react';
import MapView , {Marker} from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { View  } from './Themed';

export default function MyMap() {
  return (
    <View style={{zIndex:-1}}>
    <MapView 
    style={styles.map} 
    // zoomEnabled={false}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    >

      <Marker 
      title='Your Loction'
      coordinate={{
          latitude: 200,
          longitude: 200
        }}/>
    </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
