
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { saveSI, getSI } from './SIAPI';

export const saveSIToDatabase = createAsyncThunk(
  "si/saveSIToDatabase",
  async ({ si }) => {
    const siForAPI = si.map(item => ({
      product_name: item.name,
      quantity: item.quantity
    }));

    return await saveSI(siForAPI);
  }
);

export const getSIFromDatabase = createAsyncThunk(
  "si/getSIFromDatabase",
  async () => {
    return await getSI();
  }
);

export const SISlice = createSlice({
  name: 'stranger_inventory',
  initialState: {
    items: [],
    siLoaded: false
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
  },

  extraReducers: (builder) => {
    builder.addCase(
      getSIFromDatabase.fulfilled,
      (state, action) => {
        state.siLoaded = true;
        state.items = action.payload;
      }
    );

    builder.addCase(
      getSIFromDatabase.rejected,
      (state, action) => {
        state.siLoaded = false;
        console.error(action.error);
      }
    );
  }
});

export const { recieveItem, dropItem } = SISlice.actions;

export default SISlice.reducer;
