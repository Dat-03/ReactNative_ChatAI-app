import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    padding: normalize(20),
    backgroundColor: colors.white,
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
  footer:{

  },
  button:{
    width: '100%',
    height: HEIGHT * 0.07,
    borderRadius: normalize(100),
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtbutton:{
    fontFamily: fontFamilySetup.regular,
    fontSize: normalize(18),
    fontWeight: '700',
    letterSpacing: normalize(0.2),
    color: colors.whiteDefault,
  }
}));
export default useStyles;
