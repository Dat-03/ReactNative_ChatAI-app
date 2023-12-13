import React, {FunctionComponent} from 'react';

import {TouchableOpacity, View} from 'react-native';

import {Text} from '@rneui/base';
import {Icon} from '@rneui/themed';
import {LogoIcon} from '../../../../assets/images/svg';
import {List_History} from './components';
import useStyles from './styles';

const History: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoIcon width={45} height={60} viewBox="0 -120 1 400" />
        <Text style={styles.txtHeader}>History</Text>
        <View style={styles.iconHeader}>
          <TouchableOpacity>
            <Icon name="search-outline" type="ionicon" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="trash-outline" type="ionicon" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <List_History />
      </View>
    </View>
  );
};

export default History;
