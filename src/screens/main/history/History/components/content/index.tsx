import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {
  Animated,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {NavigationService} from '../../../../../..';
import {routes} from '../../../../../../constants';
import {ListItem, data} from './data';
import useStyles from './styles';

const List_History: React.FC<ListItem> = ({listData}) => {
  const styles = useStyles();

  const [ListData, setListData] = useState(
    data.map((dataItem, index) => ({
      key: `${index}`,
      title: dataItem.title,
      date: dataItem.date,
      time: dataItem.time,
    })),
  );

  const deleteRow = (rowKey: any) => {
    const newData = [...ListData];
    const prevIndex = ListData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const VisibleItem = (props: any) => {
    const {data, rowHeightAnimatedValue, removeRow, rightActionState} = props;
    if (rightActionState) {
      Animated.timing(rowHeightAnimatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        removeRow();
      });
    }
    return (
      <Animated.View
        style={[styles.rowFront, {height: rowHeightAnimatedValue}]}>
        <TouchableHighlight
          style={styles.rowFrontVisible}
          onPress={() => NavigationService.navigate(routes.DETAIL_HISTORY)}
          underlayColor={'#aaa'}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={styles.viewTxt}>
              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                {data.item.title}
              </Text>
              <View style={styles.txtDate}>
                <Text style={styles.details}>{data.item.date}</Text>
                <Text>-</Text>
                <Text style={styles.details}>{data.item.time}</Text>
              </View>
            </View>
            <Icon name="chevron-forward-outline" type="ionicon" />
          </View>
        </TouchableHighlight>
      </Animated.View>
    );
  };
  const renderItem = (data: any) => {
    const rowHeightAnimatedValue = new Animated.Value(60);
    return (
      <VisibleItem
        data={data}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        removeRow={() => deleteRow(data.item.key)}
      />
    );
  };

  const HiddenItemWithActions = (props: any) => {
    const {
      rightActionActivated,
      rowActionAnimatedValue,
      rowHeightAnimatedValue,
      onDelete,
    } = props;
    if (rightActionActivated) {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 75,
        useNativeDriver: false,
      }).start();
    }
    return (
      <Animated.View style={[styles.rowBack, {height: rowHeightAnimatedValue}]}>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={onDelete}>
          <Icon
            name="trash-outline"
            type="ionicon"
            color={'white'}
            style={styles.trash}
          />
        </TouchableOpacity>
      </Animated.View>
    );
  };
  const renderHiddenItem = (data: any, rowMap: any) => {
    const rowActionAnimatedValue = new Animated.Value(75);
    const rowHeightAnimatedValue = new Animated.Value(60);

    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        rowActionAnimatedValue={rowActionAnimatedValue}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        onDelete={() => deleteRow(data.item.key)}
      />
    );
  };

  return (
    <View>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75}
        disableRightSwipe
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default List_History;
