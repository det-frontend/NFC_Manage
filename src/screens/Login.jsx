import React, {useContext, useEffect, useRef, useState} from 'react';
import {decode} from 'base-64';

import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Screen} from '../components/Screen';
import {AppText} from '../components/AppText';
import color from '../config/color';
import tw from 'twrnc';
// import {
//   useFonts,
//   Poppins_900Black,
//   Poppins_400Regular,
// } from '@expo-google-fonts/poppins';
import LottieView from 'lottie-react-native';
import {ErrorMessage, Formik} from 'formik';
import * as yup from 'yup';
import {CustomButton} from '../components/LoginButton';
import {IconTextInput} from '../components/IconTextInput';
import authApi from '../api/auth';
import ErrorMsg from '../components/ErrorMsg';
import {jwtDecode} from 'jwt-decode';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';

const validationSchema = yup.object().shape({
  emailOrUsername: yup.string().required('Email or username is required'),
  password: yup.string().required('Password is required'),
});

export const Login = () => {
  const [text, setText] = useState('default');
  const [test, setTest] = useState('initial');
  const [test2, setTest2] = useState('initial');
  // const [test3, setTest3] = useState('false');
  const authContext = useContext(AuthContext);
  const [con, setCon] = useState();
  global.atob = decode;

  const [err, setErr] = useState(false);
  const animation = useRef(null);

  // useEffect(() => {
  //   if (con) {
  //     setErr(false);
  //     const user = jwtDecode(data.result.token);
  //     setText(`success with ${user.email}`);
  //     authContext.setUser(user.email);
  //     authStorage.setToken(data.result.token);
  //   }
  // }, [con]);

  const handleLogin = async ({emailOrUsername, password}) => {
    setTest("api doesn't work");
    const {data} = await authApi.login(emailOrUsername, password);
    setTest('api wk');
    ///home/htookhant/Documents/res

    file: console.log('====================================');
    console.log(data);
    console.log('====================================');
    const auth = data?.con;
    // authContext.setUser(user.email);
    // if (auth) {
    //   setErr(false);
    //   const user = jwtDecode(data.result.token);
    //   setText(`success with ${user.email}`);
    //   authContext.setUser(user.email);
    //   authStorage.setToken(data.result.token);
    //   setTest('token setted');
    // } else {
    //   setTest2(data.msg);
    //   setText('fail');
    //   setErr(true);
    // }

    switch (auth) {
      case true:
        setErr(false);
        const user = jwtDecode(data.result.token);
        setText(`success with ${user.email}`);
        authContext.setUser(user.email);
        authStorage.setToken(data.result.token);
        setTest('token setted');
        break;

      case false:
        setTest2(data.msg);
        setText('fail');
        setErr(true);
        break;

      default:
        // Handle the default case if auth is neither true nor false
        break;
    }

    // console.log("====================================");
    // console.log("ddd");
    // console.log("====================================");

    // Handle login logic here with the form values
    // console.log("helo");
    // setTest(data.msg);
  };

  return (
    <Screen>
      <ScrollView>
        <View
          style={{
            width: 200,
            height: 200,
            backgroundColor: color.activeColor,
            borderRadius: 200,
            position: 'absolute',
            right: -70,
            zIndex: 99,
            top: -70,
          }}></View>
        <View style={{height: '40%', marginBottom: 50}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'start',
              alignItems: 'center',
              marginTop: 15,
              paddingHorizontal: 5,
            }}>
            <Image
              source={require('../assets/logo.png')}
              style={{width: 50, height: 50, marginRight: 5}}
            />
            <Text
              style={{
                fontFamily: 'Poppins_900Black',
                fontSize: 15,
                fontWeight: '100',
                color: color.white,
              }}>
              Digital Engineerning Tech
            </Text>
          </View>
          <View style={tw`bg-red-300 mt-20`}>
            {/* <Image source={require('../../../assets/2189207.png')} style={{width:350,height:350}} /> */}
            <LottieView
              autoPlay
              ref={animation}
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: color.bottomNavigation,
              }}
              // Find more Lottie files at https://lottiefiles.com/featured
              source={require('../assets/animations/pos.json')}
            />
          </View>
        </View>
        <View style={tw`mt-16 w-[90%] mx-auto `}>
          <AppText
            family={'Montserrat_600SemiBold'}
            text={'Card management system'}
          />
          <Text style={tw`text-white`}>
            {test} \\
            {test2} -
          </Text>
          {/* <AppText family={"Montserrat_600SemiBold"} text={text} /> */}
          {/* <AppText family={"Montserrat_600SemiBold"} text={test} /> */}
          {err && <ErrorMsg err="invalid email or password" />}
          <Formik
            initialValues={{
              emailOrUsername: 'lmoDev@gmail.com',
              password: 'asdffdsa',
            }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}>
            {({handleChange, handleSubmit, values, errors, touched}) => (
              <View style={tw`mt-4 gap-4 h-[400px]`}>
                <IconTextInput
                  placeholder="Email or username"
                  iconName={'email'}
                  onChangeText={handleChange('emailOrUsername')}
                  value={values.emailOrUsername}
                  placeholderTextColor="#CCCCCC50"
                />
                {touched.emailOrUsername && errors.emailOrUsername && (
                  <Text style={styles.errorText}>{errors.emailOrUsername}</Text>
                )}
                <IconTextInput
                  placeholder="Password"
                  iconName="lock" // Replace with the name of the FontAwesome icon you want to use
                  onChangeText={handleChange('password')}
                  value={values.password}
                  secureTextEntry
                  placeholderTextColor="#CCCCCC50"
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}

                {/* <CustomButton title={'Log in'} onPress={handleSubmit} /> */}
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={tw`  p-4 bg-gray-700 rounded`}>
                  <Text style={tw` text-center text-white text-lg uppercase`}>
                    LOG IN
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
      <Text style={tw`text-white mx-auto mb-3 pt-2`}>
        © 2023 Digital Engineering Tech Ltd. All rights reserved.
      </Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    height: 50,
    backgroundColor: color.activeColor,
    paddingHorizontal: 10,
    color: color.light,
    fontFamily: 'Poppins_400Regular',
    elevation: 50,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});
