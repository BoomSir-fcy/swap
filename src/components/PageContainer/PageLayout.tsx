import React from 'react';
import { Box } from 'uikit';
import { PageHeader } from '.';
import MobileFooter from './MobileFooter';

interface swiperProps {
    isMobile: boolean;
    active: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
}


const PageLayout: React.FC<swiperProps> = ({ isMobile, active, setActive, children }) => {
    return (
        <Box pb={isMobile ? "120px" : "16px"}>
            <PageHeader isMobile={isMobile} active={active} setActive={setActive} />
            {children}
            { isMobile && <MobileFooter setActive={setActive} /> }
        </Box>
    );
}


export default PageLayout;