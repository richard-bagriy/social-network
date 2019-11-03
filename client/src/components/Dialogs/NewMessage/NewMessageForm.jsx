import React from 'react'
import s from './NewMessage.module.css'
import { Field, reduxForm } from 'redux-form'
import {required, maxLength} from '../../../utils/Validators/Validators';
import {Input} from '../../common/Forms/Forms';

const maxLength20 = maxLength(20);

const NewMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.inner}>
            <Field component={Input} type="text" className={s.input} value={props.text} name="message" validate={[maxLength20, required]} />
            <button className={s.button}>Send</button>
        </form>
    )

}

export default reduxForm({form: 'new-message'})(NewMessageForm)