import { createAction } from '@reduxjs/toolkit';

export const loginRequest = createAction('ayth/loginRequest');
export const loginSuccess = createAction('ayth/loginSuccess');
export const loginError = createAction('ayth/loginError');

export const registrationRequest = createAction('ayth/registrationRequest');
export const registrationSuccess = createAction('ayth/registrationSuccess');
export const registrationError = createAction('ayth/registrationError');

export const logoutRequest = createAction('ayth/logoutRequest');
export const logoutSuccess = createAction('ayth/logoutSuccess');
export const logoutError = createAction('ayth/logoutError');

