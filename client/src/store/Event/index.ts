import { AppStateType } from '../index'
import { eventAPI } from '../../api/api'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { reset } from 'redux-form'

const ADD_GALLERY_IMG = 'EVENT/ADD_GALLERY_IMG'
const REMOVE_GALLERY_IMG = 'EVENT/REMOVE_GALLERY_IMG'
const EVENT_CREATED = 'EVENT/EVENT_CREATED'

export type EventStateProps = {
    images: Array<File>
    created: boolean
}

const initialState: EventStateProps = {
    images: [],
    created: false,
}

export default (state = initialState, action: ActionType): EventStateProps => {

    switch (action.type) {
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

type ActionType = AddGalleryImgType | RemoveGalleryImgType | EventCreatedType

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


// selector
export const getGalleryImages = (state: AppStateType ) => state.event.images
export const getEventCreated = (state: AppStateType) => state.event.created

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