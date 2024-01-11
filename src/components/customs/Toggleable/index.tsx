import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import useStyles from '../Toggleable/styles';
import {ToggleableViewProps} from '../Toggleable/types';

const Toggleable: React.FC<ToggleableViewProps> = props => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const styles = useStyles();

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.Name}>{props.title}</Text>
        {isContentVisible && (
          <>
            <View style={styles.line}></View>
            <Text style={styles.content}>{props.content}</Text>
          </>
        )}
      </View>
      <TouchableOpacity style={styles.iconContainer} onPress={toggleContent}>
        {isContentVisible ? (
          <Icon name="sort-up" type="font-awesome" style={styles.icon} />
        ) : (
          <Icon name="sort-down" type="font-awesome" style={styles.icon} />
        )}
      </TouchableOpacity>
    </View>
  );
};
export default Toggleable;
