import {FunctionComponent, useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import SplashScreen from 'react-native-lottie-splash-screen';
import Toast from 'react-native-toast-message';
import {RootNavigation, ThemeContext} from './src';
import Alert from './src/components/customs/Alert';
import Loading from './src/components/shared/Loading';
import {toastConfig} from './src/utils/toastConfig';
import {StatusBar} from 'react-native';

const App: FunctionComponent = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle('dark-content');

    return () => {
      StatusBar.setTranslucent(false);
      StatusBar.setBackgroundColor('white');
      StatusBar.setBarStyle('dark-content');
    };
  }, []);
  return (
    <SafeAreaProvider
      initialMetrics={{
        frame: {x: 0, y: 0, width: 0, height: 0},
        insets: {top: 0, left: 0, right: 0, bottom: 0},
      }}>
      <ThemeContext>
        <GestureHandlerRootView style={{flex: 1}}>
          {/* ALERT */}
          <Alert />
          {/* LOADING API */}
          <Loading />
          {/* MAIN APP */}
          <RootNavigation />
          <Toast config={toastConfig} topOffset={20} visibilityTime={2500} />

          {/* Modal progressing when upgrade version of app */}
        </GestureHandlerRootView>
      </ThemeContext>
    </SafeAreaProvider>
  );
};

export default App;
