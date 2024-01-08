import {View, Text, Image} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {NavigationService} from '../../../..';
import TabViewItem from '../../../../components/customs/TabViewItem';
import FAQ from './FAQ';
import Contact_us from './Contact_us';

const HelpCenter: React.FC = () => {
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
        <Text style={styles.textHeader}>Help Center</Text>
      </View>
      <TabViewItem
        tabStyle={styles.tabStyle}
        title1={'FAQ'}
        title2={'Contact us'}
        screen1={<FAQ />}
        screen2={<Contact_us />}
        viewStyle={{height: 800}}
        titleStyle={styles.titleStyle}
      />
    </View>
  );
};

export default HelpCenter;
