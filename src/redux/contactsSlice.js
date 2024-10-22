import { createSelector, createSlice } from '@reduxjs/toolkit';

import { getIsNameEqual, getIsPhoneEqual } from '../helpers/filterHelpers.js';
import { fetchContacts, addContact, deleteContact } from './contactsOps.js';
import { selectNameFilter } from './filtersSlice.js';

const contactsInitialState = {
  items: [],
  loading: false,
  error: null
};

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
}

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = '';
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
        state.error = '';
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((contact) => contact.id !== action.payload);
        state.loading = false;
        state.error = '';
      })
      .addCase(deleteContact.rejected, handleRejected)
  },
});

export const selectContacts = (state) => state.contacts.items;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, search) => {
    return contacts.filter((contact) => getIsNameEqual(contact.name, search)
      || getIsPhoneEqual(contact.phone, search));
  },
);

export default contactsSlice.reducer;
