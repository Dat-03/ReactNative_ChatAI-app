import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {NavigationService} from '../../..';
import {AppleIcon, FacebookIcon, GoogleIcon} from '../../../assets/images/svg';
import {routes} from '../../../constants';

const Sign_in: React.FC = () => {
  const styles = useStyles();
  const [hidePassword, setHidePassword] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setEmailFocused(false);
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setPasswordFocused(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-back-outline"
          type="ionicon"
          color={'black'}
          size={30}
          style={styles.iconHeader}
          onPress={() => NavigationService.goBack()}
        />
        <Text style={styles.txtHeader1}>Welcome back 👋</Text>
        <Text style={styles.txtHeader2}>
          Please enter your email & password to log in.
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.viewInput}>
          <Text style={styles.txtTitle}>Email address</Text>
          <View
            style={[
              styles.inputContainer,
              emailFocused && {borderColor: '#7E92F8'},
            ]}>
            <TextInput
              placeholder="Email"
              style={[styles.input, emailFocused && {borderColor: '#7E92F8'}]}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              onChangeText={text => setEmail(text)}
            />
            <Icon
              name="mail"
              type="ionicon"
              color={emailFocused ? '#7E92F8' : '#9E9E9E'}
              style={styles.iconInput}
            />
          </View>
        </View>
        <View style={styles.viewInput}>
          <Text style={styles.txtTitle}>Password</Text>
          <View
            style={[
              styles.inputContainer,
              passwordFocused && {borderColor: '#7E92F8'},
            ]}>
            <TextInput
              placeholder="Password"
              secureTextEntry={hidePassword}
              style={[
                styles.input,
                passwordFocused && {borderColor: '#7E92F8'},
              ]}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              onChangeText={text => setPassword(text)}
            />
            <Icon
              name={hidePassword ? 'eye-off' : 'eye'}
              type="ionicon"
              color={passwordFocused ? '#7E92F8' : '#9E9E9E'}
              style={styles.iconInput}
              onPress={handleHidePassword}
            />
          </View>
        </View>
        <View style={styles.viewBox}>
          <Icon
            name={checkbox ? 'checkbox' : 'square-outline'}
            type="ionicon"
            color={'#201D67'}
            onPress={handleCheckbox}
          />
          <Text style={styles.txtBox}>Remember me</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.FORGOT_PASSWORD)}>
          <Text style={styles.txtFooter4}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={styles.viewtxtFooter}>
          <Text style={styles.txtFooter1}>Don’t have an account?</Text>
          <Text
            style={styles.txtFooter2}
            onPress={() => NavigationService.navigate(routes.SIGN_UP)}>
            Sign up
          </Text>
        </View>
        <View style={styles.txtOr}>
          <View style={styles.line}></View>
          <Text style={{marginHorizontal: 10}}>or continue with</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.viewbtnFooter}>
          <TouchableOpacity style={styles.btnFooter}>
            <GoogleIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnFooter}>
            <AppleIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnFooter}>
            <FacebookIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.viewButtonbig}>
          <TouchableOpacity
            style={styles.buttonBig}
            onPress={() => NavigationService.navigate(routes.APPNAViGATOR)}>
            <Text style={styles.txtBtnBig}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Sign_in;
