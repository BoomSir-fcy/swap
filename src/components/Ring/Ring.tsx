import React from 'react';
import styled from 'styled-components';
import { Text, Box, BoxProps, RingIcon } from 'uikit';

interface RingProps extends BoxProps {
    width: string;
    active?: boolean;
    children?: string;
}

const RingWrapper = styled(Box)`
    position: relative;
`
const RingContent = styled(Text)`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const Ring: React.FC<RingProps> = ({ width, children, ...props }) => {
    return (
        <RingWrapper {...props}>
            <RingIcon width={width} />
            <RingContent>{ children }</RingContent>
        </RingWrapper>
    )
}

export default Ring;