import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import HomeNavigator from './HomeNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import Member from './Member';
import Staff from './Staff';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const StackNavigator = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      // Reset focus when returning to the nested Tab Navigator
      // You might need to replace 'home' with the correct screen name
      navigation.navigate('home');
    }, []),
  );
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="memberCreate" component={Member} />
      <Stack.Screen name="staffCreate" component={Staff} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
