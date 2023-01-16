import React from "react";
import { Provider } from "react-redux";
import { Web3ReactProvider } from "@web3-react/core";
import { light, dark, ModalProvider } from "uikit";
import { ToastsProvider, LanguageProvider } from "contexts";
import { RefreshContextProvider } from "contexts/RefreshContext";
import { ConnectWalletProvider } from "contexts/ConnectWalletContext";
import { ThemeProvider } from "styled-components";
import { getLibrary } from "utils/web3Core";
import { store } from "state";

const ThemeProviderWrapper: React.FC = (props) => {
  const isDark = true;
  return <ThemeProvider theme={isDark ? dark : light} {...props} />;
};

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <ThemeProviderWrapper>
          <RefreshContextProvider>
            <ToastsProvider>
              <LanguageProvider>
                <ConnectWalletProvider>
                  <ModalProvider>{children}</ModalProvider>
                </ConnectWalletProvider>
              </LanguageProvider>
            </ToastsProvider>
          </RefreshContextProvider>
        </ThemeProviderWrapper>
      </Provider>
    </Web3ReactProvider>
  );
};

export default Providers;
