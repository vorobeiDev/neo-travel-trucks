import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '../helpers/api.js';
import { setPage } from './productsSlice.js';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (page = 1, { dispatch, rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/campers', {
        params: {
          page,
          limit: 4,
        }
      });

      dispatch(setPage(page));

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
