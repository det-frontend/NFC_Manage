import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import tw from 'twrnc';
// import color from '../config/color';

export const CustomButton = ({onPress, title}) => (
  <TouchableOpacity
    onPress={onPress}
    style={tw`bg-[#fafafa]  p-4 rounded mt-4`}>
    <Text style={tw`text-white text-center text-lg uppercase`}>{title}</Text>
  </TouchableOpacity>
);
