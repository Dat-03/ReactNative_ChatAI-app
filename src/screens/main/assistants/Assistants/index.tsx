import React, {FunctionComponent} from 'react';

import {View, Text} from 'react-native';

import useStyles from './styles';
import {LogoIcon} from '../../../../assets/images/svg';
import {useDispatch, useSelector} from 'react-redux';

const Assistants: FunctionComponent = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const info = useSelector((state: any) => state.user);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoIcon width={50} height={60} viewBox="0 -30 240 400" />
        <Text style={styles.txtHeader}>AI Assistants</Text>
      </View>
      <Text style={styles.text}>Fullname: {info.fullname}</Text>
      <Text style={styles.text}>Phone: {info.phone}</Text>
      <Text style={styles.text}>Gender: {info.gender}</Text>
      <Text style={styles.text}>Date: {info.dateOrbirth}</Text>
    </View>
  );
};

export default Assistants;
