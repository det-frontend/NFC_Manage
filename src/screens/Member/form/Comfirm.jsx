import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Screen} from '../../../components/Screen';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import Scan from '../../../components/Scan';
import LottieView from 'lottie-react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import memberApi from '../../../api/memberApi';
import mGet from '../../../api/memberGet';
import apiClient from '../../../api/client';

const Comfirm = ({route}) => {
  const value = route.params;
  const [nfcId, setNfcId] = useState({});
  const [err, setErr] = useState({});

  const [ani, setAni] = useState(true);

  const pressHandler = () => {
    setAni(prev => !prev);
  };
  useEffect(() => {
    ani ? readNfc() : NfcManager.cancelTechnologyRequest();
  }, [ani]);

  const memberData = (value, id) => {
    const data = {
      nfc_id: id,
      name: value.name,
      vehicle_type: value.vehicle_type,
      car_no: value.car_no,
    };

    return data;
  };

  const fetchIt = async data => {
    const result = await memberApi.memberAdd(data);
    console.log('===result=================================');
    console.log(result);
    console.log('====================================');
    result.ok ? navigation.navigate('mSuccess', data) : setErr(true);
  };
  const readNfc = async () => {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      const id = tag?.id;
      setNfcId(id);
      const data = memberData(value, id);
      id && fetchIt(data);

      setAni(false);
      console.log('Tag found', id);
    } catch (ex) {
      console.log('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  };
  // const test = async () => {
  //   console.log('click');
  //   const response = await mGet.memberGet();
  //   console.log(response.data.result);
  // };
  const navigation = useNavigation();
  return (
    <Screen>
      <View style={tw` w-[95%] mx-auto flex-1 justify-center items-center`}>
        <Text style={tw`text-3xl font-bold text-[#52a950] mx-auto`}>
          Comfirm with Card
        </Text>
        <View style={tw` relative w-[430px] h-[430px]`}>
          {ani && (
            <LottieView
              source={require('../../../assets/animations/nfc.json')}
              autoPlay
              loop
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          )}

          <View
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: [{translateX: -64}, {translateY: -64}],
            }}>
            {/* <View style={tw`absolute top-0 right-0 left-0`}> */}
            <Scan
              ani={ani}
              text={ani ? 'STOP' : 'SCAN'}
              onPress={pressHandler}
            />
          </View>
        </View>
        <View style={tw`flex-row flex mt-5 justify-between`}>
          <TouchableOpacity
            onPress={() => navigation.navigate('mCreate')}
            style={tw`p-2 px-10 w-[48%] rounded-lg flex items-center justify-center py-4 border-2 border-gray-500 `}>
            <Text style={tw`text-gray-400  text-center text-xl`}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('mSuccess', {
                nfc_id: '112212',
                name: 'hakk',
                vehicle_type: 'jj',
                car_no: 'kk',
              })
            }
            style={tw`p-2 px-10 w-[45%] rounded-lg flex items-center justify-center py-4 border-2 border-gray-500 `}>
            <Text style={tw`text-gray-400  text-center text-xl`}>test</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

export default Comfirm;
