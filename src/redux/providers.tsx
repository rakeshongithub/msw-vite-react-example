import { Provider } from "react-redux";
import { store } from "./store";

/**
 * Creates a Provider component that wraps the given children with the Redux store.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The children to be wrapped.
 * @return {JSX.Element} The Provider component.
 */
export const Providers = (props: React.PropsWithChildren) => (
  <Provider store={store}>{props.children}</Provider>
);
