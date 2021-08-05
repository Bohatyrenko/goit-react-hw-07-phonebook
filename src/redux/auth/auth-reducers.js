import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  loginRequest,
  loginSuccess,
  loginError,
  registrationRequest,
  registrationSuccess,
  registrationError,
  logoutRequest,
  logoutSuccess,
  logoutError,
} from './auth-actions';

const user = createReducer(
  { name: null, email: null },
  {
    [registrationSuccess]: (state, { payload }) => payload.user,
  },
);

const token = createReducer(null, {
  [registrationSuccess]: (_, { payload }) => payload.token,
});

const error = createReducer(null, {
  [registrationError]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  error,
});
