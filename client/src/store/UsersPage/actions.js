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

export const subscribeAC = (userId) => ({ type: SUBSCRIBE, userId });
export const unsubscribeAC = (userId) => ({ type: UNSUBSCRIBE, userId });
export const setUsers = (users) => ({ type: SET_USERS, users: users });
export const setPage = (page) => ({ type: SET_PAGE, page })
export const toggleLoadingUsers = (loading) => ({ type: TOGGLE_LOADING_USERS, loading });
export const toggleFollowingOnUser = (inProgress, id) => ({ type: TOGGLE_FOLLOWING_ON_USER, inProgress, id });
export const setHaveUsers = (haveUsers) => ({ type: SET_HAVE_USERS, haveUsers })
export const setSubscribers = subscribers => ({ type: SET_SUBSCRIBERS, subscribers })
export const setSubscriptions = subscriptions => ({ type: SET_SUBSCRIPTIONS, subscriptions })