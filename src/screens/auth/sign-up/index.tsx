import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {NavigationService} from '../../..';
import {AppleIcon, FacebookIcon, GoogleIcon} from '../../../assets/images/svg';
import {routes} from '../../../constants';

const Sign_up: React.FC = () => {
  const styles = useStyles();
  const [hidePassword, sethidePassword] = useState(false);
  const [checkbox, setcheckbox] = useState(false);
  const handleCheckbox = () => {
    setcheckbox(!checkbox);
  };

  const handleHidePassword = () => {
    sethidePassword(!hidePassword);
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
        <Text style={styles.txtHeader1}>Hello there 👋</Text>
        <Text style={styles.txtHeader2}>
          Please enter your email & password to create an account.
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.viewInput}>
          <Text style={styles.txtTitle}>Email address</Text>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Email" style={styles.input} />
            <Icon
              name="mail"
              type="ionicon"
              color={'#9E9E9E'}
              style={styles.iconInput}
            />
          </View>
        </View>
        <View style={styles.viewInput}>
          <Text style={styles.txtTitle}>Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              secureTextEntry={hidePassword}
              style={styles.input}
            />
            <Icon
              name={hidePassword ? 'eye-off' : 'eye'}
              type="ionicon"
              color={'#717FF3'}
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
          <Text style={styles.txtBox}>
            I agree to Qubiko AI Public Agreement, Terms, & Privacy Policy.
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.viewtxtFooter}>
          <Text style={styles.txtFooter1}>Already have an account?</Text>
          <Text
            style={styles.txtFooter2}
            onPress={() => NavigationService.navigate(routes.SIGN_IN)}>
            Log in
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
            onPress={() => NavigationService.navigate(routes.UPDATE_PROFILE)}>
            <Text style={styles.txtBtnBig}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Sign_up;
