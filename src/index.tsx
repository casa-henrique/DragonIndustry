import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";

import GlobalStyles from "./styles/GlobalStyles";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
