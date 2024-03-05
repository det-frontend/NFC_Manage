import {View, Text, TextInput} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const NumberInput = ({placeholder, onChangeText, onBlur, value}) => {
    return (
        <View
            style={tw`bg-[#4C4B50] rounded-md h-15 w-full overflow-hidden flex-row items-center`}>
            {/* <Text style={tw`text-[#C9C8CD] text-xl`}>Input</Text> */}
            <TextInput
                type="number"
                keyboardType="numeric"
                style={tw` w-full text-[#C9C8CD] text-xl jdk p-4`}
                onChangeText={onChangeText}
                value={parseInt(value)}
                onBlur={onBlur}
                placeholderTextColor={'#C9C8CD70'}
                placeholder={placeholder}
                // keyboardType="numeric"
            />
        </View>
    );
};

export default NumberInput;
