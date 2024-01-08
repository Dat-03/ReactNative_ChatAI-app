import {TextStyle, ViewProps} from 'react-native';

export type ItemListProfileProps = {
  title?: string; // Tiêu đề
  onPressScreen?: () => void;
  colorBackground?: string;
  name?: string;
  type?: string;
  rightIcon?: boolean;
  color?: string;
  size?: number;
  switchRight?: boolean;
};