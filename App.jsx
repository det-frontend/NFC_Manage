import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import HomeNavigator from './src/navigation/HomeNavigator';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import StackNavigator from './src/navigation/StackNavigator';
import {Welcome} from './src/navigation/Welcome';
import AuthContext from './src/auth/context';
import {jwtDecode} from 'jwt-decode';
import authStorage from './src/auth/storage';

const App = () => {
  const [user, setUser] = useState(null);
  const retoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };
  useEffect(() => {
    retoreToken();
  }, []);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        {user ? <StackNavigator /> : <Welcome />}
        {/* <StackNavigator /> */}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
