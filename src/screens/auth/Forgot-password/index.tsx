import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {NavigationService} from '../../..';
import {routes} from '../../../constants';

const Forgot_Password: React.FC = () => {
  const styles = useStyles();
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [hasText, setHasText] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChangeText = (text: string) => {
    setEmail(text);
    setHasText(text.length > 1);
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
        <Text style={styles.txtHeader1}>Reset your password 🔑</Text>
        <Text style={styles.txtHeader2}>
          Please enter your email and we will send an OTP code in the next step
          to reset your password.
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.viewInput}>
          <Text style={styles.txtTitle}>Email address</Text>
          <View
            style={[
              styles.inputContainer,
              isFocused && {borderColor: '#7E92F8'},
              hasText && {borderColor: '#7E92F8'},
            ]}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChangeText={handleChangeText}
            />
            <Icon
              name="mail"
              type="ionicon"
              color={isFocused || hasText ? '#7E92F8' : '#9E9E9E'}
              style={styles.iconInput}
            />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => NavigationService.navigate(routes.OTP)}>
          <Text style={styles.txtBtn}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Forgot_Password;
