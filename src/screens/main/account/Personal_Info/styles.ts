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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textHeader: {
    color: colors.black2,
    fontSize: normalize(24),
    fontWeight: '700',
    fontFamily: fontFamilySetup.bold,
  },
  avatar: {
    paddingVertical: normalize(40),
  },
  content: {},
  txtInput: {
    width: '100%',
    height: normalize(60),
    borderRadius: normalize(50),
    backgroundColor: colors.white2,
    paddingHorizontal: normalize(20),
  },
  title: {
    color: colors.black2,
    fontSize: normalize(16),
    fontWeight: '700',
    fontFamily: fontFamilySetup.bold,
  },
  viewTitle: {
    flexDirection: 'row',
    gap: normalize(15),
    padding: normalize(15),
  },
  icon: {
    color: colors.black,
  },
  btnDropdown: {
    width: '100%',
    height: normalize(60),
    borderRadius: normalize(50),
    backgroundColor: colors.white2,
    alignItems: 'center',
  },
  txtDropdown: {
    textAlign: 'left',
    paddingHorizontal: normalize(20),
  },
  iconleft: {
    position: 'absolute',
    right: normalize(WIDTH * 0.74),
  },

  viewInput: {
    width: '100%',
    height: normalize(60),
    borderRadius: normalize(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white2,

    paddingHorizontal: normalize(20),
  },
  input: {
    width: '50%',
    height: normalize(60),
    paddingHorizontal: normalize(5),
  },
  viewcontent: {
    flexDirection: 'row',
    padding: normalize(10),
  },
}));
export default useStyles;
