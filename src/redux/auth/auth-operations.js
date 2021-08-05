import axios from 'axios';
import {
  //   loginRequest,
  //   loginSuccess,
  //   loginError,
  registrationRequest,
  registrationSuccess,
  registrationError,
  //   logoutRequest,
  //   logoutSuccess,
  //   logoutError,
} from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = credentials => async dispatch => {
  dispatch(registrationRequest());

  const resp = await axios.post('/user/signup', credentials);

  try {
    dispatch(registrationSuccess(resp.data));
  } catch (error) {
    dispatch(registrationError(error.message));
  }
};
