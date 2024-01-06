import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';
import tw from 'twrnc';

const ToastMsg = () => {
  const showToast = type => {
    if (type == 'success') {
      Toast.show({
        type: 'success',
        text1: 'Created Successfully !',
      });
    } else if (type == 'error') {
      Toast.show({
        type: 'error',
        text1: 'Fail !',
      });
    } else {
      Toast.show({
        type: 'tomatoToast',
        text1: 'tomato !',
      });
    }
  };
  return (
    // <TouchableOpacity
    //   // onPress={() => navigation.navigate('mComfirm')}
    //   onPress={showToast}
    //   style={tw`p-2 px-10 w-[48%] rounded-lg flex bg-[#52a950] items-center justify-center py-4 border-2 border-[#52a950] `}>
    //   <Text style={tw`text-gray-800  text-center text-xl`}>toast</Text>
    // </TouchableOpacity>
    showToast(type)
  );
};

export default ToastMsg;
