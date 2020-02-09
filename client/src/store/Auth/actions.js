import { 
    SET_USER_DATA,
    REGISTRATION_MESSAGE,
    UPDATE_USER_DATA
} from './types';

export const setAuth = data => ({ type: SET_USER_DATA, data });
export const setRegMessage = (message) => ({ type: REGISTRATION_MESSAGE, message })
export const updateUserData = data => ({ type: UPDATE_USER_DATA, data })