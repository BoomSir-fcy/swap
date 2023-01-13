import { useMemo } from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import {
  getBep20Contract,
  getErc721Contract,
  getMulticallContract,
  getTimeShopContract,
  getSinglePoolContract,
} from 'utils/contractHelpers'
import { getContract } from 'utils/contract'
import { ChainId } from 'swap-sdk'

// Imports below migrated from Exchange useContract.ts
import { Contract } from '@ethersproject/contracts'
import ERC20_ABI from '../config/abi/erc20.json'
import { ERC20_BYTES32_ABI } from '../config/abi/erc20'
import ENS_ABI from '../config/abi/ens-registrar.json'
import ENS_PUBLIC_RESOLVER_ABI from '../config/abi/ens-public-resolver.json'

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useERC20 = (address: string) => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getBep20Contract(address, library.getSigner()), [address, library])
}

/**
 * @see https://docs.openzeppelin.com/contracts/3.x/api/token/erc721
 */
export const useERC721 = (address: string) => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getErc721Contract(address, library.getSigner()), [address, library])
}

// Code below migrated from Exchange useContract.ts

// returns null on errors
function useContract(address: string | undefined, ABI: any, withSignerIfPossible = true): Contract | null {
  const { library, account } = useActiveWeb3React()

  return useMemo(() => {
    if (!address || !ABI || !library) return null
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [address, ABI, library, withSignerIfPossible, account])
}

export function useTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible)
}

export function useENSResolverContract(address: string | undefined, withSignerIfPossible?: boolean): Contract | null {
  return useContract(address, ENS_PUBLIC_RESOLVER_ABI, withSignerIfPossible)
}

export function useMulticallContract(): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useMemo(() => getMulticallContract(), [chainId])
}

export const useTimeShop = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getTimeShopContract(library.getSigner()), [library])
}

export const useSinglePool = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getSinglePoolContract(library.getSigner()), [library])
}

export function useBytes32TokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, ERC20_BYTES32_ABI, withSignerIfPossible)
}

export function useENSRegistrarContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  let address: string | undefined
  if (chainId) {
    // eslint-disable-next-line default-case
    switch (chainId) {
      case ChainId.MAINNET:
      case ChainId.TESTNET:
        address = '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
        break
    }
  }
  return useContract(address, ENS_ABI, withSignerIfPossible)
}