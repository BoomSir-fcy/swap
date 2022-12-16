import { ethers } from 'ethers'
import { simpleRpcProvider } from 'utils/providers'
import timeShopAbi from 'config/abi/TimeShop.json'
import MutiRewardPoolAbi from 'config/abi/MutiRewardPool.json'

// Addresses
import {
  getAddress,
  getMulticallAddress,
  getTimeShopAddress,
  getSinglePool,
} from 'utils/addressHelpers'

// ABI
import bep20Abi from 'config/abi/erc20.json'
import erc721Abi from 'config/abi/erc721.json'
import MultiCallAbi from 'config/abi/Multicall.json'

const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new ethers.Contract(address, abi, signerOrProvider)
}

export const getBep20Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(bep20Abi, address, signer)
}
export const getErc721Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(erc721Abi, address, signer)
}


export const getMulticallContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(MultiCallAbi, getMulticallAddress(), signer)
}
export const getTimeShopContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(timeShopAbi, getTimeShopAddress(), signer)
}
export const getSinglePoolContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(MutiRewardPoolAbi, getSinglePool(), signer)
}