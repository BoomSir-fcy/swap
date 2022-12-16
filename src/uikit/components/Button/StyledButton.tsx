import styled, { DefaultTheme } from "styled-components";
import { space, layout, variant } from "styled-system";
import { scaleVariants, styleVariants } from "./theme";
import { BaseButtonProps } from "./types";

interface ThemedButtonProps extends BaseButtonProps {
  theme: DefaultTheme;
}

interface TransientButtonProps extends ThemedButtonProps {
  $isLoading?: boolean;
}

const getDisabledStyles = ({ $isLoading, theme }: TransientButtonProps) => {
  if ($isLoading === true) {
    return `
      &:disabled,
      &.pancake-button--disabled {
        cursor: progress;
      }
    `;
  }

  return `
    &:disabled,
    &.pancake-button--disabled {
      background: ${theme.colors.backgroundDisabled};
      border: 0.5px solid #FFFFFF;
      box-shadow: none;
      color: white;
      cursor: not-allowed;
    }
  `;
};

/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */

const getOpacity = ({ $isLoading = false }: TransientButtonProps) => {
  return $isLoading ? ".8" : "1";
};

const StyledButton = styled.button<BaseButtonProps>`
  align-items: center;
  border: 0.5px solid #FFFFFF;
  background: ${({ theme }) => theme.colors.gradients.linear};
  background-size: 200% !important;
  background-position: 100%;
  transition: all 0.5s;
  box-shadow: 0px -3px 0px 0px rgba(14, 14, 44, 0.4) inset,;
  cursor: pointer;
  display: inline-flex;
  font-family: Futura;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: normal;
  justify-content: center;
  /* letter-spacing: 0.03em; */
  line-height: 22px;
  outline: 0;

  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    /* background: ${({ theme }) => theme.colors.backgroundLight}; */
    background-position: 0%;
    border: 1px solid #FFFFFF;
    backdrop-filter: blur(20px);
  }

  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {
    color: #000000;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 2px 2px 4px rgba(0, 255, 25, 0.1), 0px 2px 20px 15px rgba(255, 255, 255, 0.2), 0px 3px 3px 1px rgba(255, 0, 0, 0.74), -1px -1px 3px 3px rgba(0, 56, 255, 0.25);
  }

  ${getDisabledStyles}
  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
  background-size: 100% 100%;
  ${variant({
    variants: styleVariants,
  })}
  ${layout}
  ${space}
`;

export default StyledButton;
