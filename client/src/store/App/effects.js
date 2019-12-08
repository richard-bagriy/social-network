import { setInit } from './actions';
import { checkAuth } from '../Auth/effects';

export const initializeApp = () => (dispatch) => {

    Promise.all([
        dispatch(checkAuth())
    ]).then(() => {
        dispatch(setInit());
    })

}