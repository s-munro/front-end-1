import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles.css";
import { createStore, applyMiddleware, compose } from "redux";
//import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import reducer from "./reducers";

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <ThemeProvider theme={theme} store={store}>
  {/* <Provider > */}
    <App />
  {/* </Provider> */}
  </ThemeProvider>,
  document.getElementById("root")
);

reportWebVitals();
