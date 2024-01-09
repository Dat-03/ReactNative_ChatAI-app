import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Animated,
  TouchableHighlight,
} from 'react-native';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {SwipeListView} from 'react-native-swipe-list-view';
import {data} from './data';
import {NavigationService} from '../../../../../..';
import {routes} from '../../../../../../constants';

const List_History: React.FC = () => {
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
        data={ListData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        disableRightSwipe
        leftActivationValue={100}
        rightActivationValue={-200}
        leftActionValue={0}
        rightActionValue={-500}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default List_History;
