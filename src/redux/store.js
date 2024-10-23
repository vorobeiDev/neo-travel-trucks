import { configureStore } from '@reduxjs/toolkit';

import productsSlice from './productsSlice.js';
import filtersReducer from './filtersSlice.js';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    filters: filtersReducer,
  },
});
