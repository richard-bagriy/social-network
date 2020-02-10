import { profileAPI } from '../../api/api'
import { reset } from 'redux-form'

let initialState = {
    passwordChangedMessage: null
}

export default (state = initialState, action) => {

    switch(action.type) {
        
        case SET_PASSWORD_CHANGED:
            return {
                ...state,
                passwordChangedMessage: action.message
            }

        default: 
            return state
    }

}

const SET_PASSWORD_CHANGED = 'SETTING/SET_PASSWORD_CHANGED';

export const setPasswordChangedAC = message => ({ type: SET_PASSWORD_CHANGED, message })

export const setPasswordChanged = password => async dispatch => {
    const { message } = await profileAPI.changePassword(password);
    dispatch(setPasswordChangedAC(message))
    dispatch(reset('change-password'))
    setTimeout(() => dispatch(setPasswordChangedAC(null)), 1500)
}

export const getMessagePasswordChanged = state => state.setting.passwordChangedMessage