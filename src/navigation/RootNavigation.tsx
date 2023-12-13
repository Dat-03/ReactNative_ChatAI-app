import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useAppSelector} from '../hooks';
import {getAuthEnableSignIn} from '../redux/selectors/auth.selector';
import {navigationRef} from './NavigationService';
import AppNavigator from './navigators/AppNavigator';
import Detail_Chat from '../screens/main/chat/DetailChat';
import List_History from '../screens/main/history/History/components/content';

const RootNavigation = () => {
  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  console.log(enableSignIn);
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      <AppNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
