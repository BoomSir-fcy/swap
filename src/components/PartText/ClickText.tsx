import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BoxProps, TextProps, Text } from 'uikit';
import { Link } from 'react-router-dom'

interface ClickTextProps extends TextProps{
    href?: string;
    to?: string;
    blank?: boolean;
    onClick?: () => void
}

const example = keyframes`
    from {
      font-weight: 100;
    }
    to {
      font-weight: 900;
    }
`
const ClickTextWrapper = styled(Text)`
    display: block;
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s;
    font-weight: 400;
    :hover{
        cursor: pointer;
        text-shadow:
            -0.1px -0.1px 0 ${({ theme }) => theme.colors.text},
            0.1px -0.1px 0 ${({ theme }) => theme.colors.text},
            -0.1px 0.1px 0 ${({ theme }) => theme.colors.text},
            0.1px 0.1px 0 ${({ theme }) => theme.colors.text};
        /* font-weight: 600; */

    }

    :active{
        opacity: 0.5;
    }
`


const ClickText: React.FC<ClickTextProps> = ({ href, to, blank, children, ...props }) => {
    if (to) {
        return <ClickTextWrapper as={Link} to={to} {...props}>{ children }</ClickTextWrapper>
    }
    if (href) {
        return <ClickTextWrapper as="a" target={blank ? '_blank' : '_self' } href={href} {...props}>{ children }</ClickTextWrapper>
    }
    return <ClickTextWrapper {...props}>{ children }</ClickTextWrapper>
}

export default ClickText;