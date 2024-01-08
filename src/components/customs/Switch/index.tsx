import React, {useState} from 'react';
import {View, Text} from 'react-native';
import useStyles from '../Switch/styles';
import {SwitchCustomProps} from '../Switch/types';

import {Switch} from '@rneui/themed';

export const Switch_c: React.FunctionComponent<SwitchCustomProps> = props => {
  const styles = useStyles();
  const [checked, setChecked] = useState(false);
  const toggleSwitch = () => {
    setChecked(!checked);
  };
  return (
    <View style={styles.container}>
      {props.title && <Text style={styles.text}>{props.title}</Text>}
      <Switch
        trackColor={{false: '#EEEEEE', true: '#7584F4'}}
        thumbColor={checked ? '#ffffff' : '#ffffff'}
        ios_backgroundColor="#3e3e3e"
        value={checked}
        onValueChange={value => setChecked(value)}
        style={{transform: [{scaleX: 1.3}, {scaleY: 1.3}]}} // size adjustment
      />
    </View>
  );
};

export default Switch_c;
