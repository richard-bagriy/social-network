import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength } from '../../../utils/Validators/Validators';
import { Input } from '../../common/Forms/Forms';
import style from './style.module.css';

const maxLength16 = maxLength(16);

const Filter = (props) => {

    return (
        <form className={style.filterWrapper} onSubmit={props.handleSubmit}>

            <Field 
                type="text" 
                className={style.search} 
                validate={[maxLength16]}
                component={Input}
                name="filterText"
            />
            <button className={style.btn}>Search</button>
        </form>
    )
}

export default reduxForm({form: 'filter-users'})(Filter)