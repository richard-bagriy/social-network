import { 
    FOLLOW, 
    UNFOLLOW, 
    SET_USERS, 
    SET_PAGE, 
    TOGGLE_LOADING_USERS, 
    TOGGLE_FOLLOWING_ON_USER,
    SET_HAVE_USERS
} from './types';

export const followAC = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsers = (users) => ({ type: SET_USERS, users: users });
export const setPage = (page) => ({ type: SET_PAGE, page })
export const toggleLoadingUsers = (loading) => ({ type: TOGGLE_LOADING_USERS, loading });
export const toggleFollowingOnUser = (inProgress, id) => ({ type: TOGGLE_FOLLOWING_ON_USER, inProgress, id });
export const setHaveUsers = (haveUsers) => ({ type: SET_HAVE_USERS, haveUsers })