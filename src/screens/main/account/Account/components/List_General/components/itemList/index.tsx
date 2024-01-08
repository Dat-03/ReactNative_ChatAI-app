import {Avatar, Icon, Switch} from '@rneui/themed';
import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import useStyles from './styles';
import {ItemListProfileProps} from './types';
import {useAppDispatch, useAppSelector} from '../../../../../../../../hooks';
import {ThemeActions, getMode} from '../../../../../../../../redux';

const ItemListProfile: React.FC<ItemListProfileProps> = props => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const mode = useAppSelector(getMode);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
    <View style={styles.viewHeader}>
      <View style={styles.viewicon}>
        <Avatar
          size={props.size}
          rounded
          icon={{name: props.name, type: props.type, color: props.color}}
          containerStyle={{backgroundColor: props.colorBackground}}
        />
        {<Text style={styles.txtCircle}>{props.title}</Text>}
      </View>
      {props.switchRight && (
        <View style={styles.viewBtn}>
          <TouchableOpacity
            style={[styles.outter, isEnabled ? styles.on : styles.off]}
            onPress={handleTheme}
            activeOpacity={3}>
            <View style={isEnabled ? styles.innerON : styles.innerOFF} />
          </TouchableOpacity>
        </View>
      )}
      {props.rightIcon && (
        <Icon
          style={styles.rightIcon}
          name="right"
          type="antdesign"
          size={18}
        />
      )}
    </View>
  );
};

export default ItemListProfile;
