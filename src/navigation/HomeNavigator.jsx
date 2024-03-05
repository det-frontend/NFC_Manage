import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Member from '../screens/Member';
import Staff from '../screens/Staff';
import tw from 'twrnc';
import color from '../config/color';
import Create from '../screens/Create';
import CreateBtn from '../components/CreateBtn';
import {useFocusEffect} from '@react-navigation/native';
import DetailNavigator from './DetailNavigator';
import SDetailNavigator from './SDetailNavigator';
import authStorage from '../auth/storage';
import AuthContext from '../auth/context';

const HomeNavigator = () => {
  const authContext = useContext(AuthContext);
  const [showAlert, setShowAlert] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      setShowAlert(false);
      console.log('callback');
      // Reset focus when returning to the nested Tab Navigator
      // You might need to replace 'home' with the correct screen name
    }, []),
  );

  const logoutHadler = () => {
    authContext.setUser('');
    authStorage.removeToken();
  };

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
        tabStyle: {
          width: 'auto',
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
        name="Member Card"
        component={DetailNavigator}
        options={{
          headerStyle: {
            backgroundColor: color.tabBg,
            height: 70,
            elevation: 0,
          },
          headerRight: () => (
            <View
              style={tw`mb-7 gap-6 mt-5 mr-2 flex flex-row
                  justify-center items-center`}>
              <TouchableOpacity onPress={logoutHadler}>
                <View
                  style={tw`bg-[#eeee] flex p-1 mr-2  flex-row rounded-[200px] items-center justify-center`}>
                  <Image
                    source={require('../assets/logout.png')}
                    resizeMode="contain"
                    style={{
                      height: 35,
                      width: 35,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          ),

          headerTitleAlign: 'left',
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
          tabBarButton: _ => (
            <CreateBtn showAlert={showAlert} setShowAlert={setShowAlert} />
          ),
          // tabBarButton: props => <CreateButton {...props} />,
        }}
        name="create"
        component={Create}
      />
      <Tab.Screen
        options={{
          title: 'Staff Card',
          headerStyle: {
            backgroundColor: color.tabBg,
            height: 70,
            elevation: 0,
          },
          headerRight: () => (
            <View
              style={tw`mb-7 gap-6 mt-5 mr-2 flex flex-row
                  justify-center items-center`}>
              <TouchableOpacity onPress={logoutHadler}>
                <View
                  style={tw`bg-[#eeee] flex p-1 mr-2  flex-row rounded-[200px] items-center justify-center`}>
                  <Image
                    source={require('../assets/logout.png')}
                    resizeMode="contain"
                    style={{
                      height: 35,
                      width: 35,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          ),
          headerTitleAlign: 'left',
          headerTintColor: color.blue,
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
        component={SDetailNavigator}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
