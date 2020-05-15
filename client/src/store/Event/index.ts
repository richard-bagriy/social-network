import { AppStateType } from '../index'
import { eventAPI } from '../../api/api'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { reset } from 'redux-form'

const ADD_GALLERY_IMG = 'EVENT/ADD_GALLERY_IMG'
const REMOVE_GALLERY_IMG = 'EVENT/REMOVE_GALLERY_IMG'
const EVENT_CREATED = 'EVENT/EVENT_CREATED'
const SET_EVENTS = 'EVENT/SET_EVENTS'

type EventType = {

}

export type EventStateProps = {
    images: Array<File>
    created: boolean
    events: Array<EventType>
}

const initialState: EventStateProps = {
    images: [],
    events: [],
    created: false
}

export default (state = initialState, action: ActionType): EventStateProps => {

    switch (action.type) {

        case SET_EVENTS: {
            return {
                ...state,
                events: action.payload
            }
        }

        case ADD_GALLERY_IMG:
            return {
                ...state,
                images: [...state.images, ...action.payload]
            }
        case REMOVE_GALLERY_IMG:
            return {
                ...state,
                images: state.images.filter((file, i) => i !== action.payload)
            }
        case EVENT_CREATED : {
            return {
                ...state,
                created: action.payload
            }
        }

        default: return state
    }

}

type ActionType = AddGalleryImgType | RemoveGalleryImgType | EventCreatedType | SetEventsType

// actions
type AddGalleryImgType = {
    type: typeof ADD_GALLERY_IMG
    payload: Array<File>
}
export const addGalleryImg = (events: Array<File>) : AddGalleryImgType => ({ type: ADD_GALLERY_IMG, payload: events })

type RemoveGalleryImgType = {
    type: typeof REMOVE_GALLERY_IMG
    payload: number
}
export const removeGalleryImg = (id:number): RemoveGalleryImgType => ({ type: REMOVE_GALLERY_IMG, payload: id })

type EventCreatedType = {
    type: typeof EVENT_CREATED
    payload: boolean
}
export const eventCreated = (created: boolean): EventCreatedType => ({ type: EVENT_CREATED, payload: created })

type SetEventsType = {
    type: typeof SET_EVENTS,
    payload: Array<EventType>
}
export const setEvents = (events: []) : SetEventsType => ({ type: SET_EVENTS, payload:events })

// selector
export const getGalleryImages = (state: AppStateType ) => state.event.images
export const getEventCreated = (state: AppStateType) => state.event.created
export const getEvents = (state: AppStateType) => state.event.events

// thunk
export const thunkAddEvent = (
    data: FormData
): ThunkAction<void, AppStateType, unknown, Action<string>> => async (dispatch) => {

    try {
        await eventAPI.addEvent(data)
        dispatch(eventCreated(true))
        dispatch(reset('event-create'))
    } catch (err) {
        console.log(err)
    }
}

export const thunkGetEvents = (
    events: []
): ThunkAction<void, AppStateType, unknown, Action<string>> => async (dispatch) => {

    try {

    } catch {
        
    }

}