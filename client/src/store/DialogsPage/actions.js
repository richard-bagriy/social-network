import { ADD_NEW_MESSAGE, SET_ACTIVE_DIALOG, SET_DIALOGS, TOGGLE_LOADING } from './types';

export const addNewMessage = (message) => ({ type: ADD_NEW_MESSAGE, message });
export const setDialogs = dialogs => ({ type: SET_DIALOGS, payload: dialogs })
export const setActiveDialog = dialog => ({ type: SET_ACTIVE_DIALOG, payload: dialog })
export const setLoading = loading => ({ type: TOGGLE_LOADING, payload: loading })