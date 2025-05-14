import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import FeatureFlags from "./context/FeatureFlags.tsx";
createRoot(document.getElementById("root")!).render(
  <FeatureFlags>
    <App />
  </FeatureFlags>
);
