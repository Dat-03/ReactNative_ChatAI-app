import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import Search_c from '../../../../components/customs/Search';
import {Icon} from '@rneui/themed';
import {NavigationService} from '../../../..';
import {routes} from '../../../../constants';
import Not_found from './components/not_found';

const Search_history: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-back-outline"
          type="ionicon"
          onPress={() => NavigationService.goBack()}
        />
        <Search_c />
      </View>
      <View style={styles.content}>
        <Not_found />
        <View style={styles.title}>
          <Text style={styles.txtBig}>Not Found</Text>
          <Text style={styles.txtlong}>
            We're sorry, the keyword you were looking for could not be found.
            Please search with another keywords.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Search_history;
