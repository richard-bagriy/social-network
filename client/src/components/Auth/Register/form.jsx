import React from 'react'
import style from './index.module.css'
import { Field, reduxForm } from 'redux-form'
import {Input} from '../../common/Forms/Forms';
import {required, maxLength} from '../../../utils/Validators/Validators';

const maxLength16 = maxLength(16);

const Form = (props) => {

    return (
        <form className={style.loginForm} onSubmit={props.handleSubmit}>
            <div className={style.inputContainer}>
                <Field className={style.inputField} name="name" type="name" placeholder="Name" component={Input} validate={[required]}/>
            </div>
            <div className={style.inputContainer}>
                <Field className={style.inputField} name="email" type="email" placeholder="Email" component={Input} validate={[required]}/>
            </div>
            <div className={style.inputContainer}>
                <Field className={style.inputField} name="password" type="password" placeholder="Password" component={Input} validate={[required, maxLength16]} />
            </div>
            <button className={style.btn}>Sign In</button>
        </form>
    )

}


export default reduxForm({form: 'registration'})(Form)