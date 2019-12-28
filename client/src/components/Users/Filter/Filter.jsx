import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength } from '../../../utils/Validators';
import { Input } from '../../common/Forms/Forms';
import classNames from 'classnames';
import style from './style.module.css';

const maxLength16 = maxLength(16);
const className = classNames('btn' ,'btn-pink', style.btnFilter);

const Filter = ({ handleSubmit }) => {

    return (
        <form className={style.filterWrapper} onSubmit={handleSubmit}>

            <Field 
                type="text" 
                className="input border w-100 bg-white"
                validate={[maxLength16]}
                component={Input}
                name="filterText"
            />

            <button className={className}>Search</button>
        </form>
    )
}

export default reduxForm({ form: 'filter-users' })(Filter)