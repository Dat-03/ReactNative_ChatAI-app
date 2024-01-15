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
    fontSize: normalize(32),
    fontFamily: fontFamilySetup.bold,
    fontWeight: '700',
    lineHeight: normalize(50),
    color: colors.black2,
    letterSpacing: normalize(0.2),
  },
  txtHeader2: {
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.regular,
    fontWeight: '400',
    lineHeight: normalize(25),
    color: colors.black2,
    letterSpacing: normalize(0.2),
  },

  content: {
    paddingVertical: normalize(20),
    gap: normalize(25),
  },
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
  viewBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(10),
  },
  txtBox: {
    color: colors.black2,
    fontSize: normalize(16),
    fontWeight: '600',
    letterSpacing: normalize(0.2),
    fontFamily: fontFamilySetup.regular,
  },
  footer: {
    flex: 1,
  },
  viewtxtFooter: {
    flexDirection: 'row',
    gap: normalize(10),
    paddingVertical: normalize(15),
    justifyContent: 'center',
  },
  txtFooter1: {
    color: colors.black2,
    fontSize: normalize(16),
    fontWeight: '500',
    letterSpacing: normalize(0.2),
    lineHeight: normalize(25),
    fontFamily: fontFamilySetup.medium,
    textAlign: 'center',
  },
  txtFooter2: {
    color: colors.blue4,
    fontSize: normalize(16),
    fontWeight: '700',
    letterSpacing: normalize(0.2),
    lineHeight: normalize(25),
    fontFamily: fontFamilySetup.medium,
  },
  txtFooter3: {
    color: colors.black2,
    fontSize: normalize(16),
    fontWeight: '500',
    letterSpacing: normalize(0.2),
    lineHeight: normalize(25),
    fontFamily: fontFamilySetup.medium,
    textAlign: 'center',
  },
  txtFooter4: {
    color: colors.blue4,
    fontSize: normalize(16),
    fontWeight: '700',
    letterSpacing: normalize(0.2),
    lineHeight: normalize(25),
    fontFamily: fontFamilySetup.medium,
    textAlign: 'center',
  },
  btnFooter: {
    width: normalize(100),
    height: normalize(60),
    borderRadius: normalize(100),
    backgroundColor: colors.whiteDefault,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: normalize(0.3),
  },
  viewbtnFooter: {
    flexDirection: 'row',
    gap: normalize(15),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: normalize(20),
  },
  buttonBig: {
    width: '100%',
    height: normalize(60),
    borderRadius: normalize(100),
    backgroundColor: colors.blue3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtnBig: {
    color: colors.white,
    fontSize: normalize(18),
    fontWeight: '700',
    letterSpacing: normalize(0.2),
    lineHeight: normalize(25),
  },
  viewButtonbig: {
    borderTopWidth: normalize(0.8),
    paddingVertical: normalize(20),
    borderColor: colors.blue2,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.gray1, // Thay 'yourColor' bằng màu bạn muốn sử dụng
  },
  txtOr: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
}));
export default useStyles;
