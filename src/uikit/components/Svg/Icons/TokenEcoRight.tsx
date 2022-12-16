import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";


const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 153 501" {...props}>
      <circle cx="146" cy="46" r="4.5" stroke="white" strokeWidth="5" />
      <circle cx="146" cy="494" r="4.5" stroke="white" strokeWidth="5" />
      <path d="M146 0L146 34" stroke="white" strokeWidth="0.910642" />
      <path d="M123 47H7C3.68629 47 1 49.6863 1 53V488C1 491.314 3.68629 494 7 494H123" stroke="white" />
      <path d="M133 47H17C13.6863 47 11 49.6863 11 53V488C11 491.314 13.6863 494 17 494H133" stroke="white" strokeDasharray="2 2" />
    </Svg>
  );
};
export default Icon;
