import { SET_INITIAL } from './types';

const initialState = {
    init: false
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