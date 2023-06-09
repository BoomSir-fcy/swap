import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 13 11" {...props}>
      <path d="M4.52031 9.4727L4.70698 6.6527L9.82698 2.03937C10.0536 1.8327 9.78031 1.7327 9.48031 1.9127L3.16031 5.90603L0.426981 5.03937C-0.159686 4.8727 -0.166353 4.46603 0.560314 4.1727L11.207 0.0660331C11.6936 -0.153967 12.1603 0.186033 11.9736 0.9327L10.1603 9.4727C10.0336 10.0794 9.66698 10.226 9.16031 9.94603L6.40031 7.90603L5.07365 9.1927C4.92031 9.34603 4.79365 9.4727 4.52031 9.4727Z" fill="white"/>
    </Svg>
  );
};
export default Icon;
