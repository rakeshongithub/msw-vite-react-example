import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

async function enableMocking() {
  if (import.meta.env.VITE_APP_MOCK_API !== "true") {
    return;
  }

  const { worker } = await import("./mocks/browser.ts");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking()
  .then(() => {
    createRoot(document.getElementById("root")!).render(
      <StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </StrictMode>
    );
  })
  .catch((e) => {
    console.error(e);
    console.error("Failed to enable mocking");
  });
