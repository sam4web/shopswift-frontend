import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/styles/main.scss";
import App from "@/App.jsx";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { Provider } from "react-redux";
import store from "@/app/store.js";

if (import.meta.env.VITE_NODE_ENV === "production")
  disableReactDevTools();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);