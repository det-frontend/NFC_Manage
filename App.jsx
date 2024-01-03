import {View, Text} from 'react-native';
import React from 'react';
import HomeNavigator from './src/navigation/HomeNavigator';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import StackNavigator from './src/navigation/StackNavigator';
const App = () => {
  return (
    <NavigationContainer>
      {/* <HomeNavigator /> */}
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
