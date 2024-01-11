import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../utils/font';

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
    borderRadius: 50, // Assuming a circular avatar, adjust as needed
    overflow: 'hidden',
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
    padding: 10,
  },
  selectedImageContainer: {
    // Styles cho phần container của ảnh đã chọn
    marginBottom: 10,
  },

  changePhotoText: {
    // Styles cho văn bản thay đổi ảnh
    color: 'blue',
    marginTop: 5,
  },
}));
export default useStyles;
