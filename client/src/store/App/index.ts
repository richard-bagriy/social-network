import { checkAuth } from '../Auth/effects'
import { Dispatch } from 'redux'
import { AppStateType } from '../'
export const SET_INITIAL = "APP/SET_INITIAL";

type InitialState = {
    init: boolean
}

const initialState:InitialState = {
    init: false
}

export default (state = initialState, action: SetInitType) => {

    switch(action.type) {
        case SET_INITIAL: 
            return {
                ...state,
                init: true
            }
        default: return state;
    }

}

type SetInitType = {
    type: typeof SET_INITIAL
}
export const setInit = (): SetInitType => ({ type: SET_INITIAL });

export const initializeApp = () => (dispatch: Dispatch) => {

    Promise.all([
        // @ts-ignore
        dispatch(checkAuth())
    ]).then(() => {
        dispatch(setInit());
    })

}

export const getInitApp = (state: AppStateType) => state.app.init