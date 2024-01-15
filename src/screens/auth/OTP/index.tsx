import {View, Text, TextInput} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import useStyles from './styles';
import {NavigationService} from '../../..';
import {Icon} from '@rneui/themed';

const OTP: React.FC = () => {
  const styles = useStyles();
  const [remainingTime, setRemainingTime] = useState(60);

  const otpInputs = Array(4)
    .fill(0)
    .map((_, index) => useRef<TextInput>(null));

  const handleInputChange = (text: string, index: number) => {
    if (text !== '' && index < otpInputs.length - 1) {
      otpInputs[index + 1].current?.focus();
    }

    if (text === '' && index > 0) {
      otpInputs[index - 1].current?.focus();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(prevTime => prevTime - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [remainingTime]);

  const handleResendCode = () => {
    setRemainingTime(60);
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
        <Text style={styles.txtHeader1}>OTP code verification 🔐</Text>
        <Text style={styles.txtHeader2}>
          We have sent an OTP code to your email and********ley@yourdomain.com.
          Enter the OTP code below to verify.
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.otpContainer}>
          {otpInputs.map((ref, index) => (
            <TextInput
              key={index}
              ref={ref}
              style={styles.otpInput}
              onChangeText={text => handleInputChange(text, index)}
              keyboardType="numeric"
              maxLength={1}
            />
          ))}
        </View>
        <View style={styles.viewtxtContent}>
          <Text style={styles.txtReceive}>Didn't receive email?</Text>
          <View style={styles.viewTimetxt}>
            <Text style={styles.timerText}>You can resend code in</Text>
            <Text>
              {remainingTime > 0 ? (
                <Text style={styles.boldText}>{`${remainingTime} s`}</Text>
              ) : (
                <Text style={styles.boldText} onPress={handleResendCode}>
                  reSend
                </Text>
              )}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OTP;
