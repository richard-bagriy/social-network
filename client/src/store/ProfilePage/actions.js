import { 
    ADD_POST, SET_PROFILE_DATA, 
    TOGGLE_LOADING_USER, 
    SET_SUBSCRIBERS,
    TOGGLE_LOADING_SUBSCRIBERS
} from './types';

export const addPost = (message) => ({ type: ADD_POST, message });
export const setProfileData = (data) => ({ type: SET_PROFILE_DATA, data });
export const toggleLoadingUser = (loading) => ({ type: TOGGLE_LOADING_USER, loading })
export const setSubscribers = (subscribers) => ({ type: SET_SUBSCRIBERS, subscribers })
export const toggleLoadingSubscribers = loading => ({ type: TOGGLE_LOADING_SUBSCRIBERS, loading })