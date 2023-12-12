import {View} from 'react-native';
import {Button, Text} from '@rneui/base';

import React, {FunctionComponent} from 'react';

import {LogoIcon} from '../../../../assets/images/svg';
import useStyles from './styles';

const Chat: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoIcon width={45} height={60} viewBox="0 0 2 400" />
        <Text style={styles.txtHeader}>Wibu AI</Text>
      </View>
      <View style={styles.content}>
        <LogoIcon width={'100%'} height={150} viewBox="0 0 150 200" />

        <Text style={styles.text}>Welcome to</Text>
        <Text style={styles.text}>Wibu AI 👋</Text>
        <View style={{paddingVertical:25}}>
          <Text style={styles.textsmall}>
            Start chatting with ChattyAI now.
          </Text>
          <Text style={styles.textsmall}>You can ask me anything.</Text>
        </View>
      </View>
    </View>
  );
};

export default Chat;
