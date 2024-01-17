import {makeStyles, normalize} from '@rneui/themed';
import { fontFamilySetup } from '../../../../../utils/font';

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
  btnAvatar: {
    width: normalize(100),
    height: normalize(100),
    borderRadius: normalize(50),
    borderWidth: normalize(1),
    borderColor: colors.black2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedImage: {
    width: normalize(100),
    height: normalize(100),
    borderRadius: normalize(50),
  },
  avatarContainer: {
    position: 'relative',
    borderRadius: normalize(50),
    overflow: 'hidden',
  },
  editIconContainer: {
    position: 'absolute',
    bottom: normalize(0),
    right: normalize(0),
    backgroundColor: 'transparent',
    padding: normalize(10),
  },
  selectedImageContainer: {
    marginBottom: normalize(10),
  },
 
}));
export default useStyles;
