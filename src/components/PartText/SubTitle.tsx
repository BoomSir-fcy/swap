import React from 'react';
import styled from 'styled-components';
import { BoxProps, Text, Box } from 'uikit';


const SubTitleWrapper = styled(Text)`
    display: inline-block;
    color: #fff;
    font-size: 36px;
    font-weight: normal;
    &::after{
        display: block;
        content: '';
        margin-top: 0px;
        border-radius: 8px;
        border-bottom: 5px solid #fff;
    }
`

const SubTitle: React.FC<BoxProps> = ({ children, ...props }) => <Box><SubTitleWrapper {...props}>{ children }</SubTitleWrapper></Box>

export default SubTitle;