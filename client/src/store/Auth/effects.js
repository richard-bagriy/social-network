import { authAPI } from '../../api/api';
import { SubmissionError, reset } from 'redux-form';
import { setAuth, setRegMessage } from './actions';

export const authLogin = (data) =>  async (dispatch) => {
    
    const { error, token } = await authAPI.login(data);
        
    if (error) throw new SubmissionError({ _error : error });
        
    await localStorage.setItem('token', token);

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

export const checkAuth = () => (dispatch) => {
    return authAPI.check().then(data => {
        dispatch(setAuth(data.data))
    })
}

export const logout = () => (dispatch) => {

    localStorage.removeItem('token');

    dispatch(setAuth({
        userId: null,
        userName: null,
        userImage: null,
        gender: null,
        auth: false
    }));
}