import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Screen} from '../components/Screen';
import Scan from '../components/Scan';
import tw from 'twrnc';
import LottieView from 'lottie-react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import memberGetApi from '../api/memberGet';

const Member = ({navigation}) => {
  const [ani, setAni] = useState(false);

  const pressHandler = () => {
    setAni(prev => !prev);
  };
  useEffect(() => {
    ani ? readNfc() : NfcManager.cancelTechnologyRequest();
  }, [ani]);

  const getMember = async id => {
    const {data} = await memberGetApi.memberGet(id);
    const memberData = data.result[0];
    memberData && navigation.navigate('mdetail', memberData);
  };

  const readNfc = async () => {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.log('Tag found', tag);
      setAni(false);
      getMember(tag.id);
    } catch (ex) {
      console.log('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  };

  return (
    <Screen>
      {/* {isDetail ? (
        // <MemberDetail setIsDetail={setIsDetail} />
        <DetailNavigator />
      ) : ( */}
      <View style={tw` justify-center items-center h-[620px]`}>
        <View style={tw` relative w-[430px] h-[430px]`}>
          {ani && (
            <LottieView
              source={require('../assets/animations/nfc.json')}
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
              color="#52a950"
              ani={ani}
              text={ani ? 'STOP' : 'SCAN'}
              onPress={pressHandler}
            />
          </View>
        </View>
      </View>
      {/* )} */}
    </Screen>
  );
};

export default Member;
