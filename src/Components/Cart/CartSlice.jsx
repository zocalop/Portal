
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { saveCart } from './CartAPI.js';
import { getCart } from './CartAPI.js';

/*This is for in-browser persistence*/
const savedCart = localStorage.getItem('cart');
const initialState = {
  items: savedCart ? JSON.parse(savedCart) : [],
};

export const saveCartToDatabase = createAsyncThunk(
  "cart/saveCartToDatabase",
  async ({ user_id, cart }) => {
    const cartForApi = cart.map(item => ({
      product_name: item.name,
      quantity: item.quantity
    }));

    return await saveCart(user_id, cartForApi);
  }
);

export const getCartFromDatabase = createAsyncThunk(
  "cart/getCartFromDatabase",
  async (user_id) => {
    return await getCart(user_id);
  }
);

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    cartLoaded: false
  },

  reducers:  {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
 
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    }
  },
  
  extraReducers: (builder) => {
    builder.addCase(
      getCartFromDatabase.fulfilled,
      (state, action) => {
        state.items = action.payload
        state.cartLoaded = true;
      }
    );
  }
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
