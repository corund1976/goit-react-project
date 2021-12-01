import { createAsyncThunk } from "@reduxjs/toolkit";
// import getPeriodData from "../../services/kapusta-api";
import api from "services/kapusta-api";
export const getPeriod = createAsyncThunk(
  "transactions/getPeriodData",
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await api.getPeriodData(date);
      return data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);
