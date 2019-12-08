import { profileAPI } from '../../api/api';
import { toggleLoadingUser, setProfileData } from './actions';

export const getProfile = (id) => (dispatch) => {

    dispatch(toggleLoadingUser(true));

    profileAPI.getProfile(id).then(data => {
        dispatch(setProfileData(data));
        dispatch(toggleLoadingUser(false));
    })

}