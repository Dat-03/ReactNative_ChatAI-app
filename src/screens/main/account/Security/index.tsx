import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Switch_c} from '../../../../components';
import {Icon} from '@rneui/themed';
import {NavigationService} from '../../../..';

const Security: React.FC = () => {
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
        <Text style={styles.textHeader}>Security</Text>
      </View>
      <View style={styles.content}>
        <Switch_c title="Remember Me" />
        <Switch_c title="Biometric ID" />
        <Switch_c title="Face ID" />
        <Switch_c title="SMS Authenticator" />
        <Switch_c title="Google Authenticator" />
        <TouchableOpacity style={styles.viewdevice}>
          <Text style={styles.text}>Device Management</Text>
          <Icon name="chevron-forward-outline" type="ionicon" />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonBig}>
          <Text style={styles.txtbutton}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Security;
