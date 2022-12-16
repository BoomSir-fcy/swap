import React from 'react';
import styled from 'styled-components';
import { Text, Box, BoxProps, RingIcon } from 'uikit';


const PointWrapper = styled(Box)`
    background: url("/images/RingPoint.png");
    background-size: 100%;
`

const PointAndRing: React.FC = ({ children }) => {
    return (
        <PointWrapper>
            { children }
        </PointWrapper>
    )
}

export default PointAndRing;