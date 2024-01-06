import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {Screen} from './Screen';
const MemberDetail = ({navigation, route}) => {
  const memberData = route.params;
  const {nfc_id, name, car_no, vehicle_type} = memberData;
  return (
    <Screen>
      <View style={tw`flex-1 items-center `}>
        <Text style={tw`text-[#52a950] mx-auto text-2xl mb-5`}>
          Member Information
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
            <Text style={tw`text-xl text-gray-700 `}>{nfc_id}</Text>
            <Text style={tw`text-xl text-gray-700 `}>{name}</Text>
            <Text style={tw`text-xl text-gray-700 `}>{vehicle_type}</Text>
            <Text style={tw`text-xl text-gray-700 `}>{car_no}</Text>
          </View>
        </View>
        <View style={tw`flex-row w-[95%] mx-auto mt-5 justify-between`}>
          <TouchableOpacity
            onPress={() => navigation.navigate('mmember')}
            style={tw`p-2 w-[48%] rounded-lg flex items-center justify-center py-4 border-2 border-gray-500 `}>
            <Text style={tw`text-gray-400  text-center text-xl`}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.navigate('mComfirm')}
            onPress={() => navigation.navigate('medit')}
            title="Submit"
            style={tw`p-2 w-[48%] rounded-lg flex bg-[#52a950] items-center justify-center py-4 border-2 border-[#52a950] `}>
            <Text style={tw`text-gray-800  text-center text-xl`}>Edit</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={tw`bg-red-300  h-[200px] w-[]`}>
          <TouchableOpacity onPress={() => setIsDetail(false)}>
            <Text>MemberDetail</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </Screen>
  );
};

export default MemberDetail;
