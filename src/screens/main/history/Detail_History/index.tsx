import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {NavigationService} from '../../../..';

const Detail_History: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-left"
          type="font-awesome-5"
          onPress={() => NavigationService.goBack()}
        />
        <Text style={styles.txtHeader}>Detail History</Text>
      </View>
    </View>
  );
};

export default Detail_History;
