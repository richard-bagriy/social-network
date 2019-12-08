import { SET_USER_DATA, REGISTRATION_MESSAGE } from './types';

export const setAuth = (data) => ({ type: SET_USER_DATA, data });
export const setRegMessage = (message) => ({ type: REGISTRATION_MESSAGE, message })