
import { createSlice } from '@reduxjs/toolkit';

export const SISlice = createSlice({
  name: 'stranger_inventory',
  initialState: {
    items: [],
    cartLoaded: false
  },

  reducers: {
    recieveItem: (state, action) => {
      const { name, image, quantity } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          name,
          image,
          quantity
        });
      }
    },

    dropItem: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToDrop = state.items.find(item => item.name === name);
      if (itemToDrop) {
        itemToDrop.quantity = quantity;
      }
    }
  }
});

export const { recieveItem, dropItem } = SISlice.actions;

export default SISlice.reducer;
