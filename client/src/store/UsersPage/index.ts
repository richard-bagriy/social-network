import { SUBSCRIBE, UNSUBSCRIBE, SET_USERS, SET_PAGE, TOGGLE_LOADING_USERS, TOGGLE_FOLLOWING_ON_USER, SET_HAVE_USERS, 
    SET_SUBSCRIBERS, SET_SUBSCRIPTIONS } from './types';
import { ToggleSubscribeType, SetUsersType, SetPageType, ToggleLoadingUsersType, ToggleFollowingOnUser, SetHaveUsersType,
    SetSubscribersType, SetSubscriptionsType } from './actions'

type StateType = {
    users: []
    subscribers: [],
    subscriptions: [],
    page: number
    limit: number
    haveUsers: boolean
    isLoadingUsers: boolean
    followingInProgress: []
}

type ActionType = ToggleSubscribeType & SetUsersType & SetPageType & ToggleLoadingUsersType & ToggleFollowingOnUser 
    & SetHaveUsersType & SetSubscribersType & SetSubscriptionsType

const initialState: StateType = {
    users: [],
    subscribers: [],
    subscriptions: [],
    page: 1,
    limit: 8,
    haveUsers: true,
    isLoadingUsers: false,
    followingInProgress: []
};

const toggleSubscribe = (users: Array<object>, userId: number, action: boolean) => {
    const quantity = action ? 1 : -1;

    return users.map(u => {
        // @ts-ignore
        if (u._id === userId) {

            return {
                ...u, 
                subscribed: action,
                //@ts-ignore
                subscribers: u.subscribers + quantity
            }

        } else {
            return u;
        }
    })
}

const toggleFollowingOnProgerss = (array: [], following: boolean, id: number) => {
    if (following) {
        return [...array, id]
    } else {
        return array.filter((id:number) => id !== id)
    }
}

export default (state = initialState, action: ActionType) => {

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
                // @ts-ignore
                subscriptions: state.subscriptions.filter( user => user._id !== action.userId)
            }
        case SET_USERS:
            const users = (state.users.length <= 8) ? action.users : [...state.users, ...action.users];

            return {
                ...state,
                users
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
                followingInProgress: toggleFollowingOnProgerss(state.followingInProgress, action.inProgress, action.id)
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