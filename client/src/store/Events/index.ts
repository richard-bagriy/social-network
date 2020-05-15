import { AppStateType } from '../index'
import { eventAPI } from '../../api/api'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'

const SET_EVENTS = 'EVENT/SET_EVENTS'
const TOGGLE_EVENTS_LOADING =  'EVENT/TOGGLE_EVENTS_LOADING'

export type EventType = {
    _id: string
    title: string
    location: string
    cover: string
    userId: {
        _id: string
        images: { photo: string }
        name: string
    }
}

type EventsStateProps = {
    events: Array<EventType>
    loading: boolean
}


const initialState: EventsStateProps = {
    events: [],
    loading: true
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
        default: return state
    }
}

type ActionType = SetEventsType | ToggleEventsLoadingType

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

export const getEvents = (state: AppStateType) => state.events.events
export const getEventsLoading = (state: AppStateType) => state.events.loading

export const thunkGetEvents = (): ThunkAction<void, AppStateType, unknown, Action<string>> => async (dispatch) => {

    try {
        dispatch(toggleEventLoading(true))

        const events: Array<EventType> = await eventAPI.getEvents()
        dispatch(setEvents(events))

        dispatch(toggleEventLoading(false))
    } catch (err) {
        console.log(err)
    }

}