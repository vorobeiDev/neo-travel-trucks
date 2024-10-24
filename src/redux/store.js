import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import catalogReducer from './catalogSlice.js';
import favoritesReducer from './favoritesSlice.js';
import productReducer from './productSlice.js';

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

const persistedFavoritesReducer = persistReducer(favoritesPersistConfig, favoritesReducer);

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    product: productReducer,
    favorites: persistedFavoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
