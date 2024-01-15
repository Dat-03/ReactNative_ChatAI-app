import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../utils/font';

const useStyles = makeStyles(({colors, spacing}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: normalize(24),
  },
  iconHeader: {
    marginRight: normalize(300),
  },
  header: {
    gap: normalize(15),
  },
  txtHeader1: {
    fontSize: normalize(25),
    fontFamily: fontFamilySetup.bold,
    fontWeight: '700',
    lineHeight: normalize(50),
    color: colors.black2,
    letterSpacing: normalize(0.2),
  },
  txtHeader2: {
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.regular,
    fontWeight: '200',
    lineHeight: normalize(25),
    color: colors.black2,
    letterSpacing: normalize(0.2),
  },
  content: {
    paddingVertical: normalize(20),
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otpInput: {
    width: normalize(70),
    height: normalize(70),
    borderWidth: normalize(1),
    borderColor: colors.gray5,
    textAlign: 'center',
    fontSize: normalize(20),
    borderRadius: normalize(10),
    backgroundColor: colors.gray2,
  },
  viewtxtContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: normalize(40),
    gap: normalize(16),
  },
  timerText: {
    color: colors.black2,
    fontSize: normalize(18),
    fontWeight: '500',
    fontFamily: fontFamilySetup.medium,
    letterSpacing: normalize(0.2),
    lineHeight: normalize(25),
  },
  boldText: {
    fontSize: normalize(18),
    fontWeight: '700',
    fontFamily: fontFamilySetup.bold,
    letterSpacing: normalize(0.2),
    lineHeight: normalize(25),
    color: colors.blue1,
  },

  viewTimetxt: {
    flexDirection: 'row',
    gap: normalize(5),
    alignItems: 'center',
    justifyContent: 'center',
    width: normalize(300),
  },
  txtReceive: {
    fontSize: normalize(18),
    color: colors.black2,
    fontWeight: '500',
    fontFamily: fontFamilySetup.medium,
    letterSpacing: normalize(0.2),
    lineHeight: normalize(25),
  },
}));
export default useStyles;
