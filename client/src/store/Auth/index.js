import { 
    SET_USER_DATA,
    REGISTRATION_MESSAGE,
    UPDATE_USER_DATA,
    UPDATE_AUTH_IMAGES
} from './types';

const initalState = {
    authId:     null,
    userName:   null,
    userImages:  null,
    gender:     null,
    about:      null,
    phone:      null,
    address:    null,
    email:      null,
    isAuth:     false,
    country:    null,
    regMessage: null,
}
   
export default (state = initalState, action) => {

    switch (action.type) {
        
        case SET_USER_DATA:
            return {
                ...state,
                authId:    action.data._id,
                userName:  action.data.name,
                userImages: action.data.images,
                gender:    action.data.gender,
                isAuth:    action.data.auth,
                about:     action.data.about,
                phone:     action.data.phone,
                address:   action.data.address,
                email:     action.data.email
            }
        case REGISTRATION_MESSAGE: {
            return {
                ...state,
                regMessage: action.message
            }
        }
        case UPDATE_USER_DATA: 
            return {
                ...state,
                about:   action.data.about,
                phone:   action.data.phone,
                address: action.data.address,
                email:   action.data.email,
                country: action.data.country
            }
        case UPDATE_AUTH_IMAGES:
            return {
                ...state,
                userImages: action.images
            }
        default:
            return state;
    }
}