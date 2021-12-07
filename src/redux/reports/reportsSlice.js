import { createSlice } from "@reduxjs/toolkit";

import { reportsThunk } from "redux/reports";


const initialState = {
  data: {},
  error: null,
  isLoading: false,
};

const reports = createSlice({
  name: "reports",
  initialState,
  extraReducers: {
    [reportsThunk.getPeriod.pending]: (state, _) => ({
      ...state,

      isLoading: true,
    }),
    [reportsThunk.getPeriod.fulfilled]: (state, { payload }) => ({
      ...state,
      data: payload,
      error: null,
      isLoading: false,
    }),
    [reportsThunk.getPeriod.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
  },
});

export default reports.reducer;
