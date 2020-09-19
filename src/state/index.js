import { createSlice } from "@reduxjs/toolkit";

export const status = {
  pending: "pending",
  rejected: "rejected",
  fulfilled: "fulfilled",
};

export const initialState = {
  name: "",
  status: status.pending,
};

const slice = createSlice({
  name: "master",
  initialState,
  reducers: {
    pending: () => ({ name: "", status: status.pending }),
    fulfilled: (_state, action) => ({
      status: status.fulfilled,
      name: action.payload,
    }),
    rejected: () => ({ status: status.rejected, name: "" }),
  },
});

export const { pending, rejected, fulfilled } = slice.actions;

export default slice.reducer;
