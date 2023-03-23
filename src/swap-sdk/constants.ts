import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 56,
  TESTNET = 97,
  MATIC_MAINNET = 137,
  MATIC_TESTNET = 80001,
  // OKENET = 66,
  // OKETNET = 65,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT,
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP,
}

export const CHAIN_FACTORY_ADDRESS = {
  [ChainId.MAINNET]: '0x73d9f93d53505cb8c4c7f952ae42450d9e859d10',
  [ChainId.TESTNET]: '0x504ba3c0b8edd8e747d89b2069d9b6ea71599ca0',
  [ChainId.MATIC_TESTNET]: '0xd83aF84210fb2d57d583e0E79dd17A405E234d31',
}
export const FACTORY_ADDRESS = CHAIN_FACTORY_ADDRESS[process.env.REACT_APP_CHAIN_ID] || CHAIN_FACTORY_ADDRESS[ChainId.MAINNET]

// TODO:
export const INIT_CODE_HASH = '0x772d76e02b5a3aeeef00b07a18a744c893227f52ecb6e3d431da85a229ed6a1d'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9970)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256',
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
}
