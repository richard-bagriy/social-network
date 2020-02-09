import { 
    SET_USER_DATA,
    REGISTRATION_MESSAGE,
    UPDATE_USER_DATA
} from './types';

const initalState = {
    authId:     null,
    userName:   null,
    userImage:  null,
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
                userImage: action.data.image,
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
        default:
            return state;
    }
}