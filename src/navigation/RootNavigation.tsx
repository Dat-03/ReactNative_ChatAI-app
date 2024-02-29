import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useAppSelector} from '../hooks';
import {getAuthEnableSignIn} from '../redux/selectors/auth.selector';
import {navigationRef} from './NavigationService';
import AuthNavigator from './navigators/AuthNavigator';
import ScreenText from '../screens/auth/Text';
import AppNavigator from './navigators/AppNavigator';

const RootNavigation = () => {
  // const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  // console.log(enableSignIn);
  const enableSignIn = true;
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
      {enableSignIn ? <AuthNavigator /> : <AppNavigator />}
      {/* <ScreenText /> */}
    </NavigationContainer>
  );
};

export default RootNavigation;
