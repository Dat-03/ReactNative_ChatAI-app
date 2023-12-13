import * as React from "react"
import Svg, {
  SvgProps,
  G,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Button_Send = (props: SvgProps) => (
  <Svg
  //@ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    width={104}
    height={109}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Rect width={60} height={60} x={20} y={16.5} fill="url(#b)" rx={30} />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M61.043 35.698a.585.585 0 0 0-.24-.241c-2.434-1.295-16.992 3.217-20.758 5.39-.982.566-1.42 1.23-1.299 1.973.346 2.149 6.137 3.777 9.279 4.506l5.9-5.898a.875.875 0 0 1 1.237 1.238l-5.957 5.954c.748 3.175 2.36 8.792 4.474 9.133.08.013.159.02.237.02.647 0 1.23-.444 1.735-1.319 2.172-3.762 6.688-18.319 5.392-20.756Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={50}
        x2={50}
        y1={16.5}
        y2={76.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#7E92F8" />
        <Stop offset={1} stopColor="#6972F0" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default Button_Send
