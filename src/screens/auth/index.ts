import {routes} from '../../constants';
import AppNavigator from '../../navigation/navigators/AppNavigator';
import {Screen} from '../../types';
import {Chat} from '../main';
import Forgot_Password from './Forgot-password';
import OTP from './OTP';
import Create_Password from './create-password';
import Lobby from './lobby';
import Onbroad from './onbroad';
import Sign_in from './sign-in';
import Sign_up from './sign-up';
import Update_Profile from './update-profile';
import Welcome from './welcome';

export const authScreen: Screen[] = [
  {
    name: routes.WELCOME,
    component: Welcome,
  },
  {
    name: routes.LOBBY,
    component: Lobby,
  },
  {
    name: routes.ONBOARD,
    component: Onbroad,
  },
  {
    name: routes.SIGN_UP,
    component: Sign_up,
  },
  {
    name: routes.SIGN_IN,
    component: Sign_in,
  },
  {
    name: routes.UPDATE_PROFILE,
    component: Update_Profile,
  },
  {
    name: routes.FORGOT_PASSWORD,
    component: Forgot_Password,
  },
  {
    name: routes.OTP,
    component: OTP,
  },
  {
    name: routes.CREATE_PASSWORD,
    component: Create_Password,
  },
  {
    name: routes.APPNAViGATOR,
    component: AppNavigator,
  },
];
