import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { filterChange } from './contacts-actions';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { meta }) =>
    state.filter(({ id }) => id !== meta.arg),
});

const filter = createReducer('', {
  [filterChange]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: (_, { payload }) => payload,
  [addContact.pending]: () => null,
  [deleteContact.rejected]: (_, { payload }) => payload,
  [deleteContact.pending]: () => null,
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
});

export default combineReducers({
  contacts,
  filter,
  error,
  loading,
});
