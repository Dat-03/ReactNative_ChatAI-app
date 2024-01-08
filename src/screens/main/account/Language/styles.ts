import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();
const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: normalize(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHeader: {
    color: colors.black2,
    fontSize: normalize(24),
    fontWeight: '700',
    fontFamily: fontFamilySetup.bold,
    paddingHorizontal: normalize(90),
  },
  icon: {
    color: colors.black,
  },
}));
export default useStyles;
