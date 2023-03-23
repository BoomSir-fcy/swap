import JSBI from "jsbi";

import { ChainId, SolidityType } from "../constants";
import { validateSolidityTypeInstance } from "../utils";

export const ETHER_SYMBOL_CONFIG = {
  [ChainId.MAINNET]: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
  },
  [ChainId.MATIC_TESTNET]: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18,
  },
  [ChainId.MATIC_MAINNET]: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18,
  },
  [ChainId.TESTNET]:{
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
  },
}

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number;

  public readonly symbol?: string;

  public readonly name?: string;

  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly ETHER: Currency = new Currency(
    ETHER_SYMBOL_CONFIG[ChainId.MATIC_TESTNET].decimals,
    ETHER_SYMBOL_CONFIG[ChainId.MATIC_TESTNET].name,
    ETHER_SYMBOL_CONFIG[ChainId.MATIC_TESTNET].symbol
  );

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8);

    this.decimals = decimals;
    this.symbol = symbol;
    this.name = name;
  }
}

const ETHER = Currency.ETHER;
export { ETHER };
