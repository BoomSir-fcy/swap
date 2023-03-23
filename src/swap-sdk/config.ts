import { ChainId } from "swap-sdk"


export const EmptyAddress = {
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.MATIC_MAINNET]: '',
  [ChainId.MAINNET]: '',
}
export const DSG_TOKENS_TOP100 = {
  [ChainId.MATIC_TESTNET]: 'https://s.magicianmetaverse.com/tokens/tokens-top100.json',
  [ChainId.MATIC_MAINNET]: 'https://s.magicianmetaverse.com/tokens/tokens-top100.json',
  [ChainId.MAINNET]: 'https://s.magicianmetaverse.com/tokens/tokens-top100.json',
}
export const DSG_TOKENS_EXTENDED = {
  [ChainId.MATIC_TESTNET]: 'https://s.magicianmetaverse.com/tokens/tokens.json',
  [ChainId.MATIC_MAINNET]: 'https://s.magicianmetaverse.com/tokens/tokens.json',
  [ChainId.MAINNET]: 'https://s.magicianmetaverse.com/tokens/tokens.json',
}

export const BASE_BSC_SCAN_URLS = {
  [ChainId.MAINNET]: 'https://polygonscan.com',
  [ChainId.MATIC_MAINNET]: 'https://polygonscan.com/',
  [ChainId.MATIC_TESTNET]: 'https://mumbai.polygonscan.com/',
  [ChainId.TESTNET]: 'https://mumbai.polygonscan.com',
}

export const ETHEREUM_CHAIN = {
  [ChainId.MAINNET]: {
    chainId: `0x${ChainId.MAINNET.toString(16)}`,
    chainName: 'Binance Smart Chain Mainnet',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'bnb',
      decimals: 18,
    },
    rpcUrls: [
      'https://bsc-dataseed1.ninicoin.io',
      'https://bsc-dataseed1.defibit.io',
      'https://bsc-dataseed.binance.org',
    ],
    blockExplorerUrls: [`${BASE_BSC_SCAN_URLS[ChainId.MAINNET]}/`],
  },
  [ChainId.MATIC_TESTNET]: {
    chainId: `0x${ChainId.MATIC_TESTNET.toString(16)}`,
    chainName: 'Polygon PoS Chain Testnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: [
      'https://matic-mumbai.chainstacklabs.com/',
      'https://matic-testnet-archive-rpc.bwarelabs.com/',
      'https://rpc-mumbai.maticvigil.com/',
      'https://polygon-mumbai.infura.io/v3/330472ed44dd4692a16dfcb4cc41f122',
    ],
    blockExplorerUrls: [`${BASE_BSC_SCAN_URLS[ChainId.MATIC_TESTNET]}/`],
  },
  [ChainId.MATIC_MAINNET]: {
    chainId: `0x${ChainId.MATIC_MAINNET.toString(16)}`,
    chainName: 'Polygon PoS Chain Mainnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: [
      'https://polygon-rpc.com/',
      // 'https://rpc-mainnet.matic.network/',
      'https://rpc-mainnet.maticvigil.com',
      'https://rpc-mainnet.matic.quiknode.pro',
    ],
    blockExplorerUrls: [`${BASE_BSC_SCAN_URLS[ChainId.MATIC_MAINNET]}/`],
  },
}

export const THEGRAPH_API_MEMBER = {
  [ChainId.MAINNET]: `https://api.thegraph.com/subgraphs/name/dinosaur-eggs/vdsg`,
  [ChainId.MATIC_TESTNET]: `https://api.thegraph.com/subgraphs/name/magicballswap/vbmtts`,
  [ChainId.MATIC_MAINNET]: `https://api.thegraph.com/subgraphs/name/magicballswap/vbmt`,
  [ChainId.TESTNET]: `https://api.thegraph.com/subgraphs/name/vbm290/vdsgts`,
}
export const THEGRAPH_API_SWAP = {
  [ChainId.MAINNET]: `https://api.thegraph.com/subgraphs/name/dinosaur-eggs/swap`,
  [ChainId.MATIC_TESTNET]: `https://api.thegraph.com/subgraphs/name/magicballswap/swapts`,
  [ChainId.MATIC_MAINNET]: `https://api.thegraph.com/subgraphs/name/magicballswap/swap`,
  [ChainId.TESTNET]: `https://api.thegraph.com/subgraphs/name/vbm290/swapts`,
}

export const BASE_URL = {
  [ChainId.MAINNET]: 'http://192.168.101.110:8300',
  [ChainId.MATIC_TESTNET]: 'https://api.magicianmetaverse.com',
  [ChainId.MATIC_MAINNET]: 'https://s.magicianmetaverse.com',
  [ChainId.TESTNET]: 'http://192.168.101.110:8300',
}

export const POLY_BASE_URL = {
  [ChainId.MAINNET]: 'https://poly.dsgmetaverse.com/v3.0',
  [ChainId.MATIC_TESTNET]: 'https://poly.dsgmetaverse.com/v3.0',
  [ChainId.MATIC_MAINNET]: 'https://poly.dsgmetaverse.com/v3.0',
  [ChainId.TESTNET]: 'https://poly.dsgmetaverse.com/v3.0',
}
