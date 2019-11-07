import {authAPI} from '../api/api';

const SET_USER_DATA = 'SET_AUTH';

const initalState = {
    userId: null,
    userName: null,
    isAuth: false
}

export default (state = initalState, action) => {
    
    switch (action.type) {
        case SET_USER_DATA:
            return {
                userId: action.data.id,
                userName: action.data.login,
                isAuth: action.auth
            }
        default:
            return state;
    }
}


export const setAuth = (data, auth) => ({type: SET_USER_DATA, data, auth});

export const authLogin = (data) => (dispatch) => {
    authAPI.login(data).then(data => {
        if (data.resultCode === 0) {
            dispatch(checkAuth());
        }
    })
}

export const checkAuth = () => (dispatch) => {
    return authAPI.check().then(data => {
        // console.log(data);
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(code => {
        if (code === 0) {
            dispatch(setAuth({data: {id :null, userName: null}}, false));
        }
    })
}