import React from 'react';
import style from './NewPost.module.css';
import { Field, reduxForm } from 'redux-form'
import {required, maxLength} from '../../../../utils/Validators/Validators';
import {Input} from '../../../common/Forms/Forms';

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