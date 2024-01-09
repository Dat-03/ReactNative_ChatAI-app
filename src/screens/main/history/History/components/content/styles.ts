import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {fontFamilySetup} from '../../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({

  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    backgroundColor: colors.gray2,
    borderRadius: 5,
    height: 60,
    margin: 5,
    marginBottom: 15,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  rowFrontVisible: {},
  rowBack: {
    flexDirection: 'row',
    paddingLeft: normalize(15),
    margin: normalize(5),
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: '#1f65ff',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  trash: {
    height: 25,
    width: 25,
    marginRight: 7,
  },
  title: {
    color: colors.blackDefault,
    fontFamily: fontFamilySetup.bold,
    fontWeight: '700',
    letterSpacing: normalize(0.1),
    fontSize: normalize(15),
    width: normalize(275),
  },
  details: {
    color: colors.blackDefault,
    fontSize: normalize(10),
    fontWeight: '400',
    letterSpacing: normalize(0.1),
    fontFamily: fontFamilySetup.regular,
  },
  txtDate: {
    flexDirection: 'row',
    gap: normalize(10),
    alignItems: 'center',
  },
  viewTxt: {
    gap: normalize(5),
    padding: normalize(10),
  },
}));
export default useStyles;
