import { 
    SET_USER_DATA,
    REGISTRATION_MESSAGE,
    UPDATE_USER_DATA,
    UPDATE_AUTH_IMAGES
} from './types';

export const setAuth = data => ({ type: SET_USER_DATA, data });
export const setRegMessage = (message) => ({ type: REGISTRATION_MESSAGE, message })
export const updateUserData = data => ({ type: UPDATE_USER_DATA, data })
export const updateAuthImages = images => ({ type: UPDATE_AUTH_IMAGES, images })