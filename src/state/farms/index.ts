import { createSlice } from "@reduxjs/toolkit";
import { AppThunk, FarmsState } from "state/types";
import { fetchAdditionalRates } from "./fetchList";


const initialState: FarmsState = {
    levelRates: []
  }

export const fetchAdditionalRatesAsync = (): AppThunk => async (dispatch) => {
  const levelRate = await fetchAdditionalRates();
  dispatch(setAdditionalRates(levelRate));
};

/*  createSlice */
export const farmsSlice = createSlice({
  name: "Farms",
  initialState,
  reducers: {
    setAdditionalRates: (state, action) => {
      const { payload } = action;
      state.levelRates = payload;
    },
  },
});

// Actions
export const { setAdditionalRates } = farmsSlice.actions;

export default farmsSlice.reducer;
