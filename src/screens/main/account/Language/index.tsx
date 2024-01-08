import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import { Icon } from '@rneui/themed';
import { NavigationService } from '../../../..';

const Language: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-back-outline"
          type="ionicon"
          style={styles.icon}
          onPress={() => NavigationService.goBack()}
        />
        <Text style={styles.textHeader}>Language</Text>
      </View>
    </View>
  );
};

export default Language;
