
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { saveCart, getCart } from './CartAPI.js';
import { itemArray } from '../Trader/ItemArray.js';

/*This is for in-browser persistence*/
const savedCart = localStorage.getItem('cart');
const initialState = {
  items: savedCart ? JSON.parse(savedCart) : [],
};

export const saveCartToDatabase = createAsyncThunk(
  "cart/saveCartToDatabase",
  async ({ cart }) => {
    const cartForApi = cart.map(item => ({
      product_name: item.name,
      quantity: item.quantity
    }));

    return await saveCart(cartForApi);
  }
);

export const getCartFromDatabase = createAsyncThunk(
  "cart/getCartFromDatabase",
  async () => {
    return await getCart();
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
    },

    clearCart: (state) => {
      state.items = [];
    }
  },
  
  extraReducers: (builder) => {
    builder.addCase(
      getCartFromDatabase.fulfilled,
      (state, action) => {
        state.items = action.payload.map(dbItem => {
          const product = itemArray
            .flatMap(category => category.wares)
            .find(item => item.name === dbItem.product_name);

          // Product no longer exists in the catalog //
          if (!product) {
            return null;
          }

          return {
            name: product.name,
            image: product.image,
            cost: product.cost,
            quantity: dbItem.quantity
          };
        })
        .filter(item => item !== null);

        state.cartLoaded = true;
      }
    );
  }
});

export const { addItem, removeItem, updateQuantity, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
