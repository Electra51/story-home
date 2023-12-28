import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import ScrollToTop from "react-scroll-to-top";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      <ScrollToTop smooth color="#f2f0f5" />
    </ThemeProvider>
  </React.StrictMode>
);
