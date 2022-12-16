import React from "react";
import styled from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1002 1002" {...props}>
      <g filter="url(#filter0_dddd_188_1134)">
      <circle cx="501" cy="497" r="416" stroke="url(#paint0_linear_188_1134)" strokeWidth="10" shapeRendering="auto"/>
      </g>
      <defs>
      <filter id="filter0_dddd_188_1134" x="0" y="0" width="1002" height="1002" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="8" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_188_1134"/>
      <feOffset dx="-6" dy="6"/>
      <feGaussianBlur stdDeviation="1.5"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.22 0 0 0 0 1 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_188_1134"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="-4" dy="-4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.74 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_188_1134" result="effect2_dropShadow_188_1134"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology className="source-alpha1" radius="30" operator="dilate" in="SourceAlpha" result="effect3_dropShadow_188_1134"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="25"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_188_1134" result="effect3_dropShadow_188_1134"/>
      <feColorMatrix className="source-alpha1" in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect4_dropShadow_188_1134"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.0999999 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="effect3_dropShadow_188_1134" result="effect4_dropShadow_188_1134"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_188_1134" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_188_1134" x1="501" y1="542.5" x2="501" y2="322" gradientUnits="userSpaceOnUse">
      <stop stopColor="white"/>
      <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      </defs>
    </Svg>
  );
};

const IconStyled = styled(Icon)`
  position: relative;
  .source-alpha1{
    position: absolute;
    top: 50%;
  }
`

export default IconStyled;
