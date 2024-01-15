import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {NavigationService} from '../../..';
import {routes} from '../../../constants';

const Create_Password: React.FC = () => {
  const styles = useStyles();
  const [hidePassword, setHidePassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
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
        <Text style={styles.txtHeader1}>Create New Password 🔒</Text>
        <Text style={styles.txtHeader2}>
          Create your new password. If you forget it, then you have to do forgot
          password.
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.viewInput}>
          <Text style={styles.txtTitle}>New Password</Text>
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
        <View style={styles.viewInput}>
          <Text style={styles.txtTitle}>Confirm New Password</Text>
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
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => NavigationService.navigate(routes.SIGN_IN)}>
          <Text style={styles.txtBtn}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Create_Password;
