import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imgBanner: {
    width: '100%',
    height: normalize(380),
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: normalize(20),
    gap: normalize(20),
    paddingTop: normalize(50),
  },
  txtContent1: {
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(25),
    color: colors.black2,
    fontWeight: '700',
    lineHeight: normalize(40),
    textAlign: 'center',
    width: '100%',
    height: normalize(100),
  },
  txtContent2: {
    fontFamily: fontFamilySetup.regular,
    fontSize: normalize(15),
    color: colors.black2,
    fontWeight: '400',
    lineHeight: normalize(25),
    textAlign: 'center',
    width: '100%',
    height: normalize(90),
  },
  footer: {
    flexDirection: 'row',
    gap: normalize(20),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
    marginTop: normalize(60),
    borderTopWidth: 0.3,
    paddingVertical: normalize(30),
    borderColor: colors.blue2,
  },
  button1: {
    width: normalize(150),
    height: normalize(60),
    borderRadius: normalize(100),
    backgroundColor: colors.gray4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    width: normalize(150),
    height: normalize(60),
    borderRadius: normalize(100),
    backgroundColor: colors.blue1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn1: {
    color: colors.blue1,
    fontWeight: '700',
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(25),
    letterSpacing: normalize(0.2),
  },
  textBtn2: {
    color: colors.white,
    fontWeight: '700',
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(25),
    letterSpacing: normalize(0.2),
  },
}));
export default useStyles;
