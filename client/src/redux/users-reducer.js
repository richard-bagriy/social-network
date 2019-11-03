import {usersAPI} from '../api/api';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const TOGGLE_LOADING_USERS = "TOGGLE_LOADING_USERS";
const TOGGLE_FOLLOWING_ON_USER = "TOGGLE_FOLLOWING_ON_USER";

let initialState = {
    users: [],
    page: 1,
    limit: 12,
    isLoadingUsers: false,
    followingInProgress: []
};

export default (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    } else {
                        return u;
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    } else {
                        return u;
                    }
                })
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
        default: return state;
    }

}

export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setPage = (page) => ({type: SET_PAGE, page})
export const toggleLoadingUsers = (loading) => ({type: TOGGLE_LOADING_USERS, loading });
export const toggleFollowingOnUser = (inProgress, id) => ({type: TOGGLE_FOLLOWING_ON_USER, inProgress, id });


export const getUsers = (limit, page) => (dispatch) =>{
    
    dispatch(toggleLoadingUsers(true));
    dispatch(setPage(page + 1));

    usersAPI.getUsers(limit, page).then(data => {
        dispatch(setUsers(data.items));
        dispatch(toggleLoadingUsers(false));
    });
}

export const follow = (id) => (dispatch) => {

    dispatch(toggleFollowingOnUser(true, id));

    usersAPI.follow(id).then(code => {
        if (code === 0) {
            dispatch(followAC(id));
            dispatch(toggleFollowingOnUser(false, id));
        }
    })
}

export const unfollow = (id) => (dispatch) => {
    dispatch(toggleFollowingOnUser(true, id));

    usersAPI.unfollow(id).then(code => {
        if (code === 0) {
            dispatch(unfollowAC(id));
            dispatch(toggleFollowingOnUser(false, id));
        }
    })
}