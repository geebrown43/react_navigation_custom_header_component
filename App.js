import React from 'react';
import { createAppContainer } from 'react-navigation'
import AppNav from './src'

const AppNavigator = createAppContainer(AppNav);


const App = () => <AppNavigator/> ;



export default App;
