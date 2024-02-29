import LottieView from 'lottie-react-native';
import React from 'react';
import {View} from 'react-native';
import useStyles from './styles';
import {jsonFiles} from '../../../../../assets/json';

const Failed_modal: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={styles.lottieStyle}
        source={jsonFiles.failed}
      />
    </View>
  );
};

export default Failed_modal;
