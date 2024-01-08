import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: normalize(24),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: colors.black,
  },
  textHeader: {
    color: colors.black2,
    fontSize: normalize(24),
    fontWeight: '700',
    fontFamily: fontFamilySetup.bold,
    paddingLeft: normalize(90),
  },
  content: {
    paddingVertical: normalize(30),
    gap: normalize(30),
  },
  viewdevice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {},
  buttonBig: {
    width: '100%',
    height: HEIGHT * 0.075,
    backgroundColor: colors.blue2,
    borderRadius: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtbutton: {
    fontSize: normalize(16),
    fontWeight: '700',
    fontFamily: fontFamilySetup.bold,
    color: colors.blue1,
  },
  text:{
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.medium,
    color: colors.black,
    width: '82%',
    fontWeight: 'bold',
  }
}));
export default useStyles;
