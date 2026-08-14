
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Cart/CartSlice.jsx';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store
