import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {fontFamilySetup} from '../../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  button: {
    width: '100%',
    height: HEIGHT * 0.1,
    backgroundColor: colors.gray2,
    justifyContent: 'space-between',
    padding: normalize(16),
    borderRadius: normalize(14),
    alignItems: 'center',
    marginVertical: normalize(12),
    flexDirection: 'row',
  },
  viewtxt: {
    flexDirection: 'row',
    gap: normalize(10),
    paddingVertical: normalize(10),
  },
  txtTitle: {
    color: colors.black2,
    fontFamily: fontFamilySetup.bold,
    fontWeight: '700',
    letterSpacing: normalize(0.1),
    fontSize: normalize(15),
    width: normalize(275),
  },
  txtDate: {
    color: colors.black1,
    fontSize: normalize(10),
    fontWeight: '400',
    letterSpacing: normalize(0.1),
    fontFamily: fontFamilySetup.regular,
  },
}));
export default useStyles;