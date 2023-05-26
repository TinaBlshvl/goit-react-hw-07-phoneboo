import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { addContact, getAllContacts, deleteContact } from './operations';

const contactsRequests = [addContact, getAllContacts, deleteContact];

function typeRequestContacts(type) {
  return contactsRequests.map(elem => elem[type]);
}

const handlePending = (state, action) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const addFulf = (state, { payload }) => {
  state.isLoading = false;
  state.items = [...state.items, payload];
  state.error = '';
};

const getFulf = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
  state.error = '';
};

const deleteFulf = (state, { payload }) => {
  state.isLoading = false;
  state.items = state.items.filter(({ id }) => id !== payload.id);
  state.error = '';
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  extraReducers: builder => {
    builder
      .addCase(addContact.fulfilled, addFulf)
      .addCase(getAllContacts.fulfilled, getFulf)
      .addCase(deleteContact.fulfilled, deleteFulf)
      .addMatcher(isAnyOf(...typeRequestContacts('pending')), handlePending)
      .addMatcher(isAnyOf(...typeRequestContacts('rejected')), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
