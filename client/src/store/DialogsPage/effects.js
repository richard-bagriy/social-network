import { dialogsAPI } from '../../api/api'
import { setActiveDialog, setDialogs, setLoading, addNewMessage, setLoadingDialog  } from './actions'
import { reset } from 'redux-form';

export const getDialogs = id => async dispatch => {

    dispatch(setLoading(true))

    const { dialogs, activeUser } = await dialogsAPI.getDialogs(id)
    
    dispatch(setDialogs(dialogs))
    dispatch(setActiveDialog(activeUser))

    dispatch(setLoading(false))

}

export const addMessage = (userId, message) => async dispatch => {
    
    dispatch(reset('dialog-new-message'))
    
    const data = await dialogsAPI.addMessage(userId, message)

    dispatch(addNewMessage(data.message))
    
}

export const getDialog = userId => async dispatch => {

    dispatch(setLoadingDialog(true))

    const data = await dialogsAPI.getDialog(userId)

    dispatch(setActiveDialog(data))

    dispatch(setLoadingDialog(false))

}