import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
const Scan = ({text, onPress,color}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`bg-[${color}] h-32 w-32  border-[10px] border-white rounded-full flex items-center justify-center`}>
      <Text style={tw`text-xl text-white font-semibold`}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Scan;
