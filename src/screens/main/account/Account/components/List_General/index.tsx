import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {NavigationService} from '../../../../../..';
import {routes} from '../../../../../../constants';
import {AuthActions, ThemeActions, getMode} from '../../../../../../redux';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {ItemListProfile} from './components';

const List_General = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const mode = useAppSelector(getMode);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleLogout = () => {
    dispatch(AuthActions.handleLogout());
  };
  const handleTheme = () => {
    if (mode === 'light') {
      dispatch(ThemeActions.setTheme('dark'));
      setTimeout(() => {
        setIsEnabled(previousState => !previousState);
      }, 1000);
    } else {
      dispatch(ThemeActions.setTheme('light'));
      setTimeout(() => {
        setIsEnabled(previousState => !previousState);
      }, 1000);
    }
  };
  return (
    <ScrollView style={styles.viewList}>
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.PERSONAL_INFO)}>
          <ItemListProfile
            title="Personal Info"
            name="person-outline"
            type="ionicon"
            color={styles.iconColor.color}
            size={50}
            rightIcon
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.SECURITY)}>
          <ItemListProfile
            title="Security"
            name="shield-checkmark-outline"
            type="ionicon"
            color={styles.iconColor.color}
            size={50}
            rightIcon
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.LANGUAGE)}>
          <ItemListProfile
            title="Language"
            name="language-outline"
            type="ionicon"
            color={styles.iconColor.color}
            size={50}
            rightIcon
          />
        </TouchableOpacity>

        <ItemListProfile
          title="Dark Mode"
          name="eye-outline"
          type="ionicon"
          color={styles.iconColor.color}
          size={50}
          switchRight
        />

        {/* <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.LANGUAGE)}>
          <View style={styles.viewItemBtn}>
            <View style={styles.viewIconLeftText}>
              <Icon
                name="customerservice"
                type="antdesign"
                color="#F89300"
                size={styles.iconSize.fontSize}
                style={styles.viewIconLeft}
              />
              <Text style={styles.textBtn}>Help Center</Text>
            </View>

            <Icon
              name="chevron-forward-outline"
              type="ionicon"
              color={styles.iconColor.color}
              size={19}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.LANGUAGE)}>
          <View style={styles.viewItemBtn}>
            <View style={styles.viewIconLeftText}>
              <Icon
                name="book"
                type="font-awesome"
                color="#F89300"
                size={styles.iconSize.fontSize}
                style={styles.viewIconLeft}
              />
              <Text style={styles.textBtn}>About this app</Text>
            </View>

            <Icon
              name="chevron-forward-outline"
              type="ionicon"
              color={styles.iconColor.color}
              size={19}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <View style={styles.viewItemBtn}>
            <View style={styles.viewIconLeftText}>
              <Icon
                name={'door-open'}
                type="font-awesome-5"
                color="#F89300"
                size={styles.iconSize.fontSize}
                style={styles.viewIconLeft}
              />
              <Text style={styles.textBtn}>Logout</Text>
            </View>

            <Icon
              name="log-out-outline"
              type="ionicon"
              color={styles.iconColor.color}
              size={19}
            />
          </View>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

export default List_General;
