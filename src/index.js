import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TodosProvider } from "./context/MainContext";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </React.StrictMode>
);
