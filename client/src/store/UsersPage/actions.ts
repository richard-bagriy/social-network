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

export type ToggleSubscribeType = {
    type: typeof SUBSCRIBE | typeof UNSUBSCRIBE
    userId: number
}
export const subscribeAC = (userId: number): ToggleSubscribeType => ({ type: SUBSCRIBE, userId });
export const unsubscribeAC = (userId: number): ToggleSubscribeType => ({ type: UNSUBSCRIBE, userId });

export type SetUsersType = {
    type: typeof SET_USERS
    users: []
}
export const setUsers = (users: []): SetUsersType => ({ type: SET_USERS, users });

export type SetPageType = {
    type: typeof SET_PAGE,
    page: number
}
export const setPage = (page: number): SetPageType => ({ type: SET_PAGE, page })

export type  ToggleLoadingUsersType = {
    type: typeof TOGGLE_LOADING_USERS
    loading: boolean
}
export const toggleLoadingUsers = (loading: boolean): ToggleLoadingUsersType => ({ type: TOGGLE_LOADING_USERS, loading });

export type ToggleFollowingOnUser = {
    type: typeof TOGGLE_FOLLOWING_ON_USER
    inProgress: boolean
    id: number
}
export const toggleFollowingOnUser = (inProgress:boolean, id: number): ToggleFollowingOnUser => ({ type: TOGGLE_FOLLOWING_ON_USER, inProgress, id });

export type SetHaveUsersType = {
    type: typeof SET_HAVE_USERS
    haveUsers: boolean
}
export const setHaveUsers = (haveUsers: boolean): SetHaveUsersType => ({ type: SET_HAVE_USERS, haveUsers })

export type SetSubscribersType = {
    type: typeof SET_SUBSCRIBERS
    subscribers: []
}
export const setSubscribers = (subscribers: []): SetSubscribersType => ({ type: SET_SUBSCRIBERS, subscribers })

export type SetSubscriptionsType = {
    type: typeof SET_SUBSCRIPTIONS
    subscriptions: []
}

export const setSubscriptions = (subscriptions: []) : SetSubscriptionsType => ({ type: SET_SUBSCRIPTIONS, subscriptions })