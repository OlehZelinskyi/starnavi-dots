import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

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
