import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: normalize(16),
    paddingTop: normalize(200),
  },
  txt: {
    color: colors.black2,
    fontSize: normalize(40),
    fontWeight: '700',
    fontFamily: fontFamilySetup.bold,
    textAlign: 'center',
    lineHeight: normalize(60),
    letterSpacing: normalize(1),
  },
  content: {
    paddingVertical: normalize(20),
    marginTop: normalize(40),
    gap: normalize(25),
  },
  button1: {
    width: normalize(300),
    height: normalize(60),
    borderRadius: normalize(100),
    backgroundColor: colors.blue3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    width: normalize(300),
    height: normalize(60),
    borderRadius: normalize(100),
    backgroundColor: colors.whiteDefault,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtn1: {
    color: colors.whiteDefault,
    fontSize: normalize(18),
    fontWeight: '700',
    letterSpacing: normalize(0.2),
    lineHeight: normalize(25),
  },
  txtBtn2: {
    color: colors.blue1,
    fontSize: normalize(18),
    fontWeight: '700',
    letterSpacing: normalize(0.2),
    lineHeight: normalize(25),
  },
  footer: {
    paddingVertical: normalize(30),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.white, // Thay 'yourColor' bằng màu bạn muốn sử dụng
  },
  txtOr: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  btnFooter: {
    width: normalize(100),
    height: normalize(60),
    borderRadius: normalize(100),
    backgroundColor: colors.whiteDefault,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewbtnFooter: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
}));
export default useStyles;
