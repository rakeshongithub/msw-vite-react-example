import { createLogger } from "redux-logger";

// Configure the middleware for the Redux store.
const appMiddlewares = [
  createLogger({
    duration: true,
    timestamp: true,
    collapsed: true,
    colors: {
      title: () => "#af3c64",
      prevState: () => "#414875",
      action: () => "#149945",
      nextState: () => "#ff517d",
      error: () => "#ff0005",
    },
  }),
];

export default appMiddlewares;
