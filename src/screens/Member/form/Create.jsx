import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Screen} from '../../../components/Screen';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
const Create = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <TouchableOpacity
        onPress={() => navigation.navigate('home')}
        style={tw`p-2 px-10 mt-6 rounded-lg flex items-center justify-center py-4 border-2 border-gray-500 `}>
        <Text style={tw`text-gray-400  text-center text-xl`}>Back</Text>
      </TouchableOpacity>
    </Screen>
  );
};

export default Create;
