import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    alignItems: 'center',
    paddingTop: normalize(200),
    gap: normalize(50),
    
  },
  nameApp: {
    fontSize: normalize(40),
    fontWeight: '700',
    lineHeight: normalize(50),
    color: colors.black2,
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.bold,
  },
}));
export default useStyles;
