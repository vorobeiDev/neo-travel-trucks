import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchProductsApi } from '../helpers/api.js';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (isConcat = true, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const { page, filters } = state.products;
      return {
        ...await fetchProductsApi({page, filters}),
        isConcat,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
