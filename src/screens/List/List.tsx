import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import ListModel from '../../components/ListModel';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {deleteMarker} from '../../redux/slices/mapSlices';

const List = (props: any) => {
  const {navigation} = props;
  const [data, setData] = React.useState<[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    AsyncStorage.getItem('MARKERS').then(res => {
      if (res) {
        const data = JSON.parse(res);
        const filter = data.filter((item: any) => item.id !== 1);
        setData(filter);
        // console.log('filter', data);
      } else {
        console.log('no data');
      }
    });
  }, [data, setData, dispatch]);
  return (
    <View style={{paddingHorizontal: 8}}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={{paddingVertical: 1}} key={item.id}>
            <ListModel
              title={item.location}
              latitude={'latitude'}
              longitude={'longitude'}
              coordinate1={item.latitude}
              coordinate2={item.longitude}
              edit={() => navigation.navigate('Update', {marker: item})}
              del={() => dispatch(deleteMarker(item.id))}
            />
          </View>
        )}
      />
    </View>
  );
};

export default List;
