import {configureStore} from '@reduxjs/toolkit';
// import counterSlice from './counterSlice';
import userSlice from './userSlice';
import productSlice from './productSlice';

export default configureStore({
  reducer: {
    // counter: counterSlice,
    user: userSlice,
    product: productSlice,
  },
});
