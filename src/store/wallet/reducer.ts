import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { FetchDSGApproveNum, FetchExchangeList, FetchRewardNum, FetchTimeShopInfo } from './hooks';
import { WalletState } from './type';

const initialState: WalletState = {
  ApproveNum: {
    dsg: 0,
  },
  TimeInfo: [],
  CurrentRound: {
    long_time: 0,
    max_dsg_token: 0,
    max_time_token: 0,
    right_now_release: 0,
    times: 1,
    total_dsg: 0
  },
  TimeExchangeList: [],
  rewardNum: 0
};

// Async thunks
// DSG授权数量
export const fetchDSGApproveNumAsync = createAsyncThunk<any, string>('wallet/fetchDSGApproveNumAsync', async (account) => {
  const res = await FetchDSGApproveNum(account);
  return res
});
// Time兑换详情
export const fetchTimeShopInfo = createAsyncThunk<any>('wallet/fetchTimeShopInfo', async () => {
  const res = await FetchTimeShopInfo();
  return res
});
// Time兑换历史
export const fetchTimeExchangeList = createAsyncThunk<any, any>('wallet/fetchTimeExchangeList', async ({ account, page, pageSize = 10 }) => {
  const res = await FetchExchangeList(account, page, pageSize);
  return res
});
// DSG全部可领取数量
export const fetchRewardNumAsync = createAsyncThunk<any, string>('wallet/fetchRewardNumAsync', async (account) => {
  const res = await FetchRewardNum(account);
  return res
});

export const wallet = createSlice({
  name: 'wallet',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDSGApproveNumAsync.fulfilled, (state, action) => {
        state.ApproveNum.dsg = action.payload;
      })
      .addCase(fetchTimeShopInfo.fulfilled, (state, action) => {
        const arr = action.payload;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].total_dsg < arr[i].max_dsg_token) {
            state.CurrentRound = arr[i]
            break
          }
        }
        state.TimeInfo = action.payload;
      })
      .addCase(fetchTimeExchangeList.fulfilled, (state, action) => {
        state.TimeExchangeList = action.payload;
      })
      .addCase(fetchRewardNumAsync.fulfilled, (state, action) => {
        state.rewardNum = action.payload;
      })
  }
});

export default wallet.reducer;
