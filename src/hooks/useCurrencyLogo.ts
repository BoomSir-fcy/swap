import { useMemo } from "react";
import { Currency, ETHER, Token } from "swap-sdk";
// eslint-disable-next-line import/no-unresolved
import { TokenInfo } from "@uniswap/token-lists/dist/types";
import { WrappedTokenInfo } from "state/lists/hooks";
import { Token as TokenConfig } from "config/constants/types";
import getTokenLogoURL, {
  getSymbolLogoUrl,
  getSymbolLogoSvgUrl,
} from "utils/getTokenLogoURL";
import useHttpLocations from "./useHttpLocations";

const useCurrencyLogo = ({
  currency,
  symbol,
}: {
  currency?: Currency | TokenConfig;
  symbol?: string;
}) => {
  const uriLocations = useHttpLocations(
    currency instanceof WrappedTokenInfo ? currency.logoURI : undefined
  );

  const srcs: string[] | any = useMemo(() => {
    if (currency === ETHER) return [];
    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [
          ...uriLocations,
          getSymbolLogoSvgUrl(currency.address),
          getSymbolLogoUrl(currency.address),
          getTokenLogoURL(currency.address),
        ];
      }
      if ((currency as TokenInfo)?.logoURI) {
        return [
          (currency as TokenInfo)?.logoURI,
          getSymbolLogoSvgUrl((currency as TokenInfo).address),
          getSymbolLogoUrl((currency as TokenInfo).address),
          getTokenLogoURL((currency as TokenInfo).address),
        ];
      }
      return [
        getSymbolLogoSvgUrl(currency.address),
        getSymbolLogoUrl(currency.address),
        getTokenLogoURL(currency.address),
      ];
    }

    if ((currency as TokenInfo)?.logoURI) {
      return [
        (currency as TokenInfo)?.logoURI,
        getSymbolLogoSvgUrl((currency as TokenInfo).address),
        getSymbolLogoUrl((currency as TokenInfo).address),
        getTokenLogoURL((currency as TokenInfo).address),
      ];
    }

    if (currency) {
      return [
        getSymbolLogoSvgUrl((currency as TokenInfo).address),
        getSymbolLogoUrl((currency as TokenInfo).address),
        getTokenLogoURL((currency as TokenInfo).address),
      ];
    }

    if (symbol) return [getSymbolLogoSvgUrl(symbol), getSymbolLogoUrl(symbol)];
    return [];
  }, [currency, uriLocations, symbol]);

  return srcs;
};

export default useCurrencyLogo;
