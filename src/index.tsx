import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Global } from "./styled/Global";
import { Provider } from "react-redux";
import { store } from "./redux/redux-store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </React.StrictMode>
);
