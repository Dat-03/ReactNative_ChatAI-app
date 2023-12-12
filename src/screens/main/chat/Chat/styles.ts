import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    padding: normalize(20),
  },
  header: {
    flexDirection: 'row',
  },
  txtHeader: {
    paddingHorizontal: normalize(80),
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(24),
    fontWeight: '700',
    letterSpacing: normalize(1),
    color: colors.black,
  },
  content: {
    paddingVertical: normalize(40),
    alignItems: 'center',
  },
  text: {
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(40),
    fontWeight: '700',
    letterSpacing: normalize(1),
    color: colors.black,
  },
  textsmall: {
    width: WIDTH * 0.7,
    letterSpacing: normalize(1),
    lineHeight: normalize(30),
    fontFamily: fontFamilySetup.regular,
    color: colors.black1,
  },
}));
export default useStyles;
