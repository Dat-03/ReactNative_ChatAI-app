import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../utils/font';
import {Device} from '../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(26),
  },
  header: {
    gap: normalize(15),
  },
  txtHeader1: {
    fontSize: normalize(30),
    fontFamily: fontFamilySetup.bold,
    fontWeight: '700',
    lineHeight: normalize(50),
    color: colors.black2,
  },
  txtHeader2: {
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.regular,
    fontWeight: '400',
    lineHeight: normalize(20),
    color: colors.black2,
    letterSpacing: normalize(0.2),
  },
  iconHeader: {
    marginRight: normalize(300),
  },

  content: {},
  viewInput: {},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: normalize(50),
    paddingHorizontal: normalize(15),
    backgroundColor: colors.white2,
    marginTop: normalize(20),
    borderWidth: normalize(1),
  },
  input: {
    flex: 1,
    paddingVertical: normalize(14),
  },
  iconInput: {
    marginLeft: normalize(10),
  },
  txtTitle: {
    marginStart: normalize(10),
    color: colors.black2,
    fontSize: normalize(16),
    fontWeight: '700',
    letterSpacing: normalize(0.2),
    fontFamily: fontFamilySetup.bold,
  },
  inputphone: {
    borderColor: colors.white2,
  },
  inputCountry: {
    borderColor: colors.gray3,
    backgroundColor: colors.white2,
    borderWidth: normalize(0.3),
  },
  inputCall: {
    width: '100%',
    height: normalize(60),
    backgroundColor: colors.white2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(50),
    paddingHorizontal: normalize(30),
    flexDirection: 'row',
    borderWidth: normalize(1),
  },
  viewInput1: {
    gap: normalize(15),
    paddingTop: normalize(20),
  },
  txtTitleInput: {
    fontSize: normalize(16),
    fontWeight: '700',
    letterSpacing: normalize(0.2),
    fontFamily: fontFamilySetup.bold,
    color: colors.black2,
    lineHeight: normalize(25),
  },
  iconleft: {
    position: 'absolute',
    right: normalize(WIDTH * 0.74),
  },
  icon: {
    color: colors.black,
  },
  viewTitle: {
    gap: normalize(15),
    padding: normalize(15),
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
    color: colors.black2,
    fontSize: normalize(18),
    fontWeight: '700',
    lineHeight: normalize(32),
    paddingHorizontal: normalize(4),
  },
  dropdownStyle: {
    marginTop: normalize(130),
    backgroundColor: colors.white2,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    gap: normalize(20),
    paddingVertical: normalize(30),
    justifyContent: 'flex-end',
  },
  btnNext: {
    width: normalize(150),
    height: normalize(65),
    backgroundColor: colors.blue1,
    borderRadius: normalize(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtNext: {
    color: colors.white,
    fontSize: normalize(18),
    fontWeight: '700',
    letterSpacing: normalize(0.2),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(25),
  },
  btnSkip: {
    width: normalize(150),
    height: normalize(65),
    backgroundColor: colors.gray4,
    borderRadius: normalize(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtSkip: {
    color: colors.blue1,
    fontSize: normalize(18),
    fontWeight: '700',
    letterSpacing: normalize(0.2),
    fontFamily: fontFamilySetup.bold,
  },
}));
export default useStyles;
