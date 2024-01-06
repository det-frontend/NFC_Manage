import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import color from '../config/color';
import Create from '../screens/Staff/form/Create';
import Comfirm from '../screens/Staff/form/Comfirm';
import Success from '../screens/Staff/form/Success';
const Staff = () => {
  const Stack = createStackNavigator();
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
        name="sCreate"
        component={Create}
        options={{
          headerStyle: {
            backgroundColor: color.tabBg,
          },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sComfirm"
        component={Comfirm}
        options={{
          headerStyle: {
            backgroundColor: color.tabBg,
          },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sSuccess"
        component={Success}
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

export default Staff;
