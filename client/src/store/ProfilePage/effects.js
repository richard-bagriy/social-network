import { reset } from 'redux-form'
import { profileAPI } from '../../api/api';
import { 
    toggleLoadingUser,
    setProfileData,
    addPost as addPostAC,
    deletePost as deletePostAC 
} from './actions';

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
    dispatch(reset('add-post'));
}

export const deletePost = ({ userId, postId }) => async dispatch => {
    
    await profileAPI.deletePost({ userId, postId })
    dispatch(deletePostAC(postId))

}