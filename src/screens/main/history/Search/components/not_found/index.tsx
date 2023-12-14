import LottieView from 'lottie-react-native';
import React from 'react';
import {View} from 'react-native';
import {jsonFiles} from '../../../../../../assets/json';
import useStyles from './styles';

const Not_found = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={styles.lottieStyle}
        source={jsonFiles.not_found}
      />
    </View>
  );
};

export default Not_found;
