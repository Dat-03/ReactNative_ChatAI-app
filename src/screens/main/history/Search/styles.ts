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
    paddingVertical: normalize(35),
    alignItems: 'center',
    justifyContent: 'center',
    gap: normalize(15),
    paddingHorizontal: normalize(45),
  },
  content: {
    paddingTop: normalize(200),
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: normalize(140),
  },
  txtBig: {
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(24),
    fontWeight: '700',
    color: colors.black1,
  },
  txtlong: {
    fontFamily: fontFamilySetup.regular,
    fontSize: normalize(18),
    fontWeight: '400',
    color: colors.black1,
    letterSpacing: 0.2,
    width: '90%',
    textAlign: 'center',
    marginTop: normalize(10),
    lineHeight: normalize(25),
  },
}));
export default useStyles;
