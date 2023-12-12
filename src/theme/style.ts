import {createTheme} from '@rneui/themed';
import {useAppSelector} from '../hooks';
import {getMode} from '../redux/selectors/thems.selector';

const mode = useAppSelector(getMode);

declare module '@rneui/themed' {
  export interface Colors {
    black1: string;
  }
}

export const theme = createTheme({
  lightColors: {
    black: '#000000',
    white: '#ffffff',
    black1:'#616161',
  },
  darkColors: {
    black: '#ffffff',
    white: '#000000',
    black1:'#ffffff',

  },
  components: {
    Button: (props, theme) => ({
      containerStyle: {
        backgroundColor: theme.colors.background,
        height: 100,
        width: 100,
      },
      titleStyle: {
        fontSize: 20,
      },
    }),
  },
  mode: mode,
});
