import {createTheme} from '@rneui/themed';
import {useAppSelector} from '../hooks';
import {getMode} from '../redux/selectors/thems.selector';

const mode = useAppSelector(getMode);

declare module '@rneui/themed' {
  export interface Colors {
    black1: string;
    black2: string;
    blue: string;
    blue1: string;
    blue2: string;
    blue3: string;
    blue4: string;
    whiteDefault: string;
    white1: string;
    white2: string;
    blackDefault: string;
    gray: string;
    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
    gray5: string;
  }
}

export const theme = createTheme({
  lightColors: {
    black: '#000000',
    white: '#ffffff',
    black1: '#616161',
    black2: '#212121',
    white2: '#F7F8FA',
    blue: '#7788F5',
    blue1: '#7E92F8',
    blue2: '#E0E7F2',
    blue3: '#7280F3',
    blue4: '#201D67',
    white1: '#F1F3FE',
    whiteDefault: '#ffffff',
    blackDefault: '#000000',
    gray: '#BDBDBD',
    gray1: '#F5F5F5',
    gray2: '#FAFAFA',
    gray3: '#9E9E9E',
    gray4: '#F4F4F4',
    gray5: '#EEEEEE',
  },
  darkColors: {
    black: '#ffffff',
    white: '#000000',
    black1: '#ffffff',
    black2: '#ffffff',
    blue1: '#7E92F8',
    gray3: '#ffffff',
    white2: '#F7F8FA',

    blue: '#7788F5',
    blue2: '#E0E7F2',
    blue3: '#7280F3',

    white1: '#F1F3FE',

    whiteDefault: '#ffffff',
    blackDefault: '#000000',
    gray: '#BDBDBD',
    gray1: '#F5F5F5',
    gray2: '#FAFAFA',
    gray4: '#F4F4F4',
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
