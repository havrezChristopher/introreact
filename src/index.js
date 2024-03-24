import React from "react";
import { Analytics } from "@vercel/analytics/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);
