import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();
const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(20),
  },
  textHeader: {
    color: colors.black2,
    fontSize: normalize(24),
    fontWeight: '700',
    fontFamily: fontFamilySetup.bold,
    paddingHorizontal: normalize(80),
  },
  icon: {
    color: colors.black,
  },
  tabStyle: {
    backgroundColor: colors.whiteDefault,
    borderBottomWidth: 0,
  },
  titleStyle: {
    color: colors.black,
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
  },
}));
export default useStyles;
