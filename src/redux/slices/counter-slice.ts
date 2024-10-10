import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../store";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Reducers
export const counterReducer = counterSlice.reducer;

// Actions
export const { increment, decrement } = counterSlice.actions;

// Selectors
export const selectCount = (state: ReduxState) => state.counter.value;

// Infer the `CounterState` and `AppDispatch` types from the store itself
export type CounterState = ReturnType<typeof counterSlice.reducer>;
