import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducers";

const middleware = getDefaultMiddleware();
export default configureStore({ reducer, middleware });
