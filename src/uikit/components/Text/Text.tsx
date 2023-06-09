import styled, { DefaultTheme } from "styled-components";
import { space, typography, layout } from "styled-system";
import getThemeValue from "../../util/getThemeValue";
import { TextProps } from "./types";

interface ThemedProps extends TextProps {
  theme: DefaultTheme;
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.${color}`, color)(theme);
};

const getFontSize = ({ fontSize, small }: TextProps) => {
  return small ? "14px" : fontSize || "16px";
};

const Text = styled.div<TextProps>`
  color: ${getColor};
  font-size: ${getFontSize};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-family: ${({ bold }) => (bold ? 'Futura-Bold' : 'Futura')};
  line-height: ${({ lineHeight }) => (lineHeight || '1.375')};
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${({ ellipsis, maxLine }) =>
    (ellipsis || maxLine) && (
      maxLine
      ?
      `
      overflow: hidden;
      display:-webkit-box;
      text-overflow: ellipsis;
      -webkit-box-orient:vertical;
      -webkit-line-clamp:${maxLine};
      `
      :
      `white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;`
    )}

  ${space}
  ${typography}
  ${layout}
`;

Text.defaultProps = {
  color: "text",
  small: false,
  ellipsis: false,
};

export default Text;
