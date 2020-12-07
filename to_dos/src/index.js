import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ToDosProvider from "./context";

ReactDOM.render(
  <ToDosProvider>
    <App />
  </ToDosProvider>,
  document.getElementById("root")
);