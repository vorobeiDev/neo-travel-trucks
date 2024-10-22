import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  search: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    changeFilter: (state, action) => {
      state.search = action.payload;
    }
  },
});

export const selectNameFilter = (state) => state.filters.search;

export const {
  changeFilter,
} = filtersSlice.actions;

export default filtersSlice.reducer;