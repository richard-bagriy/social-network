import React from 'react'
import style from '../Auth.module.css'
import { Field, reduxForm } from 'redux-form'
import {Input} from '../../common/Forms/Forms';
import Message from '../../common/Message';
import {required, maxLength} from '../../../utils/Validators';

const maxLength16 = maxLength(16);

const Form = ({ handleSubmit, showPassword, togglePassword, error }) => {

    return (
        <form onSubmit={handleSubmit} >

            <div className={style.fieldContainer}>
                <Field className={style.fieldContainer__input} name="email" type="email" placeholder="Email" component={Input} validate={[required]}/>
                <i className={`far fa-envelope ${style.fieldContainer__icon}`}></i>
            </div>

            <div className={style.fieldContainer}>
                <Field className={style.fieldContainer__input} 
                    name="password" type={showPassword ? 'text' : 'password'} 
                    placeholder="Password" 
                    component={Input} 
                    validate={[required, maxLength16]} 
                />
                <i className={`far fa-eye-slash ${style.fieldContainer__icon}`} onClick={togglePassword}></i>
            </div>

            {error && <Message message={error} type="error" />}

            <button className={style.btn}>Sign In</button>
        </form>
    )

}

export default reduxForm({form: 'login'})(Form)