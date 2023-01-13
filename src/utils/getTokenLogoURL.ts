import { getDsgAddress, getTimeAddress } from "./addressHelpers"

const getTokenLogoURLs = (address: string): string[] => {
  if (getTimeAddress().toLowerCase() === address?.toLowerCase()) return [
    '/images/tokens/TIME.svg',
  ]
  if (getDsgAddress().toLowerCase() === address?.toLowerCase()) return [
    '/images/tokens/DSG.svg',
  ]
  return [
    `https://sv.dsgmetaverse.com/images/tokens/${address}.svg`,
    `https://sv.dsgmetaverse.com/images/tokens/${address}.png`,
    `https://tokens.pancakeswap.finance/images/${address}.png`,
    `https://assets.trustwalletapp.com/blockchains/smartchain/assets/${address}/logo.png`,
  ]
}
export const getSymbolLogoUrl = (address: string) => `/images/tokens/${address}.png`
export const getSymbolLogoSvgUrl = (address: string) => `/images/tokens/${address}.svg`

export default getTokenLogoURLs

