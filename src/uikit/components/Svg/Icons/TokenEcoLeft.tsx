import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";


const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 691 204" {...props}>
      <circle cx="684" cy="197" r="4.5" stroke="white" strokeWidth="5" />
      <circle cx="7" cy="197" r="4.5" stroke="white" strokeWidth="5" />
      <path d="M37 0L37 41" stroke="white" />
      <path d="M684 174V58C684 54.6863 681.314 52 678 52L13 52C9.68629 52 7.00001 54.6863 7.00001 58V174" stroke="white" />
      <path d="M684 184V68C684 64.6863 681.314 62 678 62L13 62C9.68629 62 7.00001 64.6863 7.00001 68V184" stroke="white" strokeDasharray="2 2" />
    </Svg>
  );
};
export default Icon;
