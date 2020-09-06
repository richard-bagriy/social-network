import React from 'react'
import style from '../Auth.module.scss'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Input } from '../../common/Forms/Forms'
import Message from '../../common/Message'
import { required, maxLength } from '../../../utils/Validators'
import { FormStringKeyType } from '../../../Types'

const maxLength16 = maxLength(16)

export type LoginFormValuesType = {
    email: string
    password: string
}

type LoginFormInjectedProps = {
    showPassword: boolean,
    toggleShowPassword: () => void
}

export type LoginHandleSubmitPropsType = FormStringKeyType & LoginFormValuesType

const Form: React.FC<InjectedFormProps<LoginHandleSubmitPropsType, LoginFormInjectedProps> & LoginFormInjectedProps > = ({
    handleSubmit,
    showPassword,
    toggleShowPassword,
    error
}) => (
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
            <i className={`far fa-eye-slash ${style.fieldContainer__icon}`} onClick={toggleShowPassword}></i>
        </div>

        { error && <Message message={error} type="error" /> }

        <button className="btn btn-pink">Sign In</button>

    </form>
)

export default reduxForm<LoginHandleSubmitPropsType, LoginFormInjectedProps>({ form: 'login' })(Form)