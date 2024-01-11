import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';

const Update_Profile: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>This is screen Update Profile</Text>
    </View>
  );
};

export default Update_Profile;
