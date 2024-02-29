import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {fontFamilySetup} from '../../../utils/font';
const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();
const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
  },
  modal:{
    alignItems: 'center',
    
  },
  modalView: {
    backgroundColor: colors.white,
    borderRadius: normalize(20),
    padding: normalize(35),
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: normalize(0),
      height: normalize(2),
    },
    shadowOpacity: normalize(0.25),
    shadowRadius: normalize(4),
    elevation: normalize(5),
    width: WIDTH * 0.8,
    height: HEIGHT * 0.6,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txtStatus: {
    fontSize: normalize(24),
    fontWeight: '700',
    color: colors.green,
    textAlign: 'center',
    lineHeight: normalize(35),
    fontFamily: fontFamilySetup.bold,
  },
  loadingtxt: {
    fontSize: normalize(14),
    fontWeight: '400',
    color: colors.black2,
    textAlign: 'center',
    lineHeight: normalize(25),
    fontFamily: fontFamilySetup.regular,
    width: WIDTH * 0.7,
  },
}));

export default useStyles;
