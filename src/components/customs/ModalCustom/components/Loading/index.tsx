import LottieView from 'lottie-react-native';
import React from 'react';
import {View} from 'react-native';
import useStyles from './styles';
import {jsonFiles} from '../../../../../assets/json';

const Loading_modal = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={styles.lottieStyle}
        source={jsonFiles.loadingMain}
      />
    </View>
  );
};

export default Loading_modal;
