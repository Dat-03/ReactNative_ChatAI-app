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
  iconHeader: {
    color: colors.black,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtHeader: {
    color: colors.black1,
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(24),
    fontWeight: '700',
    letterSpacing: normalize(1),
    paddingHorizontal: normalize(90),
  },
  content: {
    
  },
}));
export default useStyles;
