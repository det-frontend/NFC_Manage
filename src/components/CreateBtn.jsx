import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import ModalAlert from './ModalAlert';

const CreateBtn = ({navigation, showAlert, setShowAlert}) => {
  console.log('===modal=================================');
  console.log(showAlert);
  console.log('====================================');
  const handleOk = () => {
    // Handle 'Ok' button press logic here
    setShowAlert(false);
  };

  const handleClose = () => {
    // Handle 'Cancel' button press logic here
    setShowAlert(false);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setShowAlert(true)}
        style={tw`justify-center -top-10 items-center`}>
        <View
          style={tw`w-26 justify-center  items-center rounded-full bg-[#52a950] h-26`}>
          <Image
            source={require('../assets/plus.png')}
            resizeMode="contain"
            style={{
              height: 80,
              width: 80,
              tintColor: '#eeeeee',
            }}
          />
        </View>
      </TouchableOpacity>
      <ModalAlert
        text="Logout your account"
        visible={showAlert}
        setShowAlert={setShowAlert}
        onOk={handleOk}
        onClose={handleClose}
      />
    </>
  );
};

export default CreateBtn;
