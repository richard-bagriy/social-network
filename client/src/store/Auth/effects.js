import { authAPI } from '../../api/api';
import { SubmissionError, reset } from 'redux-form';
import { setAuth, setRegMessage } from './actions';

export const authLogin = (data) =>  async (dispatch) => {
    
    const { error, token } = await authAPI.login(data);
        
    if (error) throw new SubmissionError({ _error : error });
        
    localStorage.setItem('token', token);

    dispatch(checkAuth());
}

export const authRegistration = (data) => async (dispatch) => {

    const {error, message} = await authAPI.registration(data);

    if (error) throw new SubmissionError({ _error : error });

    dispatch(setRegMessage(message));
    dispatch(reset('registration'));

    setTimeout(() => {
        dispatch(setRegMessage(null));
    },2000)
}

export const checkAuth = () => async dispatch => {
    
    const data = await authAPI.check();
    dispatch(setAuth(data))
}

export const logout = () => (dispatch) => {

    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';

    dispatch(setAuth({
        userId: null,
        userName: null,
        userImage: null,
        gender: null,
        auth: false
    }));
}