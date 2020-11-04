import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./configureStore";
import MainContainer from "./components/MainContainer";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainContainer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
