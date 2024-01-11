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
    padding: normalize(24),
    alignItems: 'center',
  },
  txtHeader: {
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(24),
    fontWeight: '700',
    letterSpacing: normalize(1),
    color: colors.black,
    paddingHorizontal: normalize(60),
  },
}));
export default useStyles;