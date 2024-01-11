import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useAppSelector} from '../hooks';
import {getAuthEnableSignIn} from '../redux/selectors/auth.selector';
import {navigationRef} from './NavigationService';
import AppNavigator from './navigators/AppNavigator';
import AuthNavigator from './navigators/AuthNavigator';
import Onbroad from '../screens/auth/onbroad';
import {StatusBar} from 'react-native';

const RootNavigation = () => {
  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  console.log(enableSignIn);
  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle('dark-content');

    return () => {
      StatusBar.setTranslucent(false);
      StatusBar.setBackgroundColor('white');
      StatusBar.setBarStyle('dark-content');
    };
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
