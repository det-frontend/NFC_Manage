import {View, Text, TextInput} from 'react-native';
import React from 'react';
import tw from 'twrnc';
const Input = ({placeholder, onChangeText, onBlur, value}) => {
  return (
    <View
      style={tw`bg-[#4C4B50] rounded-md h-15 w-full overflow-hidden flex-row items-center`}>
      {/* <Text style={tw`text-[#C9C8CD] text-xl`}>Input</Text> */}
      <TextInput
        style={tw` w-full text-[#C9C8CD] text-xl jdk p-4`}
        onChangeText={onChangeText}
        value={value}
        onBlur={onBlur}
        placeholderTextColor={'#C9C8CD70'}
        placeholder={placeholder}
        // keyboardType="numeric"
      />
    </View>
  );
};

export default Input;
