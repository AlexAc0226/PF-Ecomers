import { combineReducers } from "redux";
import { allProductsReducer } from "./allProductsReducer";

export default combineReducers({
    products: allProductsReducer,

})
