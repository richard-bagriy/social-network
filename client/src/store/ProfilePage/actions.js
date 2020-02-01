import { 
    ADD_POST, SET_PROFILE_DATA, 
    TOGGLE_LOADING_USER,
    DELETE_POST
} from './types';

export const addPost = post => ({ type: ADD_POST, post });
export const setProfileData = (data) => ({ type: SET_PROFILE_DATA, data });
export const toggleLoadingUser = (loading) => ({ type: TOGGLE_LOADING_USER, loading })
export const deletePost = postId => ({ type: DELETE_POST, postId })