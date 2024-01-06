import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import color from '../config/color';
import MemberDetail from '../components/MemberDetail';
import MemberEdit from '../components/MemberEdit';
import Member from '../screens/Member';
import Staff from '../screens/Staff';
import StaffDetail from '../components/StaffDetail';
import StaffEdit from '../components/StaffEdit';

const SDetailNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="sstaff"
        component={Staff}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="sdetail"
        component={StaffDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="sedit"
        component={StaffEdit}
      />

      {/* <Stack.Screen name="staffCreate" component={Staff} /> */}
    </Stack.Navigator>
  );
};

export default SDetailNavigator;
