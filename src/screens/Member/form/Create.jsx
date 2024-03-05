import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Screen} from '../../../components/Screen';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import Input from '../../../components/Input';
import {Formik} from 'formik';
import * as yup from 'yup';

const Create = () => {
  const navigation = useNavigation();
  const validationSchema = yup.object().shape({
    name: yup.string().required('username is required'),
    vehicle_type: yup.string().required('vehicle type is required'),
    car_no: yup.string().required('car number is required'),
  });
  const submitHandler = values => {
    console.log('====================================');
    console.log(values);
    console.log('====================================');
    navigation.navigate('mComfirm', values);
  };
  
  return (
    <Screen>
      <View style={tw` w-[95%] mx-auto`}>
        <Text style={tw`text-3xl font-bold text-[#52a950] mx-auto my-5 mt-3`}>
          Create Member Card
        </Text>
        <Formik
          initialValues={{name: '', vehicle_type: '', car_no: ''}}
          validationSchema={validationSchema}
          onSubmit={submitHandler}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <View>
              <View style={tw`gap-3 flex`}>
                {errors.name && touched.name && (
                  <Text style={tw`text-red-500 pl-3 text-lg`}>
                    {errors.name}
                  </Text>
                )}
                <Input
                  placeholder={"Member's Name"}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                {errors.vehicle_type && touched.vehicle_type && (
                  <Text style={tw`text-red-500 pl-3 text-lg`}>
                    {errors.vehicle_type}
                  </Text>
                )}
                <Input
                  placeholder={"Member's Vehicle Type"}
                  onChangeText={handleChange('vehicle_type')}
                  onBlur={handleBlur('vehicle_type')}
                  value={values.vehicle_type}
                />
                {errors.car_no && touched.car_no && (
                  <Text style={tw`text-red-500 pl-3 text-lg`}>
                    {errors.car_no}
                  </Text>
                )}

                <Input
                  placeholder={"Member's Car Number"}
                  onChangeText={handleChange('car_no')}
                  onBlur={handleBlur('car_no')}
                  value={values.car_no}
                />
              </View>
              <View style={tw`flex-row mt-5 justify-between`}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('home')}
                  style={tw`p-2 px-10 w-[48%] rounded-lg flex items-center justify-center py-4 border-2 border-gray-500 `}>
                  <Text style={tw`text-gray-400  text-center text-xl`}>
                    Back
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  // onPress={() => navigation.navigate('mComfirm')}
                  onPress={handleSubmit}
                  title="Submit"
                  style={tw`p-2 px-10 w-[48%] rounded-lg flex bg-[#52a950] items-center justify-center py-4 border-2 border-[#52a950] `}>
                  <Text style={tw`text-gray-800  text-center text-xl`}>
                    Next
                  </Text>
                </TouchableOpacity>
              </View>
              {/*<TouchableOpacity*/}
              {/*  // onPress={() => navigation.navigate('mComfirm')}*/}
              {/*  onPress={() => navigation.navigate('mComfirm')}*/}
              {/*  title="Submit"*/}
              {/*  style={tw`p-2 px-10 w-[48%] rounded-lg flex bg-[#52a950] items-center justify-center py-4 border-2 border-[#52a950] `}>*/}
              {/*  <Text style={tw`text-gray-800  text-center text-xl`}>Next</Text>*/}
              {/*</TouchableOpacity>*/}
            </View>
          )}
        </Formik>
      </View>
    </Screen>
  );
};

export default Create;
