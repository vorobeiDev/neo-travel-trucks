import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

import { featureProductByIdApi, fetchProductsApi } from '../utils/api.js';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (isConcat = true, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const { page, filters } = state.catalog;
      return {
        ...await fetchProductsApi({page, filters}),
        isConcat,
      };
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  },
);

export const fetchProductById = createAsyncThunk(
  'product/fetchProductById',
  async (productId, { rejectWithValue }) => {
    try {
      return await featureProductByIdApi(productId);
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  },
);
