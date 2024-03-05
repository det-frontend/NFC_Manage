import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import color from '../config/color';
import { Login } from '../screens/Login';
const Stack = createStackNavigator();

export const Welcome = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 80,
          backgroundColor: color.tabBg,
        },
        headerTintColor: color.light,
      }}>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerStyle: {
            backgroundColor: color.tabBg,
          },
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
