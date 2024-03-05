import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {Screen} from '../../../components/Screen';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import Input from '../../../components/Input';
import {Formik} from 'formik';
import * as yup from 'yup';
import color from '../../../config/color';
import {number} from 'yup';

const Create = () => {
  const navigation = useNavigation();
  const validationSchema = yup.object().shape({
    name: yup.string().required('required'),
    email: yup.string().required(' required'),
    phone: yup.string().required(' required'),
    password: yup.string().required('required'),
    comparePassword: yup.string().required('required'),
    stationId: yup.string().required('required'),
    stationNo: yup.string().required('required'),
    nrcNo: yup.string().required('required'),
  });
  const submitHandler = values => {
    console.log('lll');
    const data = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      password: values.password,
      comparePassword: values.comparePassword,
      stationId: values.stationId,
      stationNo: values.stationNo,
      nrcNo: values.nrcNo,
    };
    // const data = {
    //   address: values.address,
    //   dob: values.dob,
    //   email: values.email,
    //   gender: values.gender,
    //   joiningDate: values.joiningDate,
    //   name: values.name,
    //   password: values.password,
    //   phone: values.phone,
    //   role: values.role,
    //   salary: parseInt(values.salary),
    // };

    console.log('====dd================================');
    console.log(data);
    console.log('====================================');
    navigation.navigate('sComfirm', data);
  };
  return (
    <Screen>
      <ScrollView>
        <View style={tw` w-[95%] mx-auto mb-5`}>
          <Text
            style={tw`text-3xl font-bold text-[${color.blue}] mx-auto my-5 mt-3`}>
            Create Staff Card
          </Text>
          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              password: '',
              comparePassword: '',
              stationId: '6464e9d2c45b82216ab1e654',
              stationNo: '',
              cardId: '',
            }}
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
                    placeholder={'Name'}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                  />
                  {errors.email && touched.email && (
                    <Text style={tw`text-red-500 pl-3 text-lg`}>
                      {errors.email}
                    </Text>
                  )}
                  <Input
                    placeholder={'Email'}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {errors.comparePassword && touched.comparePassword && (
                    <Text style={tw`text-red-500 pl-3 text-lg`}>
                      {errors.comparePassword}
                    </Text>
                  )}
                  <Input
                    placeholder={'Password'}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  {errors.phone && touched.phone && (
                    <Text style={tw`text-red-500 pl-3 text-lg`}>
                      {errors.phone}
                    </Text>
                  )}
                  <Input
                    placeholder={'ComparePassword'}
                    onChangeText={handleChange('comparePassword')}
                    onBlur={handleBlur('comparePassword')}
                    value={values.comparePassword}
                  />
                  {errors.comparePassword && touched.comparePassword && (
                    <Text style={tw`text-red-500 pl-3 text-lg`}>
                      {errors.comparePassword}
                    </Text>
                  )}

                  <Input
                    placeholder={'Phone number'}
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                  />
                  {errors.stationId && touched.stationId && (
                    <Text style={tw`text-red-500 pl-3 text-lg`}>
                      {errors.stationId}
                    </Text>
                  )}

                  <Input
                    placeholder={'StationId'}
                    onChangeText={handleChange('stationId')}
                    // onChangeText={(e)=>console.log(typeof e)}
                    onBlur={handleBlur('stationId')}
                    value={values.stationId}
                  />
                  {errors.stationNo && touched.stationNo && (
                    <Text style={tw`text-red-500 pl-3 text-lg`}>
                      {errors.stationNo}
                    </Text>
                  )}

                  <Input
                    placeholder={'StationNo'}
                    onChangeText={handleChange('stationNo')}
                    // onChangeText={(e)=>console.log(typeof e)}
                    onBlur={handleBlur('stationNo')}
                    value={values.stationNo}
                  />
                  {errors.nrcNo && touched.nrcNo && (
                    <Text style={tw`text-red-500 pl-3 text-lg`}>
                      {errors.nrcNo}
                    </Text>
                  )}
                  <Input
                    placeholder={'NrcNo'}
                    onChangeText={handleChange('nrcNo')}
                    // onChangeText={(e)=>console.log(typeof e)}
                    onBlur={handleBlur('nrcNo')}
                    value={values.nrcNo}
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
                    // onPress={() => navigation.navigate('sComfirm')}
                    onPress={() => submitHandler(values)}
                    title="Submit"
                    style={tw`p-2 px-10 w-[48%] rounded-lg flex bg-[${color.blue}] items-center justify-center py-4 border-2 border-[${color.blue}] `}>
                    <Text style={tw`text-gray-800  text-center text-xl`}>
                      Next
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* <TouchableOpacity
                // onPress={() => navigation.navigate('mComfirm')}
                onPress={() => navigation.navigate('mComfirm')}
                title="Submit"
                style={tw`p-2 px-10 w-[48%] rounded-lg flex bg-[#52a950] items-center justify-center py-4 border-2 border-[#52a950] `}>
                <Text style={tw`text-gray-800  text-center text-xl`}>Next</Text>
              </TouchableOpacity> */}
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default Create;
