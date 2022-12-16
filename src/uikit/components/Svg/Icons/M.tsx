import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 13 10" {...props}>
      <path d="M11.7323 1.12187L12.75 0.201562V0H9.22549L6.71367 5.9125L3.85654 0H0.161035V0.201562L1.34971 1.55469C1.46592 1.65469 1.52568 1.80156 1.51074 1.94844V7.26562C1.54727 7.45781 1.48252 7.65313 1.33975 7.79219L0 9.32812V9.52656H3.79512V9.325L2.45703 7.79375C2.3126 7.65469 2.24287 7.46094 2.27275 7.26719V2.66719L5.60469 9.52969H5.9915L8.85693 2.66719V8.13437C8.85693 8.27812 8.85693 8.30781 8.75732 8.40312L7.72637 9.34531V9.54688H12.7268V9.34531L11.7323 8.425C11.646 8.3625 11.6012 8.25781 11.6194 8.15625V1.39062C11.6012 1.28906 11.646 1.18437 11.7323 1.12187Z" fill="white"/>
    </Svg>
  );
};
export default Icon;
