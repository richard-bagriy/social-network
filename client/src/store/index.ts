import { createStore, combineReducers, applyMiddleware, compose, Action } from "redux";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import appReducer from './App';
import authReducer from './Auth';
import profileReducer from './ProfilePage';
import dialogReducer from './DialogsPage';
import usersReducer from './UsersPage';
import settingReducer from './Setting'
import eventReducer from './Event'
import eventsReducer from './Events'

const reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    //@ts-ignore
    usersPage: usersReducer,
    auth: authReducer,
    setting: settingReducer,
    event: eventReducer,
    form: formReducer,
    events: eventsReducer
});

export type AppStateType = ReturnType<typeof reducers>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  Action<string>
>

// @ts-ignore
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware),
);

const store = createStore(
    reducers,
    enhancer
);

export default store;