import React from "react";
import ReactDOM from "react-dom/client";


import "./index.css";

import Routes from "./routes"; 

import { AuthProvider } from "./hooks/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>
);

