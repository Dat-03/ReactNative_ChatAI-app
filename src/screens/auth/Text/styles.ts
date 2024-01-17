import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: normalize(24),
  },
  input: {
    width: '100%',
    height: normalize(60),
    backgroundColor: colors.white2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(50),
    paddingHorizontal: normalize(20),
    flexDirection: 'row',
    marginTop: normalize(50),
  },
  inputphone: {
    borderColor: colors.white2,
  },
  inputCountry: {
    borderColor: colors.gray3,
    backgroundColor: colors.white2,
    borderWidth: normalize(0.3),
  },
  view1:{
    width: '100%',
    height: normalize(60),
    borderWidth: normalize(0.3),
    borderColor: colors.gray3,
    marginTop: normalize(50),
    gap: normalize(10),
  }
}));
export default useStyles;
