import { ChainId, JSBI, Percent, Token, WETH } from "swap-sdk";
import tokens, {
  BUSD,
  DAI,
  USDT,
  BTCB,
  CAKE,
  WBNB,
  UST,
  ETH,
  USDC,
  DSG,
  VAI,
  XVS,
  GPD,
  PGD,
} from "./tokens";

// swap router swap路由
export const CHAIN_ROUTER_ADDRESS = {
  [ChainId.MAINNET]: "0xe9c7650b97712c0ec958ff270fbf4189fb99c071",
  [ChainId.TESTNET]: "0xddb1a59ad3b87b914c4466dc6c39c2542ec565a1",
  [ChainId.MATIC_TESTNET]: "0x9A8393Ab387f1a6B14A5041C3db58cdF6e904138",
};
// 白名单路由
export const CHAIN_ROUTER_ADDRESS_WHITE = {
  [ChainId.MAINNET]: "0x5fd814793958f25119946eb3d01f341165885a05",
  [ChainId.TESTNET]: "0xBed3C220FaBa8657B0d0094f9AE58ab5eF3Fb981",
  [ChainId.MATIC_TESTNET]: "0x9A8393Ab387f1a6B14A5041C3db58cdF6e904138",
};

export const ROUTER_WHITE_TOKEN = [
  tokens.box.address[process.env.REACT_APP_CHAIN_ID] ||
    tokens.box.address[ChainId.MAINNET],
  tokens.energy.address[process.env.REACT_APP_CHAIN_ID] ||
    tokens.energy.address[ChainId.MAINNET],
  tokens.spices.address[process.env.REACT_APP_CHAIN_ID] ||
    tokens.spices.address[ChainId.MAINNET],
  tokens.ore.address[process.env.REACT_APP_CHAIN_ID] ||
    tokens.ore.address[ChainId.MAINNET],
];
export const ROUTER_ADDRESS =
  CHAIN_ROUTER_ADDRESS[process.env.REACT_APP_CHAIN_ID] ||
  CHAIN_ROUTER_ADDRESS[ChainId.MAINNET];
export const ROUTER_ADDRESS_WHITE =
  CHAIN_ROUTER_ADDRESS_WHITE[process.env.REACT_APP_CHAIN_ID] ||
  CHAIN_ROUTER_ADDRESS_WHITE[ChainId.MAINNET];

export const POLY_FACTORY_ADDRESS =
  "0xB73feD9768b9E179d56e89b7d5f6A3F1396bDB24";
export const POLY_INIT_CODE_HASH =
  "0x565f408329b085bf8e09626871a81ada1b5f4de15a44944520ba6f924f399b33";

export const UNI_ADAPTERS_ADDRESS =
  "0x0A27b8F694A9905AD340C4981022b2B5e4cDAe40";
export const DODO_ADAPTERS_ADDRESS =
  "0x78F0f3768C3986600fbD022e98452f342d9766b4";
export const CURVE_ADAPTERS_ADDRESS =
  "0x269f21f4Ae3307e4ACed892684d612E577291203";

// export const ROUTER_ADDRESS = '0x10ED43C718714eb63d5aA57B78B54704E256024E'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[];
};

// used to construct intermediary pairs for trading 用于构建交易的交易对
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.MAINNET]: [
    WETH[ChainId.MAINNET],
    DSG[ChainId.MAINNET],
    BUSD[ChainId.MAINNET],
    USDT[ChainId.MAINNET],
    BTCB,
    UST,
    ETH,
    USDC[ChainId.MAINNET],
  ],
  [ChainId.TESTNET]: [
    WETH[ChainId.TESTNET],
    DSG[ChainId.TESTNET],
    BUSD[ChainId.TESTNET],
    USDT[ChainId.TESTNET],
  ],
  [ChainId.MATIC_TESTNET]: [
    BUSD[ChainId.MATIC_TESTNET],
    DSG[ChainId.MATIC_TESTNET],
    WETH[ChainId.MATIC_MAINNET],
    VAI[ChainId.MATIC_TESTNET],
  ],
  [ChainId.MATIC_MAINNET]: [
    USDT[ChainId.MATIC_TESTNET],
    USDC[ChainId.MATIC_TESTNET],
    WETH[ChainId.MATIC_TESTNET],
  ],
};

/**
 * Addittional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export const ADDITIONAL_BASES: {
  [chainId in ChainId]?: { [tokenAddress: string]: Token[] };
} = {
  [ChainId.MAINNET]: {},
  [ChainId.MATIC_MAINNET]: {},
  [ChainId.MATIC_TESTNET]: {},
};

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WETH[ChainId.MAINNET]]
 */
export const CUSTOM_BASES: {
  [chainId in ChainId]?: { [tokenAddress: string]: Token[] };
} = {
  [ChainId.MAINNET]: {},
  [ChainId.MATIC_MAINNET]: {},
  [ChainId.MATIC_TESTNET]: {},
};

// used for display in the default list when adding liquidity
// 用于添加流动性时在默认列表中显示
export const SUGGESTED_BASES: ChainTokenList = {
  [ChainId.MAINNET]: [
    BUSD[ChainId.MAINNET],
    DSG[ChainId.MAINNET],
    USDT[ChainId.MAINNET],
    VAI[ChainId.MAINNET],
    XVS[ChainId.MAINNET],
  ],
  [ChainId.TESTNET]: [
    DSG[ChainId.TESTNET],
    BUSD[ChainId.TESTNET],
    USDT[ChainId.TESTNET],
    VAI[ChainId.TESTNET],
    XVS[ChainId.TESTNET],
  ],
  [ChainId.MATIC_TESTNET]: [
    WETH[ChainId.MATIC_TESTNET],
    GPD[ChainId.MATIC_TESTNET],
    PGD[ChainId.MATIC_TESTNET],
    // BUSD[ChainId.MATIC_TESTNET],
    // VAI[ChainId.MATIC_TESTNET],
  ],
  [ChainId.MATIC_MAINNET]: [
    WETH[ChainId.MATIC_MAINNET],
    USDC[ChainId.MATIC_MAINNET],
    USDT[ChainId.MATIC_MAINNET],
    DSG[ChainId.MATIC_MAINNET],
    DAI[ChainId.MATIC_MAINNET],
  ],
};
// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  [ChainId.MAINNET]: [
    WETH[ChainId.MAINNET],
    DAI,
    BUSD[ChainId.MAINNET],
    USDT[ChainId.MAINNET],
  ],
  [ChainId.TESTNET]: [
    WETH[ChainId.TESTNET],
    DSG[ChainId.TESTNET],
    BUSD[ChainId.TESTNET],
  ],
  [ChainId.MATIC_MAINNET]: [USDT[ChainId.MATIC_MAINNET]],
  [ChainId.MATIC_TESTNET]: [WETH[ChainId.MATIC_TESTNET], USDT[ChainId.MATIC_TESTNET]],
};

export const PINNED_PAIRS: {
  readonly [chainId in ChainId]?: [Token, Token][];
} = {
  [ChainId.MAINNET]: [
    [DSG[ChainId.MAINNET], WBNB],
    [BUSD[ChainId.MAINNET], USDT[ChainId.MAINNET]],
    [DAI, USDT[ChainId.MAINNET]],
  ],
  [ChainId.MATIC_TESTNET]: [
    [WETH[ChainId.MATIC_TESTNET], USDC[ChainId.MATIC_TESTNET]],
  ],
  [ChainId.MATIC_MAINNET]: [
    [WETH[ChainId.MATIC_MAINNET], USDC[ChainId.MATIC_MAINNET]],
  ],
};

export const NetworkContextName = "NETWORK";

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50;
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20;

export const BIG_INT_ZERO = JSBI.BigInt(0);

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000));
export const BIPS_BASE = JSBI.BigInt(10000);
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(
  JSBI.BigInt(100),
  BIPS_BASE
); // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(
  JSBI.BigInt(300),
  BIPS_BASE
); // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(
  JSBI.BigInt(500),
  BIPS_BASE
); // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(
  JSBI.BigInt(1000),
  BIPS_BASE
); // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(
  JSBI.BigInt(1500),
  BIPS_BASE
); // 15%

// used to ensure the user doesn't send so much BNB so they end up with <.01
export const MIN_BNB: JSBI = JSBI.exponentiate(
  JSBI.BigInt(10),
  JSBI.BigInt(16)
); // .01 BNB
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(
  JSBI.BigInt(50),
  JSBI.BigInt(10000)
);

export const ZERO_PERCENT = new Percent("0");
export const ONE_HUNDRED_PERCENT = new Percent("1");

// SDN OFAC addresses(美国海外资产控制办公室地址)
export const BLOCKED_ADDRESSES: string[] = [
  "0x7F367cC41522cE07553e823bf3be79A889DEbe1B",
  "0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b",
  "0x901bb9583b24D97e995513C6778dc6888AB6870e",
  "0xA7e5d5A720f06526557c513402f2e6B5fA20b008",
  "0x8576aCC5C05D6Ce88f4e49bf65BdF0C62F91353C",
];
// setTotalSupply []
export const EXCEPT_TOTALSUPPPPLY_ADDRESS = [
  "0x718da2e74fff28b0a0d62aeb4f2afa8f7b521154",
  "0xe32c5352d3ba108374701d5333daa3db35345cf0",
];

// setTotalSupply []
export const EXCEPT_MEMBER_RANKING_ADDRESS = [
  "0xfd1016add140a8998200ac2bdfb3f8e6aeddc2b8",
  "0x064Cf643B6a1C5DDe85f6bc742C23B2684E6Ff30",
];

// 单币池有质押后只能取出的池子
export const SINGLE_POOL_STAKE_ONLY_NEST = [
  "0x7Cd583FcFBA17bB0D1F4c66431A28C389C976512",
];

export const BLOCK_COUNTRY_LIST = ["China"];

export const REFERRER_ADDRESS_1INCH =
  "0xe1806f51262c85e59891c86ed2613b1faa54b126";
