import { createReducer } from '@reduxjs/toolkit'
import { INITIAL_ALLOWED_SLIPPAGE, DEFAULT_DEADLINE_FROM_NOW } from '../../config/constants'
import { updateVersion } from '../global/actions'
import {
  addSerializedPair,
  addSerializedToken,
  removeSerializedPair,
  removeSerializedToken,
  SerializedPair,
  SerializedToken,
  updateUserExpertMode,
  updateUserSlippageTolerance,
  updateUserDeadline,
  updateUserSingleHopOnly,
  muteAudio,
  unmuteAudio,
  toggleTheme,
  updateUserUsePloy,
  updateSystemUsePloy,
  setVDsgInviteAddress,
  updateUseFarmGet,
  updateUseFarmPledge,
  updateUseNestGet,
  updateUseNestPledge,
  updateUseTaskGet
} from './actions'

const currentTimestamp = () => new Date().getTime()

export interface UserState {
  // the timestamp of the last updateVersion action
  lastUpdateVersionTimestamp?: number

  userExpertMode: boolean

  // only allow swaps on direct pairs
  userSingleHopOnly: boolean

  // user defined slippage tolerance in bips, used in all txns
  userSlippageTolerance: number

  // user defined use poly for 1inch
  userUsePoly: boolean

  // user defined use poly for 1inch
  systemUsePoly: boolean

  // deadline set by user in minutes, used in all txns
  userDeadline: number

  // 农场——已完成状态
  useFarmGet: boolean

  // 农场——已质押状态
  useFarmPledge: boolean

  // 龙巢——已完成状态
  useNestGet: boolean

  // 龙巢——已质押状态
  useNestPledge: boolean

  // 任务——已完成
  useTaskGet: boolean

  tokens: {
    [chainId: number]: {
      [address: string]: SerializedToken
    }
  }

  pairs: {
    [chainId: number]: {
      // keyed by token0Address:token1Address
      [key: string]: SerializedPair
    }
  }

  timestamp: number
  audioPlay: boolean
  isDark: boolean

  vDsgInviteAddress: string

}

function pairKey(token0Address: string, token1Address: string) {
  return `${token0Address};${token1Address}`
}

export const initialState: UserState = {
  userExpertMode: false,
  userSingleHopOnly: false,
  userUsePoly: false,
  systemUsePoly: false,
  userSlippageTolerance: INITIAL_ALLOWED_SLIPPAGE,
  userDeadline: DEFAULT_DEADLINE_FROM_NOW,
  tokens: {},
  pairs: {},
  timestamp: currentTimestamp(),
  audioPlay: false,
  isDark: false,
  vDsgInviteAddress: '',
  useFarmGet: false,
  useFarmPledge: false,
  useNestGet: false,
  useNestPledge: false,
  useTaskGet: false
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateVersion, (state) => {
      // slippage isnt being tracked in local storage, reset to default
      // noinspection SuspiciousTypeOfGuard
      if (typeof state.userSlippageTolerance !== 'number') {
        state.userSlippageTolerance = INITIAL_ALLOWED_SLIPPAGE
      }

      // deadline isnt being tracked in local storage, reset to default
      // noinspection SuspiciousTypeOfGuard
      if (typeof state.userDeadline !== 'number') {
        state.userDeadline = DEFAULT_DEADLINE_FROM_NOW
      }

      state.lastUpdateVersionTimestamp = currentTimestamp()
    })
    .addCase(updateUserExpertMode, (state, action) => {
      state.userExpertMode = action.payload.userExpertMode
      state.timestamp = currentTimestamp()
    })
    .addCase(updateUserSlippageTolerance, (state, action) => {
      state.userSlippageTolerance = action.payload.userSlippageTolerance
      state.timestamp = currentTimestamp()
    })
    .addCase(updateUserDeadline, (state, action) => {
      state.userDeadline = action.payload.userDeadline
      state.timestamp = currentTimestamp()
    })
    .addCase(updateUserSingleHopOnly, (state, action) => {
      state.userSingleHopOnly = action.payload.userSingleHopOnly
    })
    .addCase(addSerializedToken, (state, { payload: { serializedToken } }) => {
      if (!state.tokens) {
        state.tokens = {}
      }
      state.tokens[serializedToken.chainId] = state.tokens[serializedToken.chainId] || {}
      state.tokens[serializedToken.chainId][serializedToken.address] = serializedToken
      state.timestamp = currentTimestamp()
    })
    .addCase(removeSerializedToken, (state, { payload: { address, chainId } }) => {
      if (!state.tokens) {
        state.tokens = {}
      }
      state.tokens[chainId] = state.tokens[chainId] || {}
      delete state.tokens[chainId][address]
      state.timestamp = currentTimestamp()
    })
    .addCase(addSerializedPair, (state, { payload: { serializedPair } }) => {
      if (
        serializedPair.token0.chainId === serializedPair.token1.chainId &&
        serializedPair.token0.address !== serializedPair.token1.address
      ) {
        const { chainId } = serializedPair.token0
        state.pairs[chainId] = state.pairs[chainId] || {}
        state.pairs[chainId][pairKey(serializedPair.token0.address, serializedPair.token1.address)] = serializedPair
      }
      state.timestamp = currentTimestamp()
    })
    .addCase(removeSerializedPair, (state, { payload: { chainId, tokenAAddress, tokenBAddress } }) => {
      if (state.pairs[chainId]) {
        // just delete both keys if either exists
        delete state.pairs[chainId][pairKey(tokenAAddress, tokenBAddress)]
        delete state.pairs[chainId][pairKey(tokenBAddress, tokenAAddress)]
      }
      state.timestamp = currentTimestamp()
    })
    .addCase(muteAudio, (state) => {
      state.audioPlay = false
    })
    .addCase(unmuteAudio, (state) => {
      state.audioPlay = true
    })
    .addCase(updateUserUsePloy, (state, { payload: { userUsePoly } }) => {
      state.userUsePoly = userUsePoly
    })
    .addCase(updateSystemUsePloy, (state, { payload: { systemUsePoly } }) => {
      state.systemUsePoly = systemUsePoly
    })
    .addCase(setVDsgInviteAddress, (state, { payload: { address } }) => {
      state.vDsgInviteAddress = address
    })
    .addCase(toggleTheme, (state) => {
      state.isDark = !state.isDark
    })
    .addCase(updateUseFarmGet, (state, { payload: { useFarmGet } }) => {
      state.useFarmGet = useFarmGet
    })
    .addCase(updateUseFarmPledge, (state, { payload: { useFarmPledge } }) => {
      state.useFarmPledge = useFarmPledge
    })
    .addCase(updateUseNestGet, (state, { payload: { useNestGet } }) => {
      state.useNestGet = useNestGet
    })
    .addCase(updateUseNestPledge, (state, { payload: { useNestPledge } }) => {
      state.useNestPledge = useNestPledge
    })
    .addCase(updateUseTaskGet, (state, { payload: { useTaskGet } }) => {
      state.useTaskGet = useTaskGet
    }),
)
