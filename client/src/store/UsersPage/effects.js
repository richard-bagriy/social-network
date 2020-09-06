import { usersAPI, profileAPI } from '../../api/api';
import { 
    toggleLoadingUsers, 
    setPage, 
    setUsers,
    toggleFollowingOnUser,
    subscribeAC,
    unsubscribeAC,
    setHaveUsers,
    setSubscribers,
    setSubscriptions
} from './actions';

export const getUsers = (limit, page) => async dispatch =>{

    dispatch(toggleLoadingUsers(true));
    
    const users =  await usersAPI.getUsers(limit, page);

    if (users.length) {

        if (users.length <= 8) {
            dispatch(setPage(page));
            
        } else {
            dispatch(setPage(page + 1));
        }
        
        dispatch(setUsers(users));

    } else {
        dispatch(setHaveUsers(false))
        dispatch(setPage(page));
    }

    dispatch(toggleLoadingUsers(false));

}

const toggleSubscribe = async (userId, subscribe, dispatch) => {
    
    try {
        dispatch(toggleFollowingOnUser(true, userId));

        if (subscribe) {
            await usersAPI.subscribe(userId);
            dispatch(subscribeAC(userId));
        } else {
            await usersAPI.unsubscribe(userId);
            dispatch(unsubscribeAC(userId));
        }
        
        dispatch(toggleFollowingOnUser(false, userId));
    } catch (err) {
        console.log(err);
    }
    
}

export const subscribe = (userId) => (dispatch) => {
    toggleSubscribe(userId, true, dispatch)
}

export const unsubscribe = (userId) => (dispatch) => {
    toggleSubscribe(userId, false, dispatch)
}

const getUserSubscribersOrSubscriptions = async (userId, subscribers, dispatch) => {

    try {
        dispatch(toggleLoadingUsers(true));

        if (subscribers) {
            const subscribers = await profileAPI.getSubscribers(userId);
            dispatch(setSubscribers(subscribers));
        } else {
            const subscriptions = await profileAPI.getSubscriptions(userId);
            dispatch(setSubscriptions(subscriptions))
        }

        dispatch(toggleLoadingUsers(false));

    } catch (err) {
        console.log(err);
    }
}

export const getSubscribers = id => dispatch => {
    getUserSubscribersOrSubscriptions(id, true, dispatch);
    
}

export const getSubscriptions = id => dispatch => {
    getUserSubscribersOrSubscriptions(id, false, dispatch);
}
