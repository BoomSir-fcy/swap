import { ChainId } from '../wallet/config'

export interface Token {
  symbol: string
  address?: Address
  decimals?: number
  projectLink?: string
  token?: string
  busdPrice?: string
}

export interface Address {
  [ChainId.BSC_MAINNET]: string
  [ChainId.BSC_TESTNET]?: string
}