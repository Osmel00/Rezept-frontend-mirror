import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./styles/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
