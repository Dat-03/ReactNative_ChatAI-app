import {View, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React from 'react';
import useStyles from './styles';
import { ItemFAQ } from './components';

const FAQ: React.FC = () => {
  const styles = useStyles();
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.body}>
            <View style={styles.viewItemFilters}>
              <ItemFAQ />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default FAQ;
