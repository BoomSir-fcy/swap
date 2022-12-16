import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'uikit';

export const ModuleWrapper = styled(Flex)`
    width: 100%;
    height: auto;
    align-items: center;
    ${({ theme }) => theme.mediaQueries.md} {
        height: 100%;
    };
`

export const ComponentsWrapper = ({ children, ...props }) => {
    return (
        <ModuleWrapper {...props}>
            {children}
            {/* <Box width="100%" height="100%">
            </Box> */}
        </ModuleWrapper >
    );
}

const PageContent = styled(Box)`
    position: relative;
    /* width: 80%; */
    width: 100%;
    padding: 0 10vw;
    ${({ theme }) => theme.mediaQueriesSize.paddingPage};
    height: auto;
    /* overflow: visible; */
    margin: 0 auto;
    z-index: 2;
    ::-webkit-scrollbar {
        display: none;
    }
`

const PageContainer: React.FC = ({ children }) => {
    return (
        <PageContent>{children}</PageContent>
    );
}


export default PageContainer;