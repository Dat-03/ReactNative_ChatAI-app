import React, {FunctionComponent} from 'react';

import {View, Text} from 'react-native';

import useStyles from './styles';
import {LogoIcon} from '../../../../assets/images/svg';

const Assistants: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoIcon width={50} height={60} viewBox="0 -30 240 400" />
        <Text style={styles.txtHeader}>AI Assistants</Text>
      </View>
    </View>
  );
};

export default Assistants;
