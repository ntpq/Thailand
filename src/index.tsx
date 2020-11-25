import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const AppWithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
ReactDOM.render(<AppWithRouter />, document.getElementById("root"));
reportWebVitals();
