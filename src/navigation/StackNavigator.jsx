import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import HomeNavigator from './HomeNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import Member from './Member';
import Staff from './Staff';
import color from '../config/color';

const StackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={{
          title: 'Back to home',
          headerStyle: {
            elevation: 0,
            backgroundColor: color.tabBg,
            height: 70,
          },
          headerTintColor: color.activeColor,
        }}
        name="memberCreate"
        component={Member}
      />
      <Stack.Screen
        options={{
          title: 'Back to home',
          headerStyle: {
            elevation: 0,
            backgroundColor: color.tabBg,
            height: 70,
          },
          headerTintColor: color.blue,
        }}
        name="staffCreate"
        component={Staff}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
