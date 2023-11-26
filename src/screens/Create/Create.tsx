import React from 'react';
import {View} from 'react-native';
import InputModel from '../../components/InputModel';
import ButtonModel from '../../components/ButtonModel';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import {setMarker} from '../../redux/slices/mapSlices';

type Forms = {
  location: string;
  err: string;
  latitude?: number | string;
  longitude?: number | string;
};

const Create = (props: any) => {
  const {
    navigation,
    route: {
      params: {marker},
    },
  } = props;
  console.log('item', marker);
  const dispatch = useDispatch();
  const initialValues: Forms = {
    location: '',
    err: '',
    latitude: marker.latitude.toString(),
    longitude: marker.longitude.toString(),
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          if (values.location === '') {
            actions.setFieldValue('err', 'Please enter your location');
            return;
          } else {
            actions.setFieldValue('err', '');
            console.log('values', values);
            dispatch(
              setMarker({
                id: Math.floor(Math.random() * 1000),
                location: values.location,
                latitude: marker.latitude,
                longitude: marker.longitude,
              }),
            );
            navigation.navigate('Map');
          }
        }}>
        {({handleChange, handleSubmit, values}) => (
          <>
            <View style={{paddingHorizontal: 8}}>
              <InputModel
                placeholder="Location"
                value={values.location}
                onChangeText={handleChange('location')}
                err={values.err}
              />
              <InputModel value={marker.latitude.toString()} />
              <InputModel value={marker.longitude.toString()} />
              <ButtonModel title="Create" onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
    </>
  );
};

export default Create;
