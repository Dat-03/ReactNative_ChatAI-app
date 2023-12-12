import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useAppSelector} from '../hooks';
import {getAuthEnableSignIn} from '../redux/selectors/auth.selector';
import {navigationRef} from './NavigationService';
import AppNavigator from './navigators/AppNavigator';
import Detail_Chat from '../screens/main/chat/DetailChat';

const RootNavigation = () => {
  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  console.log(enableSignIn);
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      <Detail_Chat />
    </NavigationContainer>
  );
};

export default RootNavigation;
