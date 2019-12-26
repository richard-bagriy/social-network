import { ADD_POST, SET_PROFILE_DATA, TOGGLE_LOADING_USER } from './types';

const initialState = {
    
    posts: [],
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