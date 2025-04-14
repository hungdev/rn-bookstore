import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import Router from './src/navigation/Router';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
