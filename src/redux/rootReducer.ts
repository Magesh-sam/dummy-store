import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from './slice/cartSlice';


const rootReducer = combineReducers({
    cart: cartReducer
})

export default rootReducer;