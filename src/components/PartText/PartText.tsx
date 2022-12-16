import React from 'react';
import styled from 'styled-components';
import { Flex, Text, BoxProps } from 'uikit';

const Part = styled(Flex)`
    width: 320px;
    height: 90px;
    padding: 0 12px;
    border-radius: 8px;
    background-image: ${({ theme }) => theme.colors.gradients.linear};
    backdrop-filter: blur(20px);
    opacity: 1;
    border: 1px solid ${({ theme }) => theme.colors.background};
    transition: all 0.5s;
    background-size: 200%;
    background-position: 100%;
    &:hover{
        /* background: ${({ theme }) => theme.colors.gradients.linear1}; */
        background-position: 0%;
        border: 1px solid #FFFFFF;

    }
    
`

const PartText: React.FC<BoxProps> = ({ children, ...props }) => <Part alignItems="center" {...props}><Text>{ children }</Text></Part>

export default PartText;