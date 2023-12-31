import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./styles/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContextProvider } from "./context/authContext";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
