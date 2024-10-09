import { combineReducers } from "@reduxjs/toolkit";
import { createApiWithRetry } from "../services";

export const reducer = combineReducers({
  [createApiWithRetry.reducerPath]: createApiWithRetry.reducer,
});
