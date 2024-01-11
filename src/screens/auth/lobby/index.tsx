import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import useStyles from './styles';
import {LogoIcon} from '../../../assets/images/svg';
import Loading_Main from './loading';
import {useNavigation} from '@react-navigation/native';
import {NavigationService} from '../../..';
import {routes} from '../../../constants';

const Lobby: React.FC = () => {
  const styles = useStyles();
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      NavigationService.navigate(routes.ONBOARD);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <LogoIcon />
        <Text style={styles.nameApp}>Wibu AI</Text>
      </View>
      <Loading_Main />
    </View>
  );
};

export default Lobby;
