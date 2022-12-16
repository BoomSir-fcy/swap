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
import { ClickText } from "components/PartText";
import { useToast } from "hooks/useToast";
import { APP_OPEN_TIMESTAMP, METATIME_SOCIAL_LINK } from "config";
import { ConnectWalletButton } from "components/ConnectWalletButton";
import { useWeb3React } from "@web3-react/core";
import useAuth from "hooks/useAuth";
import { shortenAddress } from "utils/contract";

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

const HeaderLink = styled(Flex)`
  color: ${({ theme }) => theme.colors.text};
`;

interface LinksData {
  lable: string;
  path: string;
  swiperTo: number;
}

const LogoWithTextIconStyled = styled(LogoWithTextIcon)`
  cursor: pointer;
`;

const ClickTextStyled = styled(ClickText)`
  font-size: 16px;
  ${({ theme }) => theme.mediaQueries.xl} {
    font-size: 20px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    font-size: 22px;
  }
`;

const nowTime = new Date().getTime();

const PageHeader: React.FC<{
  setActive: React.Dispatch<React.SetStateAction<number>>;
  active: number;
  isMobile: boolean;
}> = ({ isMobile, active, setActive }) => {
  const { pathname } = useLocation();
  const { toastInfo } = useToast();
  const { account } = useWeb3React();
  const { signOut } = useAuth();

  const goTop = () => {
    setActive(0);
    document.body.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
    });
  };

  const handleSoon = useCallback(() => {
    toastInfo("Coming Soon");
  }, [toastInfo]);

  const isAppOpen = useMemo(() => {
    return nowTime > APP_OPEN_TIMESTAMP;
  }, []);

  return (
    <HeaderWrapper justifyContent="space-between" alignItems="center">
      {pathname === "/" ? (
        <LogoWithTextIconStyled onClick={goTop} width="50px" />
      ) : (
        <Link to="/">
          <LogoWithTextIconStyled width="50px" />
        </Link>
      )}
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
    </HeaderWrapper>
  );
};

export default PageHeader;
