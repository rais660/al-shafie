/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, {useEffect, useState} from 'react';
import {
  View,
    AppState,
} from 'react-native';

import {useAppState} from '@react-native-community/hooks';
import HomeScreen from './app/screens/HomeScreen';




const App= () => {
  const currentAppState = useAppState();
  useEffect(() => {

    AppState.addEventListener('change', handleAppStateChange);
    return()=>{
      AppState.remove();
    };

  }, []);
  const handleAppStateChange = state => {
    // setAppState(state);
    if (state === 'background') {
      //  console.log('app in background');
    }
    if (state === 'active') {
      //  console.log('app in active state');
    }
    if (state === 'inactive') {
      //   console.log('app in Inactive state');
    }
  };
  return (
      <View
          style={{
            flex: 1,
          }}>
        <HomeScreen />
      </View>
    // <SafeAreaView >
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //
    //
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
};



export default App;
