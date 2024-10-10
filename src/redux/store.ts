import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { reducer } from "./root-reducer";
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import appMiddlewares from "./middlewares/appMiddlewares";

// Create the store
const setupStore = (preloadedState?: Partial<ReduxState>) => {
  // Configure the store
  return configureStore({
    preloadedState,
    reducer,
    /**
     * Configures the middleware for the Redux store.
     *
     * @param {Function} getDefaultMiddleware - A function that returns the default middleware.
     * @return {Array} An array of configured middleware.
     */
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false,
      }).concat(appMiddlewares);
    },
    devTools: process.env.NODE_ENV !== "production",
  });
};

// Export hooks for useDispatch and useSelector
export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

// Infer the `ReduxState` and `AppDispatch` types from the store itself
export type ReduxStore = ReturnType<typeof setupStore>;
export type ReduxState = ReturnType<typeof reducer>;
export type AppDispatch = ReturnType<typeof setupStore>["dispatch"];
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action<string>
>;

// Create the Redux store
export const store = setupStore();
