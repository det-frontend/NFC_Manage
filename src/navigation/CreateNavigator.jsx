import {View, Text} from 'react-native';
import React from 'react';
import Member from './Member';
import Staff from './Staff';

const CreateNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 80,
          backgroundColor: color.bottomActiveNavigation,
        },
        headerTintColor: color.light,
      }}>
      <Stack.Screen
        name="memberCreate"
        component={Member}
        options={{
          headerStyle: {
            backgroundColor: color.bottomActiveNavigation,
          },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="staffCreate"
        component={Staff}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: color.bottomActiveNavigation,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default CreateNavigator;
