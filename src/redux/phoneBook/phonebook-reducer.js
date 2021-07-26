import { createReducer, combineReducers } from '@reduxjs/toolkit';
import contactDB from '../../db.json';
import {
  addContactError,
  addContactSuccess,
  addContactRequest,
  deleteContactError,
  deleteContactSuccess,
  deleteContactRequest,
  getContactSuccess,
  getContactRequest,
  getContactError,
  filterContact,
} from './phonebook-actions';

const phonebookContacts = createReducer(contactDB, {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [getContactSuccess]: (_, { payload }) => payload,
});

const phonebookFilter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactError]: () => false,
  [addContactSuccess]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactError]: () => false,
  [deleteContactSuccess]: () => false,
  [getContactRequest]: () => true,
  [getContactError]: () => false,
  [getContactSuccess]: () => false,
});

export const rootReducer = combineReducers({
  phonebookContacts,
  phonebookFilter,
  loading,
});
