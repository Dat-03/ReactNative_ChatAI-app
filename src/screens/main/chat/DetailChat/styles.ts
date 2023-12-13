import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';
import {color} from '@rneui/base';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  iconHeader: {
    color: colors.black,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(20),
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
    paddingTop: normalize(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtContent: {
    color: colors.gray,
    fontFamily: fontFamilySetup.bold,
    fontWeight: '700',
    fontSize: normalize(24),
    lineHeight: normalize(38),
    paddingVertical: normalize(20),
  },
  btn: {
    width: '100%',
    height: HEIGHT * 0.1,
    backgroundColor: colors.gray1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(16),
  },
  txtButton: {
    color: colors.gray,
    fontFamily: fontFamilySetup.medium,
    fontWeight: '500',
    fontSize: normalize(13),
    lineHeight: normalize(25),
    letterSpacing: normalize(0.2),
  },
  viewbtnContent: {
    alignItems: 'center',
    gap: normalize(20),
    paddingHorizontal: normalize(20),
  },
  footer: {
    marginVertical: normalize(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: normalize(1),
    borderColor: colors.gray1,
    paddingHorizontal: normalize(20),
  },
  input: {
    backgroundColor: colors.gray1,
    width: '75%',
    height: HEIGHT * 0.08,
    borderRadius: normalize(16),
    paddingHorizontal: normalize(20),
  },
}));
export default useStyles;
