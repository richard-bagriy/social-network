import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const TOGGLE_LOADING_USER = 'TOGGLE_LOADING_USER';

let initialState = {
    
    posts: [
        {message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat placerat dignissim. Cras sit amet posuere metus, eu pharetra urna. Praesent tortor purus, gravida id massa non, hendrerit accumsan metus. ', count: 10, id: 1},
        {message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat placerat dignissim. Cras sit amet posuere metus, eu pharetra urna. Praesent tortor purus, gravida id massa non, hendrerit accumsan metus. ?', count: 22, id: 2},
        {message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat placerat dignissim. Cras sit amet posuere metus, eu pharetra urna. Praesent tortor purus, gravida id massa non, hendrerit accumsan metus. ', count: 33, id: 3},
        {message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat placerat dignissim. Cras sit amet posuere metus, eu pharetra urna. Praesent tortor purus, gravida id massa non, hendrerit accumsan metus. ', count: 44, id: 4}
    ],
    profile: null,
    isLoadingUser: false
};

export default (state = initialState, action) => {

    switch(action.type) {
        
        case ADD_POST:
            const post = {id: 5, message: action.message, count: 0};

            return {
                ...state,
                posts: [...state.posts, post],
            }
        case SET_PROFILE_DATA:
            return {
                ...state,
                profile: action.data
            }
        case TOGGLE_LOADING_USER:
            return {
                ...state,
                isLoadingUser: action.loading
            }
        default:
            return state;
            
    }
}

export const addPost = (message) => ({type: ADD_POST, message});
export const setProfileData = (data) => ({type: SET_PROFILE_DATA, data});
export const toggleLoadingUser = (loading) => ({type: TOGGLE_LOADING_USER, loading})

export const getProfile = (id) => (dispatch) => {

    dispatch(toggleLoadingUser(true));

    profileAPI.getProfile(id).then(data => {
        dispatch(setProfileData(data));
        dispatch(toggleLoadingUser(false));
    })
}