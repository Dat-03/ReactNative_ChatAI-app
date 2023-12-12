import React, {FunctionComponent, useState} from 'react';

import {View} from 'react-native';

import styles from './styles';
import {Text} from '@rneui/base';

const History: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>History</Text>
    </View>
  );
};

export default History;
