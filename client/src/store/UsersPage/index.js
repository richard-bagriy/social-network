import { 
    SUBSCRIBE, 
    UNSUBSCRIBE, 
    SET_USERS, 
    SET_PAGE, 
    TOGGLE_LOADING_USERS, 
    TOGGLE_FOLLOWING_ON_USER,
    SET_HAVE_USERS,
    SET_SUBSCRIBERS,
    SET_SUBSCRIPTIONS
} from './types';

const initialState = {
    users: [],
    subscribers: [],
    subscriptions: [],
    page: 1,
    limit: 8,
    haveUsers: true,
    isLoadingUsers: false,
    followingInProgress: []
};

const toggleSubscribe = (users, userId, action) => {
    const quantity = action ? 1 : -1;

    return users.map(u => {
        if (u._id === userId) {

            return {
                ...u, 
                subscribed: action, 
                subscribers: u.subscribers + quantity
            }

        } else {
            return u;
        }
    })
}

export default (state = initialState, action) => {

    switch(action.type) {
        case SUBSCRIBE:
            return {
                ...state,
                users: toggleSubscribe(state.users, action.userId, true),
                subscribers: toggleSubscribe(state.subscribers, action.userId, true)
            }
        case UNSUBSCRIBE:
            return {
                ...state,
                users: toggleSubscribe(state.users, action.userId, false),
                subscribers: toggleSubscribe(state.subscribers, action.userId, false),
                subscriptions: state.subscriptions.filter( user => user._id !== action.userId)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.page
            }
        case TOGGLE_LOADING_USERS:
            return {
                ...state,
                isLoadingUsers: action.loading
            }
        case TOGGLE_FOLLOWING_ON_USER:
            return {
                ...state,
                followingInProgress: action.inProgress 
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        case SET_HAVE_USERS: {
            return {
                ...state,
                haveUsers: action.haveUsers
            }
        }
        case SET_SUBSCRIBERS: {
            return {
                ...state,
                subscribers: action.subscribers
            }
        }
        case SET_SUBSCRIPTIONS: {
            return {
                ...state,
                subscriptions: action.subscriptions
            }
        }
        default: return state;
    }

}