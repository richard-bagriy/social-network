import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

    _state: {

        profile: {
    
            posts: [
                {message: 'Hello i am the first Post', count: 10},
                {message: 'How are you?', count: 22},
                {message: 'Did you see this crazy video about cat?', count: 33},
                {message: 'Yep i know about summer', count: 44}
            ],
    
            newPostMessage: ''
    
        },
    
        dialogs: {
    
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

            newMessageText: ''
            
        },
    
        sidebar: {
            friends: [
                {id: 1, name: "Andrew", img: "https://www.artbutler.com/wp-content/uploads/2019/02/Damia-400x400.jpg"},
                {id: 2, name: "Kostia", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhJ8HaQ88jGA0Ws2WTCnI4DzSgMzvEXk4qdbQVbCAiKyP9yGl"},
                {id: 3, name: "Anatoliy", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAYFEyR7ScsByV8_Hvr6q5ZpkrF3vzTSuE79MmHlkhg8SBgmW"},
                {id: 4, name: "Mark", img: "https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2018/4/11/e2545a210e2c43cea75eefca42643061_18.jpg"}
            ]
        }
        
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {},

    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogReducer(this._state.dialogs, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    } 

}


export default store;