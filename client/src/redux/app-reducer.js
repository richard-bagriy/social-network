import {checkAuth} from './auth-reducer';
import { Promise } from 'q';

const SET_INITIAL = "SET_INITIAL"

let initialState = {
    init: true
}


export default (state = initialState, action) => {

    switch(action.type) {
        case SET_INITIAL: 
            return {
                ...state,
                init: true
            }
        default: 
            return state;
    }

}

export const setInit = () => ({type: SET_INITIAL});


export const initializeApp = () => (dispatch) => {
    Promise.all([
        dispatch(checkAuth())
    ]).then(() => {
        dispatch(setInit());
    })
}