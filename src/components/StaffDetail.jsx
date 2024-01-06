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
const StaffDetail = ({navigation, route}) => {
  const StaffData = route.params;
  const {
    nfc_id,
    name,
    email,
    phone,
    address,
    salary,
    gender,
    role,
    dob,
    joiningDate,
  } = StaffData;
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
          <Text style={tw`text-[#52a950] mx-auto text-2xl mb-5`}>
            Staff Information
          </Text>
          <View
            style={tw`flex-row mb-3 rounded-xl items-center justify-center bg-gray-300 h-[490px] w-[94%] mx-auto`}>
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
                Address:
              </Text>
              <Text
                style={tw`text-xl ml-auto pr-5 text-gray-700 font-semibold`}>
                Salary:
              </Text>
              <Text
                style={tw`text-xl ml-auto pr-5 text-gray-700 font-semibold`}>
                Role:
              </Text>
              <Text
                style={tw`text-xl ml-auto pr-5 text-gray-700 font-semibold`}>
                DoB:
              </Text>
              <Text
                style={tw`text-xl ml-auto pr-5 text-gray-700 font-semibold`}>
                Gender:
              </Text>
              <Text
                style={tw`text-xl ml-auto pr-5 text-gray-700 font-semibold`}>
                JoinDate:
              </Text>
            </View>
            <View style={tw`flex gap-4   w-[70%]  `}>
              <Text style={tw`text-xl text-gray-700 `}>{nfc_id}</Text>
              <Text style={tw`text-xl text-gray-700 `}>{name}</Text>
              <Text style={tw`text-xl text-gray-700 `}>{email}</Text>
              <Text style={tw`text-xl text-gray-700 `}>{phone}</Text>
              <Text style={tw`text-xl text-gray-700 `}>{address}</Text>
              <Text style={tw`text-xl text-gray-700 `}>{salary}</Text>
              <Text style={tw`text-xl text-gray-700 `}>{role}</Text>
              <Text style={tw`text-xl text-gray-700 `}>{dob}</Text>
              <Text style={tw`text-xl text-gray-700 `}>{gender}</Text>
              <Text style={tw`text-xl text-gray-700 `}>{joiningDate}</Text>
            </View>
          </View>
          <View style={tw`flex-row w-[95%] mx-auto mt-2 justify-between`}>
            <TouchableOpacity
              onPress={() => navigation.navigate('sstaff')}
              style={tw`p-2 w-[48%] rounded-lg flex items-center justify-center py-4 border-2 border-gray-500 `}>
              <Text style={tw`text-gray-400  text-center text-xl`}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => navigation.navigate('mComfirm')}
              onPress={() => navigation.navigate('sedit')}
              title="Submit"
              style={tw`p-2 w-[48%] rounded-lg flex bg-[#52a950] items-center justify-center py-4 border-2 border-[#52a950] `}>
              <Text style={tw`text-gray-800  text-center text-xl`}>Edit</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={tw`bg-red-300  h-[200px] w-[]`}>
          <TouchableOpacity onPress={() => setIsDetail(false)}>
            <Text>StaffDetail</Text>
          </TouchableOpacity>
        </View> */}
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
