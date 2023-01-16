import { ToastContainerProps } from "react-toastify";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";
import { PoolsState } from "./pools/types";
import { CurrencyAmount, Price, Token, TokenAmount } from "swap-sdk";
import { State } from "state";

export interface AppStore {
  isDark: boolean;
  show: boolean;
  toast: {
    type: string;
    text: string;
    toastContainer?: ToastContainerProps;
  };
}
export interface PolyData {
  fromToken: {
    symbol: string;
    name: string;
    address: string;
    decimals: number;
    logoURI: string;
  };
  toToken: {
    symbol: string;
    name: string;
    address: string;
    decimals: number;
    logoURI: string;
  };
  toTokenAmount: string;
  fromTokenAmount: string;
  protocols: [
    [
      [
        {
          name: string;
          part: number;
          fromTokenAddress: string;
          toTokenAddress: string;
        }
      ],
      [
        {
          name: string;
          part: number;
          fromTokenAddress: string;
          toTokenAddress: string;
        }
      ],
      [
        {
          name: string;
          part: number;
          fromTokenAddress: string;
          toTokenAddress: string;
        }
      ]
    ]
  ];
  price: Price;
  estimatedGas: number; // do not use gas limit from the quote method
  isPolyMethed: boolean;
  currencyAmount: CurrencyAmount;
  toCurrencyAmount: CurrencyAmount;
  fromCurrencyTokenAmount?: TokenAmount;
  fromCurrencyToken?: Token;
}
export interface PolyDataIndex {
  lastQueryTimestamp?: number;
  fromTokenAddress?: string;
  toTokenAddress?: string;
  amount?: string;
  slippage?: number;
  fromAddress?: string;
  amountDecimal?: string;
}
export interface PolyApproveData {
  data: string;
  gasPrice: string;
  to: string;
  value: string;
}

export interface PolyAllowance {
  [address: string]: string;
}
export interface PolySwapState {
  polyData?: PolyData;
  polyDataIndex?: PolyDataIndex;
  polyApproveData?: PolyApproveData;
  polyAllowance?: PolyAllowance;
  polySpender?: string;
}
export enum PolyDataIndexStatus {
  NOT_SWAP_DATA,
  NEED_QUERY,
  NEED_REFRESH,
  LOADED,
}

type uint256 = number
type uint8 = number
type address = string
export interface TradePool {
  pid: uint256
  pair: address
  allocPoint: uint256
  lastRewardBlock: uint256
  rewardsPerBlock: uint256
  accRewardPerShare: uint256
  allocRewardAmount: uint256
  accRewardAmount: uint256
  quantity: uint256
  accQuantity: uint256
  token0: address
  symbol0: string
  name0: string
  decimals0: uint8
  token1: address
  symbol1: string
  name1: string
  decimals1: uint8
  totalAmount: uint256
  userData?: {
    quantity: uint256
    accQuantity: uint256
    unclaimedRewards: uint256
    accRewardAmount: uint256
  }
}

export interface TradePoolUserData {
  isLoading: boolean
  pendingRewards: number
}

export interface TradePoolsState {
  data: TradePool[]
  userDataLoaded: boolean
  poolDataLoaded: boolean
  totalAllocPoint: null | number
  totalQuantityAllocPoint: null | number
  userData: TradePoolUserData
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  State,
  unknown,
  AnyAction
>;
