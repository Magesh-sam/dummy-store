import { createSlice, } from "@reduxjs/toolkit";

import type { CartSliceState, Product } from "../../lib/types";
import type { PayloadAction } from "@reduxjs/toolkit";





const initialState: CartSliceState = {
    cartItems: [],
    totalPrice: 0,
    totalQuantity: 0
}



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const index = state.cartItems.findIndex((c) => c.id === action.payload.id)
            if (index != -1) {
                state.cartItems[index].quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 })
            }
            state.totalPrice = state.cartItems.reduce((prev, curr) => prev + curr.price, 0);
            state.totalQuantity = state.cartItems.reduce((prev, curr) => prev + curr.quantity, 0);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.cartItems = state.cartItems.filter((c) => c.id !== action.payload);
        }

    }

})


export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;