import React, {FunctionComponent, useState} from 'react';

import {Alert, TouchableOpacity, View} from 'react-native';

import {Text} from '@rneui/base';
import {Icon} from '@rneui/themed';
import {NavigationService} from '../../../..';
import {LogoIcon} from '../../../../assets/images/svg';
import {routes} from '../../../../constants';
import {List_History} from './components';
import useStyles from './styles';
import {ListItem, data} from './components/content/data';

const History: FunctionComponent = () => {
  const styles = useStyles();
  const [listData, setListData] = useState<ListItem[]>(data);
  const handleClearHistory = () => {
    Alert.alert(
      'Xác nhận',
      'Bạn có chắc muốn xóa tất cả các mục?',
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Xóa',
          onPress: () => deleteAll(),
        },
      ],
      {cancelable: false},
    );
  };
  const deleteAll = () => {
    setListData([]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoIcon width={45} height={60} viewBox="0 -120 1 400" />
        <Text style={styles.txtHeader}>History</Text>
        <View style={styles.iconHeader}>
          <TouchableOpacity
            onPress={() => NavigationService.navigate(routes.SEARCH_HISTORY)}>
            <Icon name="search-outline" type="ionicon" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleClearHistory}>
            <Icon name="trash-outline" type="ionicon" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <List_History listData={data}/>
      </View>
    </View>
  );
};

export default History;
