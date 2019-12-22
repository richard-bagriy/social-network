import { usersAPI } from '../../api/api';
import { 
    toggleLoadingUsers, 
    setPage, 
    setUsers,
    toggleFollowingOnUser,
    subscribeAC,
    unsubscribeAC,
    setHaveUsers
} from './actions';

export const getUsers = (limit, page) => (dispatch) =>{

    dispatch(toggleLoadingUsers(true));
    dispatch(setPage(page + 1));

    usersAPI.getUsers(limit, page).then(users => {

        if (users.length) {
            dispatch(setUsers(users));
            dispatch(toggleLoadingUsers(false));
        } else {
            dispatch(setHaveUsers(false))
            dispatch(toggleLoadingUsers(false));
        }

    });

}

export const subscribe = (userId) => (dispatch) => {
    toggleSubscribe(userId, true, dispatch)
}

export const unsubscribe = (userId) => (dispatch) => {
    toggleSubscribe(userId, false, dispatch)
}

const toggleSubscribe = async (userId, subscribe, dispatch) => {
    
    try {
        dispatch(toggleFollowingOnUser(true, userId));

        if (subscribe) {
            await usersAPI.subsribe(userId);
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