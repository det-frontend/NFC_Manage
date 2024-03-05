import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
import {Screen} from './Screen';
import color from '../config/color';
const StaffDetail = ({navigation, route}) => {
  const StaffData = route.params;
  const {cardId, name, email, password, phone, stationId, stationNo, nrcNo} =
    StaffData;
  const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
  const tableData = [
    ['1', '2', '3', '4'],
    ['a', 'b', 'c', 'd'],
    ['1', '2', '3', '456\n789'],
    ['a', 'b', 'c', 'd'],
  ];

  return (
    <Screen>
      <ScrollView>
        <View style={tw`flex-1 items-center h-[800px] `}>
          <Text style={tw`text-[${color.blue}] mx-auto text-2xl mb-5`}>
            Staff Information
          </Text>
          <View
            style={tw`flex-row mb-3 rounded-xl items-center justify-center bg-gray-300 h-[340px] w-[94%] mx-auto`}>
            <View style={tw` w-[33%] flex gap-4 `}>
              <Text
                style={tw`text-xl ml-auto pr-5 text-gray-700 font-semibold`}>
                NFC_Id:
              </Text>
              <Text
                style={tw`text-xl ml-auto pr-5 text-gray-700 font-semibold`}>
                Name:
              </Text>
              <Text
                style={tw`text-xl ml-auto pr-5 text-gray-700 font-semibold`}>
                Email:
              </Text>
              <Text
                style={tw`text-xl ml-auto pr-5 text-gray-700 font-semibold`}>
                Phone:
              </Text>
              <Text
                style={tw`text-xl ml-auto pr-5 text-gray-700 font-semibold`}>
                StationId:
              </Text>
              <Text
                style={tw`text-xl ml-auto pr-5 text-gray-700 font-semibold`}>
                StationNo:
              </Text>
              <Text
                style={tw`text-xl ml-auto pr-5 text-gray-700 font-semibold`}>
                NRC_No:
              </Text>
            </View>
            <View style={tw`flex gap-4   w-[70%]  `}>
              <Text style={tw`text-xl text-gray-700 `}>{cardId}</Text>
              <Text style={tw`text-xl text-gray-700 `}>{name}</Text>
              <Text style={tw`text-xl text-gray-700 `}>{email}</Text>
              <Text style={tw`text-xl text-gray-700 `}>{phone}</Text>
              <Text style={tw`text-xl text-gray-700 `}>{stationId}</Text>
              <Text style={tw`text-xl text-gray-700 `}>{stationNo}</Text>
              <Text style={tw`text-xl text-gray-700 `}>{nrcNo}</Text>
            </View>
          </View>
          <View style={tw`flex-row w-[95%] mx-auto mt-2 justify-between`}>
            <TouchableOpacity
              onPress={() => navigation.navigate('sstaff')}
              style={tw`p-2 w-[48%] rounded-lg flex items-center justify-center py-4 border-2 border-gray-500 `}>
              <Text style={tw`text-gray-400  text-center text-xl`}>Back</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              // onPress={() => navigation.navigate('mComfirm')}
              onPress={() => navigation.navigate('sedit')}
              title="Submit"
              style={tw`p-2 w-[48%] rounded-lg flex bg-[${color.blue}] items-center justify-center py-4 border-2 border-[${color.blue}] `}>
              <Text style={tw`text-gray-800  text-center text-xl`}>Edit</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
});

export default StaffDetail;
