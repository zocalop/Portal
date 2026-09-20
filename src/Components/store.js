
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Cart/CartSlice.jsx';
import siReducer from './navbar/SISlice.jsx';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    stranger_inventory: siReducer
  },
});

export default store
