import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {store} from './redux/stores';
import Router from './router/Router';

const App = () => {
  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <Provider store={store}>
          <Router />
        </Provider>
      </GestureHandlerRootView>
    </>
  );
};

export default App;
