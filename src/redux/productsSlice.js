import { createSelector, createSlice } from '@reduxjs/toolkit';

import { getIsNameEqual, getIsPhoneEqual } from '../helpers/filterHelpers.js';
import { fetchProducts } from './productsOps.js';

const contactsInitialState = {
  total: 0,
  page: 1,
  items: [],
  filters: {},
  isLoading: false,
  isError: null
};

const handlePending = (state) => {
  state.isLoading = true;
  state.isError = null;
}

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
  state.items = [];
  state.page = 1;
  state.total = 0;
}

const contactsSlice = createSlice({
  name: 'products',
  initialState: contactsInitialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setFilters: (state, action) => {
      state.page = 1;
      state.filters = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, handlePending)
      .addCase(fetchProducts.fulfilled, (state, action) => {
        if (action.payload.isConcat) {
          const newItems = action.payload.items.filter(
            (newItem) => !state.items.some((item) => item.id === newItem.id)
          );
          state.items = [...state.items, ...newItems];
        } else {
          state.items = action.payload.items;
        }
        state.total = action.payload.total;
        state.isLoading = false;
        state.isError = '';
      })
      .addCase(fetchProducts.rejected, handleRejected)
  },
});

export const selectProducts = (state) => state.products;

export const {
  setPage,
  setFilters,
} = contactsSlice.actions;

export default contactsSlice.reducer;
