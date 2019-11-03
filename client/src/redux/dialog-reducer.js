const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE' ;

let initialState = {
    
    dialogs: [
        {name: 'Artem', id: 1},
        {name: 'Viktor', id: 2},
        {name: 'Andrey', id: 3},
        {name: 'Sasha', id: 4},
        {name: 'Valera', id: 5},
    ],

    messages: [
        {id: 1, message: "Hello", friend: 1},
        {id: 2, message: "Hello", friend: 0},
        {id: 3, message: "How are you?", friend: 1},
        {id: 4, message: "I am very good & u ?", friend: 0}
    ],
    
};

export default (state = initialState, action) => {

    switch(action.type) {

        case ADD_NEW_MESSAGE:
            const message = {id: 4, message: action.message, friend: 0};

            return {
                ...state,
                messages: [...state.messages, message],
            }
        default: 
            return state;
            
    }
}


export const addNewMessage = (message) => ({type:ADD_NEW_MESSAGE, message});