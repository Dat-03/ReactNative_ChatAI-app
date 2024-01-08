import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {},
  tabStyle: {
    backgroundColor: colors.blue,
  },
  containerTabView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  titleStyle: {
    color: colors.black,
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.bold,
  },
  indicatorStyle: {
    height: 3,
    backgroundColor: colors.blue3,
  },
}));

export default useStyles;
