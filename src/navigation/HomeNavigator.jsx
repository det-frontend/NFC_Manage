import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Member from '../screens/Member';
import Staff from '../screens/Staff';
import tw from 'twrnc';
import color from '../config/color';
import Create from '../screens/Create';
import CreateBtn from '../components/CreateBtn';

const HomeNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: color.tabBg,
          borderRadius: 15,
          height: 90,
        },
        tabBarShowLabel: false,
        // tabBarStyle: {backgroundColor: '#2d3038', height: 85},
        tabBarActiveTintColor: color.activeColor,
        tabBarLabelStyle: {
          fontSize: 14,
          marginBottom: 15,
          fontFamily: 'Poppins_400Regular',
        },
      }}>
      <Tab.Screen
        options={{
          title: 'Member Card Management',
          headerStyle: {
            backgroundColor: color.tabBg,
            height: 70,
            elevation: 0,
          },

          headerTitleAlign: 'center',
          headerTintColor: color.activeColor,
          headerTitleStyle: {
            letterSpacing: 2,
            fontSize: 25,
            fontWeight: 'bold',
          },
          tabBarIcon: ({focused}) => (
            <View style={tw`items-center justify-center`}>
              <Image
                source={require('../assets/team.png')}
                resizeMode="contain"
                style={{
                  height: 35,
                  width: 35,
                  tintColor: focused ? '#52a950' : '#95979b',
                }}
              />

              <Text
                style={tw`text-gray-300 font-semibold tracking-0.5 ${
                  focused ? 'text-[#52a950]' : 'text-[#95979b]'
                }`}>
                MEMBER
              </Text>
            </View>
          ),
        }}
        name="member"
        component={Member}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/plus.png')}
              resizeMode="contain"
              style={{
                height: 35,
                width: 35,
                tintColor: focused ? '#52a950' : '#eeeeee',
              }}
            />
          ),
          tabBarButton: _ => <CreateBtn  />,
          // tabBarButton: props => <CreateButton {...props} />,
        }}
        name="create"
        component={Create}
      />
      <Tab.Screen
        options={{
          title: 'Staff Card Management',
          headerStyle: {
            elevation: 0,
            backgroundColor: color.tabBg,
            height: 70,
          },
          headerTitleAlign: 'center',
          headerTintColor: color.activeColor,
          headerTitleStyle: {
            letterSpacing: 2,
            fontSize: 25,
            fontWeight: 'bold',
          },
          tabBarIcon: ({focused}) => (
            <View style={tw`items-center justify-center`}>
              <Image
                source={require('../assets/team-management.png')}
                resizeMode="contain"
                style={{
                  height: 35,
                  width: 35,
                  tintColor: focused ? '#52a950' : '#95979b',
                }}
              />

              <Text
                style={tw`text-gray-300 font-semibold tracking-0.5 ${
                  focused ? 'text-[#52a950]' : 'text-[#95979b]'
                }`}>
                STAFF
              </Text>
            </View>
          ),
        }}
        name="staff"
        component={Staff}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
