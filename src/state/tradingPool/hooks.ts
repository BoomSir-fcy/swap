import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { State, useAppDispatch } from 'state'
import useRefresh from 'hooks/useRefresh'
import { fetchPoolsPublicDataListAsync, fetchVaultUserAsync, fetchPoolsUserDataAsync } from '.'
import {  TradePool, TradePoolUserData } from '../types'

export const useFetchPublicPoolsData = () => {
  const dispatch = useAppDispatch()
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    dispatch(fetchPoolsPublicDataListAsync())
  }, [dispatch, slowRefresh])
}

export const usePools = (
  account,
): {
  pools: TradePool[]
  userDataLoaded: boolean
  poolDataLoaded: boolean
  userData: TradePoolUserData
  totalAllocPoint: number
  totalQuantityAllocPoint: number
} => {
  const { fastRefresh } = useRefresh()
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchPoolsUserDataAsync(account))
      dispatch(fetchVaultUserAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const { pools, userDataLoaded, userData, totalAllocPoint, totalQuantityAllocPoint, poolDataLoaded } = useSelector(
    (state: State) => ({
      pools: state.tradingPool.data,
      userDataLoaded: state.tradingPool.userDataLoaded,
      poolDataLoaded: state.tradingPool.poolDataLoaded,
      userData: state.tradingPool.userData,
      totalAllocPoint: state.tradingPool.totalAllocPoint,
      totalQuantityAllocPoint: state.tradingPool.totalQuantityAllocPoint,
    }),
  )
  return { pools, userDataLoaded, poolDataLoaded, userData, totalAllocPoint, totalQuantityAllocPoint }
}
