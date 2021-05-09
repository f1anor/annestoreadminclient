import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LayoutContainer from "./LayoutContainer";

// const store = configureStore();

const App = () => {
  return (
    <Provider store={configureStore}>
      <BrowserRouter>
        <LayoutContainer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
