import { combineReducers } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import { productReducer } from "./poduct-reducer";
import { catReducer } from "./cat-reducer";
import { dashboardReducer } from "./dashboard-reducer";
import { ordersReducer } from "./orders-reducer";
import { usersReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";
import { appReducer } from "./app-reducer";
import { commentsReducer } from "./comments-reducer";

export default combineReducers({
  dashboard: dashboardReducer,
  comments: commentsReducer,
  category: catReducer,
  product: productReducer,
  orders: ordersReducer,
  users: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});
