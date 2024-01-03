import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import color from '../config/color';
import Create from '../screens/Member/form/Create';
import Comfirm from '../screens/Member/form/Comfirm';
import Success from '../screens/Member/form/Success';
const Member = () => {
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
        name="mCreate"
        component={Create}
        options={{
          headerStyle: {
            backgroundColor: color.tabBg,
          },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="mComfirm"
        component={Comfirm}
        options={{
          headerStyle: {
            backgroundColor: color.tabBg,
          },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="mSuccess"
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

export default Member;
