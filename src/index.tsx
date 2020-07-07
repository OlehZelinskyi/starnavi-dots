import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";

// Components
import Main from "./components/Main";

// Store
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,

  document.getElementById("root")
);
