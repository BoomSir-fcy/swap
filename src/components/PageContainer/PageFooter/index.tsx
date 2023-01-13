import React from 'react';
import styled from 'styled-components';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Flex, Box, Text, LogoWithTextIcon } from 'uikit'
import { ClickText } from 'components/PartText';
import { ComponentsWrapper } from '../PageContainer';


const LogoWithTextIconStyled = styled(LogoWithTextIcon)`
  cursor: pointer;
`

const FooterWrapper = styled(Box)`
    width: 100%;
    height: 100%;
`
const FooterBoxStyled = styled(Flex)`
    height: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    flex: 1;
`
const LeftBoxStyled = styled(Flex)`
    width: 100%;
    margin-right: 50px;
    margin-bottom: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${({ theme }) => theme.mediaQueries.md }{
        flex-direction: column;
        width: auto;
    }

    .copyright-text{
        margin-top: 0;
        ${({ theme }) => theme.mediaQueries.md }{
            margin-top: 80px;
        }
        
    }
    
`
const RightBoxStyled =styled(Flex)`
    max-width: 100%;
    justify-content: space-between;
    flex: 1;
    ${({ theme }) => theme.mediaQueries.md }{
        max-width: 50%;
    }
`

const PageFooter: React.FC<{ setActive: React.Dispatch<React.SetStateAction<number>> }> = ({ setActive, ...props }) => {
    const { pathname } = useLocation()

    return (
        <FooterWrapper>
            <FooterBoxStyled>
                <LeftBoxStyled flexDirection="column">
                    {
                        pathname === '/'
                            ?
                            <LogoWithTextIconStyled onClick={() => setActive(0)} width="calc(116.1px * 2)" />
                            :
                            <Link to="/">
                                <LogoWithTextIconStyled width="calc(116.1px * 2)" />
                            </Link>
                    }
                    <Box className="copyright-text">
                        <Text textAlign="left">info@metatime.social</Text>
                        <Text mt="16px">Copyright @ 2021 Metatime</Text>
                    </Box>
                    {/* <Flex mt="24px">
                        <Text>Terms</Text>
                        <Text ml="24px">Privacy Policy</Text>
                    </Flex> */}
                </LeftBoxStyled>
                <RightBoxStyled>
                    {/* <Box>
                        <Text mb="38px" fontSize="26px" lineHeight="35px">Document</Text>
                        <ClickText mb="12px">Terms</ClickText>
                        <ClickText>Privacy Policy</ClickText>
                    </Box> */}
                    <Box>
                        <Text mb="38px" fontSize="26px" lineHeight="35px">Community</Text>
                        {/* <ClickText mb="12px">Medium</ClickText> */}
                        <ClickText blank href="https://twitter.com/Metatime_social" mb="12px">Twitter</ClickText>
                        <ClickText blank href="https://t.me/MetatimeGroup">Telegram</ClickText>
                    </Box>
                    <Box>
                        {/* <Text mb="38px" fontSize="26px" lineHeight="35px">Product</Text>
                        <ClickText mb="12px">social tribe</ClickText>
                        <ClickText mb="12px">swap</ClickText>
                        <ClickText mb="12px">game</ClickText>
                        <ClickText>token</ClickText> */}
                    </Box>
                </RightBoxStyled>
            </FooterBoxStyled>
        </FooterWrapper>
    );
}

export default PageFooter;