import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./ProductReducer";

export const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
})