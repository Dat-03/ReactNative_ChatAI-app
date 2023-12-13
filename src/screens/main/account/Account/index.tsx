import React, {FunctionComponent} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import useStyles from './styles';
import {LogoIcon} from '../../../../assets/images/svg';
import {images} from '../../../..';
import {Icon} from '@rneui/themed';

const Account: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoIcon width={50} height={70} viewBox="0 0 200 400" />
        <Text style={styles.txtHeader}>Account</Text>
      </View>
      <View style={styles.content}>
        {/* <View style={styles.viewUser}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
            <Image style={styles.avatar} source={images.avatarDummy} />
            <TouchableOpacity style={styles.btnUser}>
              <Text style={styles.nameUser}>Peter Ken</Text>
              <Text style={styles.email}>ken@gmail.com</Text>
            </TouchableOpacity>
          </View>
          <Icon name="chevron-forward-outline" type="ionicon" />
        </View> */}
        <View style={{flexDirection: 'row',alignItems:'center',gap:20}}>
          <Image style={styles.avatar} source={images.avatarDummy} />
          <TouchableOpacity style={styles.btnUser}>
            <View>
              <Text style={styles.nameUser}>Peter Ken</Text>
              <Text style={styles.email}>ken@gmail.com</Text>
            </View>

            <View style={{}}>
              <Icon name="chevron-forward-outline" type="ionicon" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Account;
