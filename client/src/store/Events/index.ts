import { AppStateType } from '../index'
import { eventAPI } from '../../api/api'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
const SET_EVENTS = 'EVENTS/SET_EVENTS'
const TOGGLE_EVENTS_LOADING =  'EVENTS/TOGGLE_EVENTS_LOADING'
const SET_EVENTS_PAGE = 'EVENTS/SET_PAGE'

export type EventType = {
    _id: string
    title: string
    location: string
    cover: string
    userId: string
    userName: string
    userImage: string
}

type EventsStateProps = {
    events: Array<EventType>
    loading: boolean
    page: number
    limit: number
}


const initialState: EventsStateProps = {
    events: [],
    loading: true,
    page: 1,
    limit: 1
}

export default (state = initialState, action: ActionType): EventsStateProps => {

    switch (action.type) {
        case SET_EVENTS: {
            return {
                ...state,
                events: action.payload
            }
        }
        case TOGGLE_EVENTS_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SET_EVENTS_PAGE: 
            return {
                ...state,
                page: action.payload
            }
        default: return state
    }
}

type ActionType = SetEventsType | ToggleEventsLoadingType | SetEventsPageType

type SetEventsType = {
    type: typeof SET_EVENTS,
    payload: Array<EventType>
}
export const setEvents = (events: Array<EventType>) : SetEventsType => ({ type: SET_EVENTS, payload: events })

type ToggleEventsLoadingType = {
    type: typeof TOGGLE_EVENTS_LOADING
    payload: boolean
}
export const toggleEventLoading = (loading: boolean) : ToggleEventsLoadingType => ({ type: TOGGLE_EVENTS_LOADING, payload: loading })

type SetEventsPageType = {
    type: typeof SET_EVENTS_PAGE
    payload: number
}
export const setEventsPage = (page: number) : SetEventsPageType => ({ type: SET_EVENTS_PAGE, payload: page })

export const getEvents = (state: AppStateType) => state.events.events
export const getEventsLoading = (state: AppStateType) => state.events.loading
export const getEventsPage = (state: AppStateType) => state.events.page
export const getEventsLimit = (state: AppStateType) => state.events.limit

export const thunkGetEvents = (
    page: number,
    limit: number
): ThunkAction<void, AppStateType, unknown, Action<string>> => async (dispatch) => {

    try {
        dispatch(toggleEventLoading(true))

        const events: Array<EventType> = await eventAPI.getEvents(limit, page)
        dispatch(setEvents(events))
        dispatch(setEventsPage(page + 1))

        dispatch(toggleEventLoading(false))
    } catch (err) {
        console.log(err)
    }

}