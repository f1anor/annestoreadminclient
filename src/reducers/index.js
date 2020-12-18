import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import productReducer from "./poduct-reducer";
import catReducer from "./cat-reducer";
import dashboardReducer from "./dashboard-reducer";
import ordersReducer from "./orders-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";

export default combineReducers({
  form: formReducer,
  product: productReducer,
  category: catReducer,
  dashboard: dashboardReducer,
  orders: ordersReducer,
  users: usersReducer,
  auth: authReducer,
  app: appReducer,
});
