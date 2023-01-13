import { ToastContainerProps } from "react-toastify";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";
import { PoolsState } from "./pools/types";
import { CurrencyAmount, Price, Token, TokenAmount } from "swap-sdk";

export interface State {
  pools: PoolsState;
}

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

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  State,
  unknown,
  AnyAction
>;
