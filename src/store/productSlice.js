import {createSlice} from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      console.log('state', state);
      console.log('action', action);
      state.products = [...state.products, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {addProduct} = productSlice.actions;

export default productSlice.reducer;
