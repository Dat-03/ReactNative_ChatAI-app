import * as React from 'react';
import Svg, {
  SvgProps,
  Circle,
  Path,
  G,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const ModalSucces = (props: SvgProps) => (
  <Svg
    //@ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    width={186}
    height={180}
    fill="none"
    {...props}>
    <Circle cx={178.467} cy={27.5} r={7.5} fill="url(#a)" />
    <Circle cx={20.033} cy={10} r={10} fill="url(#b)" />
    <Circle cx={10.033} cy={133} r={5} fill="url(#c)" />
    <Circle cx={165.533} cy={160.5} r={2.5} fill="url(#d)" />
    <Circle cx={106.533} cy={4.5} r={2.5} fill="url(#e)" />
    <Circle cx={62.533} cy={176.5} r={3.5} fill="url(#f)" />
    <Circle cx={122.033} cy={171} r={1} fill="url(#g)" />
    <Circle cx={170.533} cy={110.5} r={2.5} fill="url(#h)" />
    <Circle cx={1.033} cy={75} r={1} fill="url(#i)" />
    <Path
      fill="#EAEEF9"
      d="M98.178 150.283c32.392 0 58.654-26.261 58.654-58.77 0-32.508-26.377-58.77-58.654-58.77-32.393 0-58.655 26.262-58.655 58.77 0 32.509 26.262 58.77 58.655 58.77ZM153.013 52.989a4.743 4.743 0 1 0 0-9.487 4.743 4.743 0 0 0 0 9.487ZM159.954 34.479a3.24 3.24 0 1 0 0-6.479 3.24 3.24 0 0 0 0 6.479ZM42.645 52.873a3.24 3.24 0 1 0 0-6.479 3.24 3.24 0 0 0 0 6.48ZM29.016 122.897a6.015 6.015 0 1 0 0-12.03 6.015 6.015 0 0 0 0 12.03Z"
    />
    <G filter="url(#j)">
      <Path
        fill="url(#k)"
        d="M144.988 129.86H51.366c-4.304 0-7.801-3.498-7.801-7.802V62.065a7.807 7.807 0 0 1 7.801-7.802h93.622c4.304 0 7.801 3.498 7.801 7.802v60.262c-.269 4.035-3.766 7.533-7.801 7.533Z"
      />
    </G>
    <Path
      fill="url(#l)"
      fillRule="evenodd"
      d="M129.01 97.799h11.702c4.576 0 7.639 3.212 7.639 7.99v11.028c0 4.764-3.063 7.976-7.639 7.976H129.01c-4.575 0-7.653-3.212-7.653-7.976v-11.028c0-4.778 3.078-7.99 7.653-7.99Zm5.074 17.532 6.411-6.411a1.19 1.19 0 0 0 0-1.674 1.19 1.19 0 0 0-1.674 0l-5.574 5.575-2.362-2.362a1.188 1.188 0 0 0-1.673 0 1.188 1.188 0 0 0 0 1.673l3.212 3.199c.229.229.526.337.823.337.311 0 .608-.108.837-.337Z"
      clipRule="evenodd"
    />
    <Rect
      width={16.213}
      height={5.961}
      x={60.607}
      y={57.028}
      fill="#D8DDEB"
      rx={1}
    />
    <Rect
      width={16.213}
      height={5.961}
      x={118.723}
      y={57.028}
      fill="#D8DDEB"
      rx={1}
    />
    <G filter="url(#m)">
      <Path
        fill="url(#n)"
        d="M73.504 43.502h-9.569a1 1 0 0 0-1 1v14.272a1 1 0 0 0 1 1h9.569a1 1 0 0 0 1-1V44.502a1 1 0 0 0-1-1Z"
      />
    </G>
    <G filter="url(#o)">
      <Path
        fill="url(#p)"
        d="M131.619 43.502h-9.568a1 1 0 0 0-1 1v14.272a1 1 0 0 0 1 1h9.568a1 1 0 0 0 1-1V44.502a1 1 0 0 0-1-1Z"
      />
    </G>
    <Path
      stroke="#939DAE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M77.462 95.424a8.878 8.878 0 1 0 0-17.755 8.878 8.878 0 0 0 0 17.755ZM63.203 109.955c0-7.802 6.457-14.258 14.258-14.258 7.802 0 14.259 6.456 14.259 14.258M106.516 84.932h28.785M106.516 99.46h11.299"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={178.467}
        x2={178.467}
        y1={20}
        y2={35}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#7E92F8" />
        <Stop offset={1} stopColor="#6972F0" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={20.033}
        x2={20.033}
        y1={0}
        y2={20}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#7E92F8" />
        <Stop offset={1} stopColor="#6972F0" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={10.033}
        x2={10.033}
        y1={128}
        y2={138}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#7E92F8" />
        <Stop offset={1} stopColor="#6972F0" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={165.533}
        x2={165.533}
        y1={158}
        y2={163}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#7E92F8" />
        <Stop offset={1} stopColor="#6972F0" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={106.533}
        x2={106.533}
        y1={2}
        y2={7}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#7E92F8" />
        <Stop offset={1} stopColor="#6972F0" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={62.533}
        x2={62.533}
        y1={173}
        y2={180}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#7E92F8" />
        <Stop offset={1} stopColor="#6972F0" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={122.033}
        x2={122.033}
        y1={170}
        y2={172}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#7E92F8" />
        <Stop offset={1} stopColor="#6972F0" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={170.533}
        x2={170.533}
        y1={108}
        y2={113}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#7E92F8" />
        <Stop offset={1} stopColor="#6972F0" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={1.033}
        x2={1.033}
        y1={74}
        y2={76}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#7E92F8" />
        <Stop offset={1} stopColor="#6972F0" />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={98.141}
        x2={98.141}
        y1={52.515}
        y2={130.675}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FDFEFF" />
        <Stop offset={0.996} stopColor="#ECF0F5" />
      </LinearGradient>
      <LinearGradient
        id="l"
        x1={134.854}
        x2={134.854}
        y1={97.799}
        y2={124.793}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#7E92F8" />
        <Stop offset={1} stopColor="#6972F0" />
      </LinearGradient>
      <LinearGradient
        id="n"
        x1={68.716}
        x2={68.716}
        y1={43.126}
        y2={59.949}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FDFEFF" />
        <Stop offset={0.996} stopColor="#ECF0F5" />
      </LinearGradient>
      <LinearGradient
        id="p"
        x1={126.831}
        x2={126.831}
        y1={43.126}
        y2={59.949}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FDFEFF" />
        <Stop offset={0.996} stopColor="#ECF0F5" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default ModalSucces;
