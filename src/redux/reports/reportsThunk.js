import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "services/kapusta-api";

const getPeriod = createAsyncThunk(
  "transactions/getPeriodData",
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await api.getPeriodData(date);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// eslint-disable-next-line import/no-anonymous-default-export
export default { getPeriod };


