import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Box, Flex, Text, Button } from 'uikit';
// import { Button } from 'uikit'
import useAuth from 'hooks/useAuth';
// import useToast from 'hooks/useToast'
import { useTranslation } from 'contexts/Localization';
import connectors, {
  walletLocalStorageKey,
  connectorLocalStorageKey
} from 'config/wallet/config';
import { ConnectorNames } from 'config/wallet';
import WalletItem from './WalletItem';

const WalletModalStyled = styled.div<{
  show?: boolean;
  onClick?: (e: Event) => void;
}>`
  position: fixed;
  top: 10vh;
  right: 0;
  left: 0;
  margin: auto;
  padding: 22px 26px;
  z-index: 102;
  /* transform: rotateX(90deg); */
  border-radius: ${({ theme }) => theme.radii.card};
  transform: ${({ show }) => (show ? ' rotateX(0deg)' : ' rotateX(90deg)')};
  transition: 300ms transform;
  background: rgba(28, 28, 28, 0.9);
  width: 500px;
  max-width: 100%;
`;

export const Cover = styled(Box)<{ show?: boolean }>`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: ${({ show }) => (show ? 'block' : 'none')};
  z-index: 101;
`;

const WalletModal: React.FC<{ show?: boolean; onClick?: (e: any) => void }> = ({
  show,
  onClick
}) => {
  const { t } = useTranslation();
  const { login, logout } = useAuth();

  return (
    <WalletModalStyled onClick={onClick} show={show}>
      {/* <Flex justifyContent="space-between">
        <Text>{t('Connect Wallet')}</Text>
      </Flex> */}
      <Flex mt="28px" flexWrap="wrap">
        {connectors.map((item, index) => (
          <Box margin="12px" mt="0" key={item.title}>
            <WalletItem walletConfig={item} login={login} />
          </Box>
        ))}
      </Flex>
    </WalletModalStyled>
  );
};

export default WalletModal;
