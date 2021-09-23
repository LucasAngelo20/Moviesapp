import React from 'react';
import {StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './Routes/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Routes />
    </NavigationContainer>
  );
}
