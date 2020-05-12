import React from 'react'
import { Field, WrappedFieldArrayProps } from 'redux-form'
import { Input, Select } from '../../../../common/Forms/Forms'
import { required, selectChoosen } from '../../../../../utils/Validators'
import style from './style.module.scss'
import cn from 'classnames'

const selectValues = ['facebook', 'twitter', 'instagramm']

const Social:React.FC<WrappedFieldArrayProps> = ({ fields }) => (
    <div className={style.wrapper}>
        { fields.map((member, index) => (
            <div className={style.inner} key={index}>
                <div>
                    <Field component={Select} name={`${member}.network`} className="input-border-bottom border w-100" 
                        values={selectValues} validate={[required, selectChoosen]}
                    />
                </div>
                <div>
                    <Field component={Input} className="input-border-bottom border w-100" name={`${member}.url`}
                        placeholder="Url" validate={[required]} 
                    />
                </div>
                <i className="fas fa-times" onClick={() => fields.remove(index)}></i>
            </div>
        ))}

        <button className={cn('btn btn-pink', style.btn)} type="button" onClick={() => fields.push({})}>
            Add Social Account
        </button>
    </div>
)

export default Social