import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';
const FacebookIcon = (props: SvgProps) => (
  <Svg
    //@ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        d="M12.668 0c-6.628 0-12 5.372-12 12s5.372 12 12 12 12-5.372 12-12-5.372-12-12-12Z"
      />
      <Path
        fill="#fff"
        d="M14.396 16.858h3.257l.511-3.308h-3.768V11.74c0-1.374.45-2.592 1.735-2.592h2.065V6.262c-.363-.05-1.13-.156-2.58-.156-3.03 0-4.805 1.6-4.805 5.243v2.201H7.697v3.308h3.113v9.093c.617.092 1.242.155 1.883.155.58 0 1.145-.053 1.703-.128v-9.12Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={4.264}
        x2={22.637}
        y1={3.596}
        y2={21.969}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#2AA4F4" />
        <Stop offset={1} stopColor="#007AD9" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M.668 0h24v24h-24z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default FacebookIcon;
