import { createSlice } from '@reduxjs/toolkit';

import { fetchProducts } from './productsOps.js';

const catalogInitialState = {
  total: 0,
  page: 1,
  products: [],
  filters: {},
  isLoading: false,
  isError: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.isError = null;
}

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
  state.products = [];
  state.page = 1;
  state.total = 0;
}

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: catalogInitialState,
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
            (newItem) => !state.products.some((item) => item.id === newItem.id)
          );
          state.products = [...state.products, ...newItems];
        } else {
          state.products = action.payload.items;
        }
        state.total = action.payload.total;
        state.isLoading = false;
        state.isError = '';
      })
      .addCase(fetchProducts.rejected, handleRejected)
  },
});

export const selectProducts = (state) => state.catalog;

export const {
  setPage,
  setFilters,
} = catalogSlice.actions;

export default catalogSlice.reducer;
