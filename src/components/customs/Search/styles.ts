import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {fontFamilySetup} from '../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    width: '100%',
    borderStyle: 'solid',
    borderColor: colors.blue1,
    height: normalize(65),
    borderRadius: 16,
    justifyContent: 'center',
  },
  inputStyle: {
    fontSize: normalize(18),
    lineHeight: normalize(20),
    fontFamily: fontFamilySetup.medium,
    color: colors.black,
    marginLeft: normalize(5),
  },
  backGroundInputNoFocus: {
    backgroundColor: colors.gray1,
    borderWidth: 0,
  },
  backGroundInputFocus: {
    backgroundColor: colors.white1,
    borderWidth: 1,
  },
  clearIcon: {
    color: colors.black,
  },
  cancelIcon: {
    color: colors.black,
  },
}));

export default useStyles;
