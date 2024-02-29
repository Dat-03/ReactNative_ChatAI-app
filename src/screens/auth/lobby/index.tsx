import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {NavigationService} from '../../..';
import {LogoIcon} from '../../../assets/images/svg';
import {routes} from '../../../constants';
import Loading_Main from './loading';
import useStyles from './styles';

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
