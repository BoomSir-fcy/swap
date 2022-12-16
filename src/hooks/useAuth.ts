/* eslint-disable */
import { useCallback } from 'react';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import { NoBscProviderError } from '@binance-chain/bsc-connector';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector';
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector
} from '@web3-react/walletconnect-connector';
import { ConnectorNames, connectorLocalStorageKey } from 'config/wallet';
import { connectorsByName } from 'utils/web3React';
import { setupNetwork } from 'utils/wallet';
import { useTranslation } from 'contexts/Localization';

const useAuth = () => {
  const { t } = useTranslation();
  const { activate, deactivate } = useWeb3React();

  const login = useCallback(
    (connectorID: ConnectorNames) => {
      const connector = connectorsByName[connectorID];
      if (connector) {
        activate(connector, async (error: Error) => {
          if (error instanceof UnsupportedChainIdError) {
            const hasSetup = await setupNetwork();
            if (hasSetup) {
              activate(connector);
            }
          } else {
            window.localStorage.removeItem(connectorLocalStorageKey);
            if (
              error instanceof NoEthereumProviderError ||
              error instanceof NoBscProviderError
            ) {
              // TODO: 用户提示
              // toastError(t('Provider Error'), t('No provider was found'))
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              if (connector instanceof WalletConnectConnector) {
                const walletConnector = connector as WalletConnectConnector;
                walletConnector.walletConnectProvider = null;
              }
              // TODO: 用户提示
              // toastError(t('Authorization Error'), t('Please authorize to access your account'))
            } else {
              // TODO: 用户提示
              // toastError(error.name, error.message)
            }
          }
        });
      } else {
        // TODO: 用户提示
        // toastError(t('Unable to find connector'), t('The connector config is wrong'))
      }
    },
    [t, activate]
  );

  const signOut = useCallback(() => {
    deactivate();
    // This localStorage key is set by @web3-react/walletconnect-connector
    if (window.localStorage.getItem('walletconnect')) {
      connectorsByName.walletconnect.close();
      connectorsByName.walletconnect.walletConnectProvider = null;
    }
    localStorage.removeItem('token');
    localStorage.removeItem('wallet');
    localStorage.removeItem('connectorIdv2');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('redux_localstorage_simple_loginReducer');
    location.reload();
  }, [deactivate]);

  const logout = useCallback(() => {
    deactivate();
    // This localStorage key is set by @web3-react/walletconnect-connector
    if (window.localStorage.getItem('walletconnect')) {
      connectorsByName.walletconnect.close();
      connectorsByName.walletconnect.walletConnectProvider = null;
    }
  }, [deactivate]);

  return { login, logout, signOut };
};

export default useAuth;
