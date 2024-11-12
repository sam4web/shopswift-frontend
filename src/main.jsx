import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/styles/main.scss";
import App from "@/App.jsx";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (import.meta.env.VITE_NODE_ENV === "production")
  disableReactDevTools();


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
