import { profileAPI } from '../../api/api';
import { toggleLoadingUser, setProfileData, addPost as addPostAC } from './actions';

export const getProfile = (id) => (dispatch) => {

    dispatch(toggleLoadingUser(true));

    profileAPI.getProfile(id).then(data => {
        dispatch(setProfileData(data));
        dispatch(toggleLoadingUser(false));
    })

}

export const addPost = (message, id) => async dispatch => {

    const post = await profileAPI.addPost(message, id);
    dispatch(addPostAC(post))

}