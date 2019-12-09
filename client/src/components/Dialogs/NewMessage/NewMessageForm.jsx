import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLength } from '../../../utils/Validators/Validators';
import { Input } from '../../common/Forms/Forms';
import style from './style.module.css'

const maxLength20 = maxLength(20);

const NewMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={style.inner}>
            <Field component={Input} type="text" className={style.input} value={props.text} name="message" validate={[maxLength20, required]} />
            <button className={style.button}>Send</button>
        </form>
    )

}

export default reduxForm({form: 'new-message'})(NewMessageForm)