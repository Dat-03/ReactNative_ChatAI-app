import LottieView from 'lottie-react-native';
import React from 'react';
import {View} from 'react-native';
import {jsonFiles} from '../../../../assets/json';
import useStyles from './styles';

const Loading_Main = () => {
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

export default Loading_Main;
