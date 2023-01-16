import BigNumber from 'bignumber.js'
import tradingPoolABI from 'config/abi/liquidityPool.json'
import multicall from 'utils/multicall'
import { getTradingPoolAddress } from 'utils/addressHelpers'

const fetchVaultUser = async (list, account: string) => {
  try {
    const calls = list.map((item) => {
      return {
        address: getTradingPoolAddress(),
        name: 'pendingRewards',
        params: [item.pid, account],
      }
    })
    const datas = await multicall(tradingPoolABI, calls)
    let pendingRewards = new BigNumber(0)
    datas.forEach((element) => {
      pendingRewards = pendingRewards.plus(element)
    })
    return {
      pendingRewards: pendingRewards.toString(),
      isLoading: false,
    }
  } catch (error) {
    return {
      isLoading: true,
      pendingRewards: 0,
    }
  }
}

export default fetchVaultUser
