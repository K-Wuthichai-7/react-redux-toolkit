import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
  };

  const productSlice = createSlice({
    name: 'products',
    initialState,
  })

  // console.log(productSlice);


  export default productSlice.reducer;