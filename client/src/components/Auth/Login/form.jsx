import React from 'react'
import style from './index.module.css'
import { Field, reduxForm } from 'redux-form'
import {Input} from '../../common/Forms/Forms';
import {required, maxLength} from '../../../utils/Validators/Validators';

const maxLength16 = maxLength(16);

const Form = (props) => {

    const showPass = ({currentTarget}) => {
        const input = currentTarget.parentElement.querySelector('input[name="password"');
        
        (input.getAttribute('type') === 'password') ? 
         input.setAttribute('type', 'text') : 
         input.setAttribute('type', 'password');
    }
    
    return (
        <form className={style.loginForm} onSubmit={props.handleSubmit} >
            <div className={style.inputContainer}>
                <Field className={style.inputField} name="email" type="email" placeholder="Email" component={Input} validate={[required]}/>
                <i className={`far fa-envelope ${style.loginIcon}`}></i>
            </div>
            <div className={style.inputContainer}>
                <Field className={style.inputField} name="password" type="password" placeholder="Password" component={Input} validate={[required, maxLength16]} />
                <i className={`far fa-eye-slash ${style.loginIcon}`} onClick={showPass}></i>
            </div>
            <button className={style.btn}>Sign In</button>
        </form>
    )

}


export default reduxForm({form: 'login'})(Form)