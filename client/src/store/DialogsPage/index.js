import { ADD_NEW_MESSAGE, SET_ACTIVE_DIALOG, SET_DIALOGS, TOGGLE_LOADING } from './types';

const initialState = {
    
    dialogs: [],

    activeDialog: null,

    loading: false
    
};


export default (state = initialState, action) => {

    switch(action.type) {

        case ADD_NEW_MESSAGE:
            return {
                ...state,
                activeDialog: {
                    ...state.activeDialog,
                    messages: [...state.activeDialog.messages, action.message]
                }
            }
        case SET_DIALOGS: 
            return {
                ...state,
                dialogs: action.payload   
            }
        case SET_ACTIVE_DIALOG: 
            return {
                ...state,
                activeDialog: action.payload   
            }
        case TOGGLE_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default: 
            return state;
            
    }
}