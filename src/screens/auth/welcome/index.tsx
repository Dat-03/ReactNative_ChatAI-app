import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AppleIcon, FacebookIcon, GoogleIcon} from '../../../assets/images/svg';
import useStyles from './styles';
import {NavigationService} from '../../..';
import {routes} from '../../../constants';
const Welcome: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0.1, y: 0.9}}
        end={{x: 1.2, y: 0}}
        colors={['#BEE2FE', '#F8E0E3', '#B9D0FE', '#999DFE']}
        style={styles.linearGradient}>
        <Text style={styles.txt}>Welcome to Wibu AI 👋</Text>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => NavigationService.navigate(routes.SIGN_IN)}>
            <Text style={styles.txtBtn1}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => NavigationService.navigate(routes.SIGN_UP)}>
            <Text style={styles.txtBtn2}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <View style={styles.txtOr}>
            <View style={styles.line}></View>
            <Text style={{marginHorizontal: 10}}>or continue with</Text>
            <View style={styles.line}></View>
          </View>
          <View style={styles.viewbtnFooter}>
            <TouchableOpacity style={styles.btnFooter}>
              <GoogleIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFooter}>
              <AppleIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFooter}>
              <FacebookIcon />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Welcome;
