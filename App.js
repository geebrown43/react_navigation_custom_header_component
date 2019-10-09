/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer} from 'react-navigation'
import AppNav from './src'

const AppNavigator = createAppContainer(AppNav);


const App: () => React$Node = () => {
  return <AppNavigator/> ;
};


export default App;
