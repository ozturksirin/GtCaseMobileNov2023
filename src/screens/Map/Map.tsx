import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import ButtonModel from '../../components/ButtonModel';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Marker = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

const Map = (props: any) => {
  const {navigation} = props;
  const [marker, setMarker] = useState<Marker | null>(null);

  const onMapPress = (e: any) => {
    const {latitude, longitude} = e.nativeEvent.coordinate;
    // console.log('latitude', latitude);
    // console.log('longitude', longitude);
    setMarker({
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  const [before, setBefore] = useState<any>(null);
  const activeMarker = useSelector((state: any) => state.map.markers);
  // console.log('activeMarker', activeMarker);

  useEffect(() => {
    AsyncStorage.getItem('MARKERS').then(res => {
      if (res) {
        const data = JSON.parse(res);
        setBefore(data);
      } else {
        console.log('no data');
      }
    });
    console.log('before', before);
  }, []);

  return (
    <>
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <MapView
            style={styles.mapStyle}
            initialRegion={
              marker === null
                ? {
                    latitude: 40.033846848031445,
                    longitude: 28.371568098664284,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }
                : {
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }
            }
            zoomEnabled={true}
            onPress={e => onMapPress(e)}>
            {before !== null
              ? before.map((item: any, index: any) => {
                  return (
                    <Marker
                      pinColor="blue"
                      key={index}
                      draggable
                      coordinate={{
                        latitude: item.latitude,
                        longitude: item.longitude,
                      }}
                    />
                  );
                })
              : null}

            {activeMarker !== null
              ? activeMarker.map((item: any, index: any) => {
                  return (
                    <Marker
                      pinColor="blue"
                      key={index}
                      draggable
                      coordinate={{
                        latitude: item.latitude,
                        longitude: item.longitude,
                      }}
                    />
                  );
                })
              : null}

            <Marker
              draggable
              coordinate={
                marker === null
                  ? {
                      latitude: 40.033846848031445,
                      longitude: 28.371568098664284,
                    }
                  : {
                      latitude: marker.latitude,
                      longitude: marker.longitude,
                    }
              }
            />
          </MapView>
        </View>
      </View>
      {marker === null ? null : (
        <View style={styles.btnArea}>
          <ButtonModel
            title={'Create Location'}
            onPress={() =>
              navigation.navigate('CreateLocation', {
                marker: marker,
              })
            }
          />
        </View>
      )}
    </>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  btnArea: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});
