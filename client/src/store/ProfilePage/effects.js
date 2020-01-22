import { profileAPI } from '../../api/api';
import { toggleLoadingUser, setProfileData, setSubscribers, toggleLoadingSubscribers } from './actions';

export const getProfile = (id) => (dispatch) => {

    dispatch(toggleLoadingUser(true));

    profileAPI.getProfile(id).then(data => {
        dispatch(setProfileData(data));
        dispatch(toggleLoadingUser(false));
    })

}

export const getSubscribers = (id) => async (dispatch) => {

    try {
        dispatch(toggleLoadingSubscribers(true));
        
        const subscribers = await profileAPI.getSubscribers(id);
        dispatch(setSubscribers(subscribers));

        dispatch(toggleLoadingSubscribers(false));
    } catch (err) {
        console.log(err)
    }
    
}