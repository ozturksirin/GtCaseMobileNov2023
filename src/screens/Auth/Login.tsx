import React, {useEffect} from 'react';
import {View} from 'react-native';
import ButtonModel from '../../components/ButtonModel';
import InputModel from '../../components/InputModel';
import {Formik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {authCheck, save} from '../../redux/slices/authSlices';
interface LoginForms {
  name: string;
  surname: string;
  nameErr: string;
  surnameErr: string;
}

const Login: React.FC = props => {
  const {navigation} = props as any;
  const initialValues: LoginForms = {
    name: '',
    surname: '',
    nameErr: '',
    surnameErr: '',
  };
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem('USER').then(res => {
      if (res) {
        const data = JSON.parse(res);
        dispatch(
          save({
            name: data.name,
            surname: data.surname,
          }),
        );
        navigation.navigate('Map');
      } else {
        console.log('no data');
      }
    });
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        if (values.name === '') {
          actions.setFieldValue('nameErr', 'Please enter your name');
          return;
        } else {
          actions.setFieldValue('nameErr', '');
        }
        if (values.surname === '') {
          actions.setFieldValue('surnameErr', 'Please enter your surname');
          return;
        } else {
          actions.setFieldValue('surnameErr', '');
          await AsyncStorage.setItem(
            'USER',
            JSON.stringify({name: values.name, surname: values.surname}),
          );
          dispatch(save({name: values.name, surname: values.surname}));
          dispatch(authCheck(true));
          navigation.navigate('Map');
        }
        console.log(values);
      }}>
      {({handleChange, handleSubmit, values, setFieldValue}) => (
        <View style={{paddingHorizontal: 12, paddingTop: 20}}>
          <InputModel
            placeholder={'name'}
            value={values.name}
            onChangeText={text => {
              handleChange('name')(text);
              setFieldValue('nameErr', '');
            }}
            err={values.nameErr}
          />
          <InputModel
            placeholder={'surname'}
            value={values.surname}
            onChangeText={text => {
              handleChange('surname')(text);
              setFieldValue('surnameErr', '');
            }}
            err={values.surnameErr}
          />
          <ButtonModel title="Login" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default Login;
