import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type ListModelProps = {
  navigation?: any;
  title?: string;
  latitude?: string;
  longitude?: string;
  coordinate1?: number;
  coordinate2: number;
  edit?: () => void;
  del?: () => void;
};

const ListModel = (props: ListModelProps) => {
  const {title, latitude, longitude, coordinate1, coordinate2, edit, del} =
    props;
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.countryName}>{title}</Text>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.latiude}>{latitude}</Text>
            <Text style={styles.coordinate}>{coordinate1}</Text>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.longitude}>{longitude}</Text>
              <Text style={styles.coordinate}>{coordinate2}</Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.edit} onPress={edit}>
            <Text>EDİT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.delete} onPress={del}>
            <Text>DELETE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ListModel;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#242324',
    padding: 10,
  },
  countryName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  latiude: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  longitude: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  coordinate: {
    color: '#9f9e9f',
    fontSize: 12,
    fontWeight: 'normal',
    marginLeft: 5,
  },
  delete: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  edit: {
    backgroundColor: '#037302',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
});
