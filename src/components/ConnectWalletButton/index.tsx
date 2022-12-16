/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import { Box, Button } from 'uikit';
import { useTranslation } from 'contexts/Localization';
import Dots from 'components/Loader/Dots';
import useConnectWallet from 'hooks/useConnectWallet';
import useEagerConnect from 'hooks/useEagerConnect';

const WalletButton = styled(Button)`
  width: 205px;
`;

export const ConnectWalletButton: React.FC<{
  loading?: number;
}> = props => {
  useEagerConnect();
  const { loading } = props;
  const { t } = useTranslation();

  const { onConnectWallet } = useConnectWallet();

  return (
    <Box>
      <WalletButton
        disabled={Boolean(loading)}
        onClick={onConnectWallet}
        {...props}
      >
        {Boolean(loading) ? (
          <Dots>{t('Connect Wallet')}</Dots>
        ) : (
          t('Connect Wallet')
        )}
      </WalletButton>
    </Box>
  );
};
