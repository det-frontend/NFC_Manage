import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {Screen} from '../../../components/Screen';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import ToastMsg from '../../../components/ToastMsg';

const Success = ({route, navigation}) => {
  console.log(ToastMsg);
  const toastConfig = {
    /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
    success: props => (
      <BaseToast
        {...props}
        style={{borderLeftColor: '#52a950'}}
        contentContainerStyle={{paddingHorizontal: 15}}
        text1Style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#52a950',
        }}
      />
    ),
    /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
    error: props => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 17,
        }}
        text2Style={{
          fontSize: 15,
        }}
      />
    ),
    /*
    Or create a completely new type - `tomatoToast`,
    building the layout from scratch.

    I can consume any custom `props` I want.
    They will be passed when calling the `show` method (see below)
  */
    tomatoToast: ({text1, props}) => (
      <View style={{height: 60, width: '100%', backgroundColor: 'tomato'}}>
        <Text>{text1}</Text>
        <Text>{props.uuid}</Text>
      </View>
    ),
  };
  console.log(route.params);
  const {car_no, name, cardId, points, vehicle_type} = route.params;

  return (
    <>
      <Screen>
        <Text style={tw`text-[#52a950] mx-auto text-2xl my-4`}>
          Created Successfully !
        </Text>
        <View
          style={tw`flex-row mb-3 rounded-xl px-5 items-center justify-center bg-gray-300 h-[220px] w-[94%] mx-auto`}>
          <View style={tw` w-[30%] flex gap-4 `}>
            <Text style={tw`text-xl ml-auto pr-5 text-gray-700 font-semibold`}>
              NFC_Id:
            </Text>
            <Text style={tw`text-xl ml-auto pr-5 text-gray-700 font-semibold`}>
              Name:
            </Text>
            <Text style={tw`text-xl ml-auto pr-5 text-gray-700 font-semibold`}>
              Vehicle:
            </Text>
            <Text style={tw`text-xl ml-auto pr-5 text-gray-700 font-semibold`}>
              Number:
            </Text>
          </View>
          <View style={tw`flex gap-4   w-[70%]  `}>
            <Text style={tw`text-xl text-gray-700 `}>{cardId}</Text>
            <Text style={tw`text-xl text-gray-700 `}>{name}</Text>
            <Text style={tw`text-xl text-gray-700 `}>{vehicle_type}</Text>
            <Text style={tw`text-xl text-gray-700 `}>{car_no}</Text>
          </View>
        </View>
        <View style={tw`flex-row w-[95%] mx-auto mt-5 justify-between`}>
          <TouchableOpacity
            onPress={() => navigation.navigate('home')}
            style={tw`p-2 px-10 w-[48%] rounded-lg flex items-center justify-center py-4 border-2 border-gray-500 `}>
            <Text style={tw`text-gray-400  text-center text-xl`}>
              Back to Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.navigate('mComfirm')}
            onPress={() => navigation.navigate('mCreate')}
            title="Submit"
            style={tw`p-2 px-10 w-[48%] rounded-lg flex bg-[#52a950] items-center justify-center py-4 border-2 border-[#52a950] `}>
            <Text style={tw`text-gray-800  text-center text-xl`}>
              Add Another
            </Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity
          // onPress={() => navigation.navigate('mComfirm')}
          // onPress={ToastMsg('success')}
          style={tw`p-2 px-10 w-[48%] rounded-lg flex bg-[#52a950] items-center justify-center py-4 border-2 border-[#52a950] `}>
          <Text style={tw`text-gray-800  text-center text-xl`}>
            Add Another
          </Text>
        </TouchableOpacity> */}
        <Toast config={toastConfig} />
      </Screen>
    </>
  );
};

export default Success;
