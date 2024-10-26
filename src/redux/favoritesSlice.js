import { createSlice } from '@reduxjs/toolkit';

const favoritesInitialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesInitialState,
  reducers: {
    toggleFavorite: (state, action) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter((id) => id !== action.payload);
      } else {
        state.favorites.push(action.payload);
      }
    }
  },
});

export const selectFavorites = (state) => state.favorites.favorites;

export const {
  toggleFavorite,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
