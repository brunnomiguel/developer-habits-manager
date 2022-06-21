import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Provider from "./provider";
import App from "./App";
import Input from "./components/Input";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <Input />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
