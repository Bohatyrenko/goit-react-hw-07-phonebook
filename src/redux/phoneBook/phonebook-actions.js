import { createAction } from '@reduxjs/toolkit';
// import shortid from 'shortid';

//ADD
// export const addContact = createAction('phonebook/addContact', contact => ({
//   payload: { ...contact, id: shortid.generate() },
// }));
export const addContactRequest = createAction('phonebook/addContactRequest');
export const addContactSuccess = createAction('phonebook/addContactSuccess');
export const addContactError = createAction('phonebook/addContactError');

//DELETE
// export const deleteContact = createAction('phonebook/deleteContact');
export const deleteContactRequest = createAction(
  'phonebook/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'phonebook/deleteContactSuccess',
);
export const deleteContactError = createAction('phonebook/deleteContactError');

//GET
export const getContactRequest = createAction('phonebook/getContactRequest');
export const getContactSuccess = createAction('phonebook/getContactSuccess');
export const getContactError = createAction('phonebook/getContactError');

//FILTER
export const filterContact = createAction('phonebook/filterContact');
