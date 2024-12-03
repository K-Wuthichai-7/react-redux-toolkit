import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import productsReducer from "./features/cart/productSlice"
import modalReducer from './features/modal/modalSlice'


export const store = configureStore({

  reducer: {
   cart:cartReducer,
   products:productsReducer,
   modal:modalReducer
  },
 
});

console.log(cartReducer)