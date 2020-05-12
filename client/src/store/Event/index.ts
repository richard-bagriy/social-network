import { AppStateType } from '../index'
import { EventFormValuesType } from '../../components/Event/Form'
import { eventAPI } from '../../api/api'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { reset } from 'redux-form'

const ADD_EVENT = 'EVENT/ADD_EVENT'
const REMOVE_EVENT = 'EVENT/REMOVE_EVENT'
const EVENT_CREATED = 'EVENT/EVENT_CREATED'

export type EventStateProps = {
    images: Array<File>
    created: boolean
}

const initialState: EventStateProps = {
    images: [],
    created: false
}

export default (state = initialState, action: ActionType): EventStateProps => {

    switch (action.type) {

        case ADD_EVENT: 
            return {
                ...state,
                images: [...state.images, ...action.payload]
            }
        case REMOVE_EVENT: 
            return {
                ...state,
                images: state.images.filter((file, i) => {
                    if (i !== action.payload) {
                        return file
                    }
                    
                    return file
                })
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

type ActionType = AddEventType | RemoveEventType | EventCreatedType

// actions
type AddEventType = {
    type: typeof ADD_EVENT
    payload: Array<File>
}
export const addEvent = (events: Array<File>) : AddEventType => ({ type: ADD_EVENT, payload: events })

type RemoveEventType = {
    type: typeof REMOVE_EVENT
    payload: number
}
export const removeEvent = (id:number): RemoveEventType => ({ type: REMOVE_EVENT, payload: id })

type EventCreatedType = {
    type: typeof EVENT_CREATED
    payload: boolean
}
export const eventCreated = (created: boolean): EventCreatedType => ({ type: EVENT_CREATED, payload: created })

// selector
export const getEvents = (state: AppStateType ) => state.event.images
export const getEventCreated = (state: AppStateType) => state.event.created

// thunk
export const thunkAddEvent = (
    data:EventFormValuesType
): ThunkAction<void, AppStateType, unknown, Action<string>> => async (dispatch) => {

    // const { created } = await eventAPI.addEvent(data)

    dispatch(eventCreated(true))
    dispatch(reset('event-create'))

}