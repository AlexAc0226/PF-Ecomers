import { combineReducers } from "redux";
import { productsReducer } from "./allProductsReducer";

export default combineReducers({
    products: productsReducer,

})
