import { 
    ADD_POST, 
    SET_PROFILE_DATA, 
    TOGGLE_LOADING_USER,
    DELETE_POST
} from './types';

const initialState = {
    
    profile: null,
    isLoadingUser: false,
    posts: []
    
};

export default (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.post],
            }
        case SET_PROFILE_DATA:
            return {
                ...state,
                profile: action.data,
                posts: action.data.posts
            }
        case TOGGLE_LOADING_USER:
            return {
                ...state,
                isLoadingUser: action.loading
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p._id !== action.postId)
            }
        default:
            return state;
            
    }
}