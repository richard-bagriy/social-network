import { AppStateType, AppThunk } from '../index'
import { eventAPI } from '../../api/api'
import { Dispatch } from 'redux'

const SET_EVENTS = 'EVENTS/SET_EVENTS'
const TOGGLE_EVENTS_LOADING =  'EVENTS/TOGGLE_EVENTS_LOADING'
const SET_EVENTS_PAGE = 'EVENTS/SET_PAGE'
const SAVE_EVENT = 'EVENTS/SAVE_EVENT'
const DELETE_EVENT = 'EVENTS/DELETE_EVENT'
const TOGGLE_SAVING_IN_PROGRESS = 'EVENTS/TOGGLE_SAVING_IN_PROGRESS'
const SET_SAVED_EVENTS = 'EVENTS/SET_SAVED_EVENTS'

export type EventType = {
    _id: string
    title: string
    location: string
    cover: string
    userId: string
    userName: string
    userImage: string
    saved: boolean
}

type EventsStateProps = {
    events: Array<EventType>
    savedEvents: Array<EventType>
    loading: boolean
    page: number
    limit: number
    savingInProgress: Array<string>
}

const initialState: EventsStateProps = {
    events: [],
    savedEvents: [],
    savingInProgress: [],
    loading: true,
    page: 1,
    limit: 2
}

export default (state = initialState, action: ActionType): EventsStateProps => {

    switch (action.type) {
        case SET_EVENTS: 
        
            const events = state.page > 1
                ? [...state.events, ...action.payload]
                : action.payload 

            return {
                ...state,
                events
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
        case SAVE_EVENT:
            return {
                ...state,
                events: changeEventSaved(state.events, true, action.payload)
            }
        case DELETE_EVENT:
            return {
                ...state,
                events: changeEventSaved(state.events, false, action.payload),
                savedEvents: state.savedEvents.filter(event => event._id !== action.payload)
            }
        case TOGGLE_SAVING_IN_PROGRESS:
            return {
                ...state,
                savingInProgress: changeSavingInProgress(state.savingInProgress, action.payload.blocked, action.payload.id)
            }
        case SET_SAVED_EVENTS: 
            return {
                ...state,
                savedEvents: action.payload
            }
        default: return state
    }
}

const changeEventSaved = (events: Array<EventType>, saved: boolean, id: string): Array<EventType> => {
    return events.map(event => {
        if (event._id === id) {
            return { ...event, saved: saved }
        } else {
            return event
        }
    })
}

const changeSavingInProgress = (savingArray: Array<string>, blocked: boolean, id: string): Array<string> => {
    if (blocked) {
        return [...savingArray, id]
    } else {
        return savingArray.filter(el => el !== id)
    }
}

type ActionType = SetEventsType | ToggleEventsLoadingType | SetEventsPageType | SaveEventType | DeleteEventType | ToggleSavingInProgressType | SetSavedEventsType

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

type SaveEventType = {
    type: typeof SAVE_EVENT
    payload: string
}
export const saveEvent = (eventId: string) : SaveEventType => ({ type: SAVE_EVENT, payload: eventId })

type DeleteEventType = {
    type: typeof DELETE_EVENT
    payload: string
}
export const deleteEvent = (eventId: string) : DeleteEventType => ({ type: DELETE_EVENT, payload: eventId })

type ToggleSavingInProgressType = {
    type: typeof TOGGLE_SAVING_IN_PROGRESS
    payload: { blocked: boolean, id: string }
}
export const toggleSavingInProgress = (blocked: boolean, id: string ): ToggleSavingInProgressType => 
    ({ type: TOGGLE_SAVING_IN_PROGRESS, payload: { blocked, id }  })

type SetSavedEventsType = {
    type: typeof SET_SAVED_EVENTS
    payload: Array<EventType>
}
export const setSavedEvents = (events: Array<EventType>): SetSavedEventsType => ({ type: SET_SAVED_EVENTS, payload: events })
// Selectors
export const getEvents = (state: AppStateType) => state.events.events
export const getEventsLoading = (state: AppStateType) => state.events.loading
export const getEventsPage = (state: AppStateType) => state.events.page
export const getEventsLimit = (state: AppStateType) => state.events.limit
export const getSavingInProgress = (state: AppStateType) => state.events.savingInProgress
export const getSavedEvents = (state: AppStateType) => state.events.savedEvents


export const thunkGetEvents = (
    page: number,
    limit: number
): AppThunk => async (dispatch) => {

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

const toggleSavingEvent = async (
    id: string, 
    dispatch: Dispatch,
    action: any,
    api:any
) => {
    try {

        dispatch(toggleSavingInProgress(true, id))

        await api(id)
        dispatch(action(id))

        dispatch(toggleSavingInProgress(false, id))

    } catch (err) {
        console.log(err)
    }
}

export const thunkToggleSaveEvent = (
    eventId: string,
    saved: boolean
): AppThunk => async (dispatch) => {

    if (saved) {
        toggleSavingEvent(eventId, dispatch, deleteEvent, eventAPI.deleteEvent)
    } else {
        toggleSavingEvent(eventId, dispatch, saveEvent, eventAPI.saveEvent)
    }
}

export const thunkGetSavedEvents = (): AppThunk => async dispatch => {

    dispatch(toggleEventLoading(true))

    const events = await eventAPI.getSavedEvents()
    dispatch(setSavedEvents(events))
    
    dispatch(toggleEventLoading(false))

}