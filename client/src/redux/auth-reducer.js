import {authAPI} from '../api/api';
import { SubmissionError, reset } from 'redux-form';


const SET_USER_DATA = 'SET_AUTH';
const REGISTRATION_MESSAGE = "REGISTRATION_MESSAGE";

const initalState = {
    userId: null,
    userName: null,
    userImage: null,
    gender: null,
    isAuth: false,
    regMessage: null
}

export default (state = initalState, action) => {
    
    switch (action.type) {
        
        case SET_USER_DATA:
            return {
                userId:    action.data.id,
                userName:  action.data.name,
                gender:    action.data.gender,
                userImage: action.data.image,
                isAuth:    action.data.auth
            }
        case REGISTRATION_MESSAGE: {
            return {
                ...state,
                regMessage: action.message
            }
        }
        default:
            return state;
    }
}


export const setAuth = (data) => ({type: SET_USER_DATA, data});
export const setRegMessage = (message) => ({type: REGISTRATION_MESSAGE, message })

export const authLogin = (data) =>  async (dispatch) => {

    try {
        const { error, token } = await authAPI.login(data);
        
        if (error) throw new SubmissionError({ _error : error });
        
        await localStorage.setItem('token', token);

        dispatch(checkAuth());

    } catch (err) {
        console.log(err);
    }
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