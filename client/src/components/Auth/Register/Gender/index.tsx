import React from 'react';
import style from './index.module.css';
import { Field } from 'redux-form'
import { Radio } from '../../../common/Forms/Forms';

export default () => (
    <div>
        <div className={style.header}>Select Gender</div>
        <div className={style.wrapper}>
            <Field className={style.radio} name="gender" value="male" label="Male" component={Radio} type="radio" />
            <Field className={style.radio} name="gender" value="female" label="Female" component={Radio} type="radio" />
        </div>
    </div>
)