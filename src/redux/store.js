import { configureStore } from '@reduxjs/toolkit';

import catalogSlice from './catalogSlice.js';
import productSlice from './productSlice.js';

export const store = configureStore({
  reducer: {
    catalog: catalogSlice,
    product: productSlice,
  },
});
