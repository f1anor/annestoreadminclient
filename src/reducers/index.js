import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import productReducer from "./poduct-reducer";
import catReducer from "./cat-reducer";
import dashboardReducer from "./dashboard-reducer";
import ordersReducer from "./orders-reducer";

export default combineReducers({
  form: formReducer,
  product: productReducer,
  category: catReducer,
  dashboard: dashboardReducer,
  orders: ordersReducer,
});
