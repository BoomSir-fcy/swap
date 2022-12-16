import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Flex, LogoWithTextIcon } from 'uikit'


const FooterWrapper = styled(Flex)`
    height: 60px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 20vw;
    border-top-left-radius: 88px;
    border-top-right-radius: 88px;
    background: #161616;
    z-index: 99;
    transform: translateZ(1px);
`
const FooterIcon = styled.img`
    width: 30px;
`
const MobileFooter: React.FC<{ setActive: React.Dispatch<React.SetStateAction<number>> }> = ({ setActive, ...props }) => {
    const { pathname } = useLocation();
    return (
        <FooterWrapper justifyContent="space-between" alignItems="center">
            {
                pathname === '/'
                ?
                <FooterIcon onClick={() => setActive(0)} src="/images/icon/shouye.png" />
                :
                <Link to="/">
                    <FooterIcon src="/images/icon/shouye.png" />
                </Link>
            }
            <Link to="/time">
                <FooterIcon src="/images/icon/swap.png" />
            </Link>
            <Link to="/staking">
                <FooterIcon src="/images/icon/pool.png" />
            </Link>
        </FooterWrapper>
    );
}

export default MobileFooter;