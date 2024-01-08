import React, {FunctionComponent} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import useStyles from './styles';
import {LogoIcon} from '../../../../assets/images/svg';
import {images} from '../../../..';
import {Icon} from '@rneui/themed';
import BtnVip from '../../../../assets/images/svg/components/BtnVIP';
import {List_About, List_General} from './components';

const Account: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <ScrollView nestedScrollEnabled>
      <View style={styles.container}>
        <View style={styles.header}>
          <LogoIcon width={50} height={70} viewBox="0 0 200 400" />
          <Text style={styles.txtHeader}>Account</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.viewUser}>
            <Image style={styles.avatar} source={images.avatarDummy} />
            <TouchableOpacity style={styles.btnUser}>
              <View>
                <Text style={styles.nameUser}>Peter Ken</Text>
                <Text style={styles.email}>ken@gmail.com</Text>
              </View>
              <View>
                <Icon name="chevron-forward-outline" type="ionicon" />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <BtnVip width={330} height={120} viewBox="10 -1 395 120" />
          </TouchableOpacity>
          <View style={styles.general}>
            <View style={styles.viewgeneral}>
              <Text style={styles.txtTitle}>General</Text>
              <View style={styles.line} />
            </View>
            <View>
              <List_General />
            </View>
          </View>
          <View style={styles.general}>
            <View style={styles.viewgeneral}>
              <Text style={styles.txtTitle}>About</Text>
              <View style={styles.line} />
            </View>
            <View>
              <List_About />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Account;
