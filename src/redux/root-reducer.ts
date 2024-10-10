import { combineReducers } from "@reduxjs/toolkit";
import { createApiWithRetry } from "../services";
import { counterReducer } from "./slices/counter-slice";

export const reducer = combineReducers({
  [createApiWithRetry.reducerPath]: createApiWithRetry.reducer,
  counter: counterReducer,
});
