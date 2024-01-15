import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: normalize(24),
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
    fontWeight: '400',
    lineHeight: normalize(25),
    color: colors.black2,
    letterSpacing: normalize(0.2),
  },
  iconHeader: {
    marginRight: normalize(300),
  },
  content:{
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
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  btn: {
    borderRadius: normalize(50),
    paddingVertical: normalize(15),
    backgroundColor: colors.blue1,
    marginTop: normalize(20),
  },
  txtBtn: {
    textAlign: 'center',
    color: colors.white,
    fontSize: normalize(16),
    fontWeight: '700',
    letterSpacing: normalize(0.2),
    fontFamily: fontFamilySetup.bold,
  },
}));
export default useStyles;
