import React, {useState} from 'react';
import {Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import InputModel from '../../components/InputModel';
import ButtonModel from '../../components/ButtonModel';
import {useDispatch} from 'react-redux';
import {updateMarker} from '../../redux/slices/mapSlices';
type NewMarker = {
  latitude: number;
  longitude: number;
};

const Update = (props: any) => {
  const {
    navigation,
    route: {
      params: {marker},
    },
  } = props;
  const dispatch = useDispatch();
  console.log('marker', marker);

  const [newMarker, setNewMarker] = useState<NewMarker | null>(null);
  const [location, setLocation] = useState<string>('');
  const [latitude, setLatitude] = useState<number | string>(
    marker.latitude.toString(),
  );
  const [longitude, setLongitude] = useState<number | string>(
    marker.longitude.toString(),
  );

  const onNewMarker = (event: any) => {
    const {latitude, longitude} = event.nativeEvent.coordinate;
    setNewMarker({
      latitude,
      longitude,
    });
  };

  const onUpdate = () => {
    dispatch(
      updateMarker({
        id: marker.id,
        location: marker.location,
        latitude: newMarker?.latitude,
        longitude: newMarker?.longitude,
      }),
    );
    navigation.replace('Map');
    console.log('newMarker', newMarker);
  };

  return (
    <>
      <View style={{paddingHorizontal: 8, flex: 1}}>
        <View style={{flex: 1}}>
          <MapView
            style={{flex: 1}}
            initialRegion={{
              latitude: marker.latitude,
              longitude: marker.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            zoomEnabled={true}
            onPress={event => onNewMarker(event)}>
            <Marker
              {...marker}
              draggable
              onDragEnd={onNewMarker}
              coordinate={
                newMarker === null
                  ? {
                      latitude: marker.latitude,
                      longitude: marker.longitude,
                    }
                  : {
                      latitude: newMarker.latitude,
                      longitude: newMarker.longitude,
                    }
              }
            />
          </MapView>
        </View>
        <View style={{flex: 2}}>
          <InputModel
            placeholder="Location"
            value={location}
            onChangeText={setLocation}
          />
          <InputModel value={latitude.toString()} />
          <InputModel value={longitude.toString()} />
          <ButtonModel title="Update" onPress={() => onUpdate()} />
        </View>
      </View>
    </>
  );
};

export default Update;
