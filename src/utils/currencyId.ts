import { Currency, ETHER, Token } from "swap-sdk";

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return ETHER.symbol;
  if (currency instanceof Token) return currency.address;
  throw new Error("invalid currency");
}

export default currencyId;
