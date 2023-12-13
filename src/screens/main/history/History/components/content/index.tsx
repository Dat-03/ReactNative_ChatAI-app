import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import useStyles from './styles';
import {Icon} from '@rneui/themed';

const List_History: React.FC = () => {
  const styles = useStyles();

  const renderListItem = ({item}: {item: ListItem}) => (
    <TouchableOpacity style={styles.button}>
      <View>
        <Text style={styles.txtTitle} numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Text>
        <View style={styles.viewtxt}>
          <Text style={styles.txtDate}>{item.date}</Text>
          <Text style={styles.txtDate}>-</Text>
          <Text style={styles.txtDate}>{item.time}</Text>
        </View>
      </View>
      <Icon name="chevron-forward-outline" type="ionicon" />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderListItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default List_History;

interface ListItem {
  id: string;
  title: string;
  date: string;
  time: string;
}

const data: ListItem[] = [
  {
    id: '1',
    title: 'I weigh 70 kg, I want a diet plan to',
    date: '29 Dec 2023',
    time: '09:41 AM',
  },
  {
    id: '2',
    title: 'I weigh 70 kg, I want a diet plan to',
    date: '29 Dec 2023',
    time: '09:41 AM',
  },
  {
    id: '3',
    title: 'I weigh 70 kg, I want a diet plan to',
    date: '29 Dec 2023',
    time: '09:41 AM',
  },
  {
    id: '4',
    title: 'I weigh 70 kg, I want a diet plan to',
    date: '29 Dec 2023',
    time: '09:41 AM',
  },
  {
    id: '5',
    title: 'I weigh 70 kg, I want a diet plan to',
    date: '29 Dec 2023',
    time: '09:41 AM',
  },
  {
    id: '6',
    title: 'I weigh 70 kg, I want a diet plan to',
    date: '29 Dec 2023',
    time: '09:41 AM',
  },
  {
    id: '7',
    title: 'I weigh 70 kg, I want a diet plan to',
    date: '29 Dec 2023',
    time: '09:41 AM',
  },
  {
    id: '8',
    title: 'I weigh 70 kg, I want a diet plan to',
    date: '29 Dec 2023',
    time: '09:41 AM',
  },
  {
    id: '9',
    title: 'I weigh 70 kg, I want a diet plan to',
    date: '29 Dec 2023',
    time: '09:41 AM',
  },
  {
    id: '10',
    title: 'I weigh 70 kg, I want a diet plan to',
    date: '29 Dec 2023',
    time: '09:41 AM',
  },
  {
    id: '11',
    title: 'I weigh 70 kg, I want a diet plan to',
    date: '29 Dec 2023',
    time: '09:41 AM',
  },
  {
    id: '12',
    title: 'I weigh 70 kg, I want a diet plan to',
    date: '29 Dec 2023',
    time: '09:41 AM',
  },
];
