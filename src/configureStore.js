// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import reducer from "./reducers";

// const middleware = getDefaultMiddleware();
// export default configureStore({ reducer, middleware });

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
