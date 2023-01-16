import multicall from 'utils/multicall'
import { getTradingPoolAddress } from 'utils/addressHelpers'
import tradingPoolABI from 'config/abi/tradingPool.json'


export const fetchPoolsAllowance = async (account) => {
  const calls = [
    {
      address: getTradingPoolAddress(),
      name: 'getUserViews',
      params: [account],
    },
  ]

  const allowances = await multicall(tradingPoolABI, calls)
  return allowances[0][0]
}
