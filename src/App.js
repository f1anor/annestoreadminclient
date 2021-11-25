import React from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./configureStore";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import LayoutContainer from "./LayoutContainer";

const App = () => {
  return (
    <Provider store={Store}>
      <HashRouter>
        <LayoutContainer />
      </HashRouter>
    </Provider>
  );
};

export default App;
