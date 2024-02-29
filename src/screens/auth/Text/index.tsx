import React, {useState} from 'react';
import {Text, View} from 'react-native';
import useStyles from './styles';
import { ModalCustom } from '../../../components';

const ScreenText: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <ModalCustom/>
    </View>
  );
};

export default ScreenText;
