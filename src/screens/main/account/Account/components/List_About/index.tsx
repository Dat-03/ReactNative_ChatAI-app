import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {NavigationService} from '../../../../../..';
import {routes} from '../../../../../../constants';
import {Icon} from '@rneui/themed';
import {AuthActions, getAuthEnableSignIn} from '../../../../../../redux';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {ItemListProfile} from '../List_General/components';

const List_About: React.FC = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  const handleLogout = () => {
    dispatch(AuthActions.handleLogout());
  };
  return (
    <ScrollView style={styles.viewList}>
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.HELP_CENTER)}>
          <ItemListProfile
            title="Help Center"
            name="document-text-outline"
            type="ionicon"
            color={styles.iconColor.color}
            size={50}
            rightIcon
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.PERSONAL_INFO)}>
          <ItemListProfile
            title="Privacy Policy"
            name="lock-closed-outline"
            type="ionicon"
            color={styles.iconColor.color}
            size={50}
            rightIcon
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.PERSONAL_INFO)}>
          <ItemListProfile
            title="About ChattyAI"
            name="alert-circle-outline"
            type="ionicon"
            color={styles.iconColor.color}
            size={50}
            rightIcon
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <ItemListProfile
            title={enableSignIn ? 'Logout' : 'Login'}
            name={enableSignIn ? 'log-out-outline' : 'log-in-outline'}
            type="ionicon"
            color={styles.iconColor.color}
            size={50}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default List_About;
