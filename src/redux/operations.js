import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiContact } from 'fetch';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async dataContact => {
    return await ApiContact.postContact(dataContact);
  }
);

export const getAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    return await ApiContact.getContacts();
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async id => {
    return await ApiContact.deleteContact(id);
  }
);
