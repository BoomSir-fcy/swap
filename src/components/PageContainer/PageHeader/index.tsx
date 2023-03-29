import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import {
  Flex,
  Text,
  LogoWithTextIcon,
  Button,
  Link as LinkExternal,
  Box,
} from "uikit";
import { Link, useParams, useLocation } from "react-router-dom";
import { ConnectWalletButton } from "components/ConnectWalletButton";
import { useWeb3React } from "@web3-react/core";
import useAuth from "hooks/useAuth";
import { shortenAddress } from "utils/contract";
import LangMenu from "components/langMenu";
import { useTranslation } from "contexts";
import { languagesOptions } from "config/localization";

const HeaderWrapper = styled(Flex)`
  /* width: 80%; */
  /* width: 100%; */
  height: 60px;
  margin: 0 auto;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  transform: translateZ(1px);
  background: ${({ theme }) => theme.colors.backgroundOpacity};
  ${({ theme }) => theme.mediaQueriesSize.paddingPage};
`;


const LogoWithTextIconStyled = styled(LogoWithTextIcon)`
  cursor: pointer;
`;


const PageHeader: React.FC<{
  setActive: React.Dispatch<React.SetStateAction<number>>;
  active: number;
  isMobile: boolean;
}> = ({ isMobile, active, setActive }) => {
  const { pathname } = useLocation();
  const { account } = useWeb3React();
  const { signOut } = useAuth();
  const { currentLanguage, setLanguage, t } = useTranslation();

  const goTop = () => {
    setActive(0);
    document.body.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
    });
  };

  return (
    <HeaderWrapper justifyContent="space-between" alignItems="center">
      {pathname === "/" ? (
        <LogoWithTextIconStyled onClick={goTop} width="50px" />
      ) : (
        <Link to="/">
          <LogoWithTextIconStyled width="50px" />
        </Link>
      )}
      <Flex justifyContent="space-between" alignItems="center">
        {account ? (
          <Flex alignItems="center">
            <Text mr="20px">address: {shortenAddress(account)}</Text>
            <Button
              onClick={() => {
                signOut();
              }}
            >
              登出
            </Button>
          </Flex>
        ) : (
          <ConnectWalletButton />
        )}
        <Box ml="24px">
          <LangMenu
            currentLang={currentLanguage.language}
            langs={languagesOptions}
            setLang={(val: any) => setLanguage(val.value)}
          />
        </Box>
      </Flex>
    </HeaderWrapper>
  );
};

export default PageHeader;
