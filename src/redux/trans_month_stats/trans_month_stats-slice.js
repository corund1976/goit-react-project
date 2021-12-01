import { createSlice } from "@reduxjs/toolkit";

import { getPeriod } from "./trans_month_stats-thunk";

const initialState = {
  data: {},
  error: null,
  isLoading: false,
};

const trans_month_stats = createSlice({
  name: "userContactBooktrans_month_stats",
  initialState,
  extraReducers: {
    [getPeriod.pending]: (state, _) => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [getPeriod.fulfilled]: (state, { payload }) => ({
      ...state,
      data: payload,
      isLoading: false,
    }),
    [getPeriod.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
  },
});

export default trans_month_stats.reducer;
