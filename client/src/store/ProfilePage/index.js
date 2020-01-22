import { 
    ADD_POST, 
    SET_PROFILE_DATA, 
    TOGGLE_LOADING_USER, 
    SET_SUBSCRIBERS,
    TOGGLE_LOADING_SUBSCRIBERS
} from './types';

const initialState = {
    
    posts: [],
    profile: null,
    isLoadingUser: false,
    subscribers: [],
    isLoadingSubscribers: false,
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
        case SET_SUBSCRIBERS:
            return {
                ...state,
                subscribers: action.subscribers
            }
        case TOGGLE_LOADING_SUBSCRIBERS: 
            return {
                ...state,
                isLoadingSubscribers: action.loading
            }
        default:
            return state;
            
    }
}