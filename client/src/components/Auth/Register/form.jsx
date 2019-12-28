import React from 'react'
import style from '../Auth.module.css'
import { Field, reduxForm } from 'redux-form'
import {Input} from '../../common/Forms/Forms';
import Gender from './Gender';
import Message from '../../common/Message';
import {required, maxLength} from '../../../utils/Validators';

const maxLength16 = maxLength(16);

const Form = props => {

    const { error, handleSubmit, message } = props;
    
    return (
        <form className={style.loginForm} onSubmit={handleSubmit}>

            { message && <Message message={message} type="success" /> }

            <div className={style.fieldContainer} >
                <Field className={style.fieldContainer__input} name="name" type="text" placeholder="Name" component={Input} validate={[required]}/>
            </div>

            <div className={style.fieldContainer} >
                <Gender/>
            </div>

            <div className={style.fieldContainer} >
                <Field className={style.fieldContainer__input} name="email" type="text" placeholder="Email" component={Input} validate={[required]}/>
            </div>

            <div className={style.fieldContainer} >
                <Field className={style.fieldContainer__input} name="password" type="password" placeholder="Password" component={Input} validate={[required, maxLength16]} />
            </div>
            
            { error && <Message message={error} type="error" /> }

            <button className="btn btn-pink">Sign In</button>
        </form>
    )

}

export default reduxForm({form: 'registration'})(Form)