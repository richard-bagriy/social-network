import { SET_USER_DATA, REGISTRATION_MESSAGE } from './types';

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