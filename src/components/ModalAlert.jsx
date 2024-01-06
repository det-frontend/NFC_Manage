import React from 'react';
import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
// import {AntDesign} from '@expo/vector-icons';
const ModalAlert = ({visible, onClose, setShowAlert, onOk, text}) => {
  const navigation = useNavigation();
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View
        style={tw`flex-1 justify-center  items-center bg-opacity-85 bg-black`}>
        <View
          style={tw`bg-transparent overflow-hidden rounded-lg w-[90%] items-center`}>
          {/* <AntDesign name="warning" style={tw`text-red-500 mt-5`} size={55} /> */}
          {/* <View
            style={tw` mt-1 text-center gap-1 mb-7 flex justify-center items-center`}>
            <Text style={tw`text-2xl font-bold text-gray-700`}>
              Are you sure?
            </Text>
            <Text style={tw`text-xl text-gray-700`}>{text}</Text>
          </View> */}

          <View style={tw`flex flex-row gap-5 items-center`}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('memberCreate'), setShowAlert(false);
              }}
              style={tw`p-2 w-[190px] h-[190px] rounded-lg flex items-center justify-center py-4 border-2 border-[#52a950] bg-[#52a95020]`}>
              {/* <Text style={tw`text-white  text-center text-gray-600  text-lg`}> 
                Cancel
              </Text> */}
              <Image
                source={require('../assets/membership.png')}
                resizeMode="contain"
                style={{
                  height: 130,
                  width: 130,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('staffCreate'), setShowAlert(false);
              }}
              style={tw`p-2 w-[190px] h-[190px] rounded-lg flex items-center justify-center py-4 border-2 border-[#0091F7] bg-[#0091F720]`}>
              {/* <Text style={tw`text-white text-center text-lg`}>Sure</Text> */}
              <Image
                source={require('../assets/staff.png')}
                resizeMode="contain"
                style={{
                  height: 130,
                  width: 130,
                }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={onClose}
            style={tw`p-2 px-10 mt-6 rounded-lg flex items-center justify-center py-4 border-2 border-gray-500 `}>
            <Text style={tw`text-gray-400  text-center text-xl`}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAlert;
