import {makeStyles, normalize} from '@rneui/themed';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottieStyle: {
    height: normalize(350),
    width: normalize(350),
  },
}));

export default useStyles;
