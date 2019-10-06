import { combineReducers } from "redux";

// Reducers
import coffeeReducer from "./coffeeReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  rootCoffee: coffeeReducer,
  rootCart: cartReducer
});
