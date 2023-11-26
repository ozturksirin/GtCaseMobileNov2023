import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const mapSlices = createSlice({
  name: 'mapSlices',
  initialState: {
    markers: [
      {
        id: 1,
        location: '',
        latitude: 0,
        longitude: 0,
      },
    ],
  },
  reducers: {
    setMarker: (state, action) => {
      state.markers.push(action.payload);
      AsyncStorage.setItem('MARKERS', JSON.stringify(state.markers));
    },

    deleteMarker: (state, action) => {
      state.markers = state.markers.filter(
        marker => marker.id !== action.payload,
      );
      AsyncStorage.setItem('MARKERS', JSON.stringify(state.markers));
    },

    updateMarker: (state, action) => {
      state.markers = state.markers.map(marker => {
        if (marker.id === action.payload.id) {
          return action.payload;
        }
        return marker;
      });
      AsyncStorage.setItem('MARKERS', JSON.stringify(state.markers));
    },
  },
});

export const { setMarker, deleteMarker, updateMarker } = mapSlices.actions;
export default mapSlices.reducer;
