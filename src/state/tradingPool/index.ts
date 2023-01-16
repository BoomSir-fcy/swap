import { createSlice } from '@reduxjs/toolkit'
import BigNumber from 'bignumber.js'
import { TradePoolsState, TradePool, AppThunk } from 'state/types'
import { fetchPoolsDtaList } from './fetchPools'
import { fetchPoolsAllowance } from './fetchPoolsUser'
import fetchVaultUser from './fetchVaultUser'

const initialState: TradePoolsState = {
  data: [],
  userDataLoaded: false,
  poolDataLoaded: false,
  totalAllocPoint: null,
  totalQuantityAllocPoint: null,
  userData: {
    isLoading: false,
    pendingRewards: 0,
  },
}

export const fetchPoolsPublicDataListAsync = () => async (dispatch) => {
  const data = await fetchPoolsDtaList()
  let totalAllocPoint = new BigNumber(0)
  let totalQuantityAllocPoint = new BigNumber(0)
  const value = data.map((item) => {
    totalAllocPoint = totalAllocPoint.plus(item.accQuantity.toJSON().hex)
    totalQuantityAllocPoint = totalQuantityAllocPoint.plus(item.quantity.toJSON().hex)
    return {
      pid: item.pid.toNumber(),
      pair: item.pair,
      allocPoint: item.allocPoint.toJSON().hex,
      lastRewardBlock: item.lastRewardBlock.toJSON().hex,
      rewardsPerBlock: item.rewardsPerBlock.toJSON().hex,
      accRewardPerShare: item.accRewardPerShare.toJSON().hex,
      allocRewardAmount: item.allocRewardAmount.toJSON().hex,
      accRewardAmount: item.accRewardAmount.toJSON().hex,
      quantity: item.quantity.toJSON().hex,
      accQuantity: item.accQuantity.toJSON().hex,
      token0: item.token0,
      symbol0: item.symbol0,
      name0: item.name0,
      decimals0: item.decimals0,
      token1: item.token1,
      symbol1: item.symbol1,
      name1: item.name1,
      decimals1: item.decimals1,
    }
  })
  dispatch(setPoolsPublicDataList(value))
  dispatch(
    setTotalAllocPoint({
      totalAllocPoint: totalAllocPoint.toString(),
      totalQuantityAllocPoint: totalQuantityAllocPoint.toString(),
    }),
  )
}

export const fetchPoolsUserDataAsync =
  (account: string): AppThunk =>
  async (dispatch) => {
    const allowances = await fetchPoolsAllowance(account)
    const userAllowances = allowances.map((item) => ({
      quantity: item.quantity.toJSON().hex,
      accQuantity: item.accQuantity.toJSON().hex,
      unclaimedRewards: item.unclaimedRewards.toJSON().hex,
      accRewardAmount: item.accRewardAmount.toJSON().hex,
    }))
    dispatch(setPoolsUserData(userAllowances))
  }

export const fetchVaultUserAsync =
  (account: string): AppThunk =>
  async (dispatch, getState) => {
    const state = getState()
    const res = await fetchVaultUser(state.tradingPool.data, account)
    dispatch(setPoolUserData(res))
  }

export const PoolsSlice = createSlice({
  name: 'TradingPool',
  initialState,
  reducers: {
    setPoolsPublicDataList: (state, action) => {
      const livePoolsData: TradePool[] = action.payload
      state.data = livePoolsData.map((item) => {
        const pool = state.data.find((entry) => entry.pid === item.pid) || {}
        return {
          ...item,
          ...pool,
        }
      })
      state.poolDataLoaded = true
    },
    setTotalAllocPoint: (state, action) => {
      state.totalAllocPoint = action.payload.totalAllocPoint
      state.totalQuantityAllocPoint = action.payload.totalQuantityAllocPoint
    },

    setPoolsUserData: (state, action) => {
      const userData = action.payload
      state.data = state.data.map((pool, index) => {
        const userPoolData = userData[index]
        return { ...pool, userData: userPoolData }
      })
      state.userDataLoaded = true
    },
    setPoolUserData: (state, action) => {
      const userData = action.payload
      state.userData = userData
    },
  },
})

// Actions
export const { setPoolsPublicDataList, setPoolsUserData, setTotalAllocPoint, setPoolUserData } = PoolsSlice.actions

export default PoolsSlice.reducer
