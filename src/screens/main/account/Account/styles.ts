import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(30),
  },
  header: {
    flexDirection: 'row',
  },
  txtHeader: {
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(24),
    fontWeight: '700',
    letterSpacing: normalize(1),
    color: colors.black,
    paddingHorizontal: normalize(68),
  },
  content: {},
  avatar: {
    width: WIDTH * 0.22,
    height: HEIGHT * 0.1,
    borderRadius: normalize(99),
    backgroundColor: colors.gray,
  },
  viewUser: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(20),
  },
  btnUser: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: normalize(75),
  },
  nameUser: {
    color: colors.black2,
    fontSize: normalize(20),
    fontWeight: '700',
    fontFamily: fontFamilySetup.bold,
  },
  email: {
    color: colors.black1,
    fontSize: normalize(14),
    fontWeight: '500',
    letterSpacing: normalize(0.2),
  },
  general: {},
  viewgeneral: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: normalize(15),
  },
  line: {
    borderWidth: 0.5,
    width: '80%',
    height: normalize(1),
    marginStart: normalize(10),
    color: colors.gray3,
  },
  txtTitle: {
    fontSize: normalize(14),
    fontWeight: '600',
    fontFamily: fontFamilySetup.medium,
    color: colors.gray3,
    letterSpacing: normalize(0.2),
    lineHeight: normalize(20),
  },
}));
export default useStyles;
