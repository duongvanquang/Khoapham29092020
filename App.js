import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Form from './src/components/Form';
import Filter from './src/components/Filter';
import Box from './src/components/Box';
import Word from './src/components/Word';
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
          <MainScreen />
        </Provider>
      </SafeAreaView>
    );
  }
}