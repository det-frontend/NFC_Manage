import React from 'react';
import {View, SafeAreaView, Platform, StatusBar} from 'react-native';
import color from '../config/color';

export const Screen = ({children, backgroundColor}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: color.bottomNavigation,
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
        overflow: 'hidden',
        position: 'relative',
      }}>
      <View style={{flex: 1, backgroundColor}}>{children}</View>
    </SafeAreaView>
  );
};
