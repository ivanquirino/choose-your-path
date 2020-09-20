import { createSlice } from "@reduxjs/toolkit";

export const Status = {
  pending: "pending",
  rejected: "rejected",
  fulfilled: "fulfilled",
};

export const initialState = {
  name: "",
  status: Status.pending,
};

const slice = createSlice({
  name: "master/fetch",
  initialState,
  reducers: {
    pending: () => ({ name: "", status: Status.pending }),
    fulfilled: (_state, action) => ({
      status: Status.fulfilled,
      name: action.payload,
    }),
    rejected: () => ({ status: Status.rejected, name: "" }),
  },
});

export const { pending, rejected, fulfilled } = slice.actions;

export default slice.reducer;
