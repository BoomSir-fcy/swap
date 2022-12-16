import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import walletReduce from './wallet/reducer';
import type { WalletState } from './wallet/type';
import poolsReduce from './pools';
import { PoolsState } from './pools/types';

export interface Store {
  test: any;
  pools: PoolsState;
  wallet: WalletState;
}

export const store = configureStore({
  reducer: {
    pools: poolsReduce,
    wallet: walletReduce,
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export const storeAction = {
};

export function useStore<TSelected>(
  selector: (state: Store) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
) {
  return useSelector<Store, TSelected>(selector, equalityFn);
}

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
