import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import walletReduce from "./wallet/reducer";
import type { WalletState } from "./wallet/type";
import poolsReduce from "./pools";
import { PoolsState } from "./pools/types";
import lists, { ListsState } from "./lists/reducer";
import multicall, { MulticallState } from "./multicall/reducer";
import application, { ApplicationState } from "./application/reducer";
import user, { UserState } from "./user/reducer";
import swap, { SwapState } from "./swap/reducer";
import transactions, { TransactionState } from "./transactions/reducer";
import mint, { MintState } from "./mint/reducer";

export interface Store {
  test: any;
  pools: PoolsState;
  wallet: WalletState;
  multicall: MulticallState;
  application: ApplicationState;
  user: UserState;
  lists: ListsState;
  swap: SwapState;
  transactions: TransactionState;
  mint: MintState;
}
const PERSISTED_KEYS: string[] = ["user", "transactions", "lists"];

export const store = configureStore({
  reducer: {
    pools: poolsReduce,
    wallet: walletReduce,
    multicall,
    application,
    user,
    swap,
    transactions,
    mint,
    lists,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const storeAction = {};

export function useStore<TSelected>(
  selector: (state: Store) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
) {
  return useSelector<Store, TSelected>(selector, equalityFn);
}

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;