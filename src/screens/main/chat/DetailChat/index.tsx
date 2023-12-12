import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import Logo_outline from '../../../../assets/images/svg/components/Logo_outline';
import {LogoIcon_outline} from '../../../../assets/images/svg';

const Detail_Chat: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-left"
          type="font-awesome-5"
          style={styles.iconHeader}
        />
        <Text style={styles.txtHeader}>Wibu AI</Text>
      </View>
      <View style={styles.content}>
          <LogoIcon_outline width={200} height={100} viewBox="0 0 0 200" />
        </View>
    </View>
  );
};

export default Detail_Chat;
