import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { required, maxLength } from '../../../../utils/Validators';
import { Input } from '../../../common/Forms/Forms';
import style from './style.module.css';

const maxLength50 = maxLength(50);

const NewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={style.inner}>
            <img className={style.profileImage} src={props.profileImage} alt="New Post"/>
            <Field component={Input} className={style.input} value={props.text} name="message" validate={[required,maxLength50]} />
            <button className={style.btn}>Add post</button>
        </form>
    )

}

export default reduxForm({form: 'add-post'})(NewPostForm)