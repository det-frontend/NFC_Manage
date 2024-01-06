import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import color from '../config/color';
import MemberDetail from '../components/MemberDetail';
import MemberEdit from '../components/MemberEdit';
import Member from '../screens/Member';

const DetailNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="mmember"
        component={Member}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="mdetail"
        component={MemberDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="medit"
        component={MemberEdit}
      />

      {/* <Stack.Screen name="staffCreate" component={Staff} /> */}
    </Stack.Navigator>
  );
};

export default DetailNavigator;
