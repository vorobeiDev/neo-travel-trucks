import { createSlice } from '@reduxjs/toolkit';

import { fetchProductById } from './productsOps.js';

const productInitialState = {
  item: null,
  isLoading: false,
  isError: null
};

const handlePending = (state) => {
  state.isLoading = true;
  state.isError = null;
}

const handleRejected = (state, action) => {
  state.item = null;
  state.isLoading = false;
  state.isError = action.payload;
}

const productSlice = createSlice({
  name: 'product',
  initialState: productInitialState,
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
      .addCase(fetchProductById.pending, handlePending)
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.item = action.payload;
        state.isLoading = false;
        state.isError = '';
      })
      .addCase(fetchProductById.rejected, handleRejected)
  },
});

export const selectProduct = (state) => state.product;

export default productSlice.reducer;
