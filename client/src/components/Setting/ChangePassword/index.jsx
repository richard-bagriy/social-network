import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/Forms/Forms'
import { maxLength, minLength, required } from '../../../utils/Validators'
import Message from '../../common/Message'
import style from './style.module.css'
import classNames from 'classnames'

const maxLength16 = maxLength(16)
const minLength6 = minLength(6)

const ChangePassword = ({ 
    handleSubmit,
    pristine,
    submitting,
    error,
    message
}) => {

    return (
        <div className={classNames('border', style.wrapper)}>

            <div className={classNames('border border-bottom p-20', style.header)}>Change password</div>

            <div className="p-20">
                <form onSubmit={handleSubmit} method="POST">
                    { message && <Message type="success" message={message} /> }
                    <div className="m-bot-20">
                        <Field 
                            component={Input}
                            name="password"
                            type="password"
                            className="input w-100 border"
                            placeholder="New password"
                            validate={ [maxLength16, minLength6, required] }
                        />
                    </div>
                    <div className="m-bot-20">
                        <Field 
                            component={Input}
                            name="passwordRepeat"
                            type="password"
                            className="input w-100 border"
                            placeholder="Confirm password"
                            validate={ [maxLength16, minLength6, required] }
                        />
                    </div>

                    { error && <Message type="error" message={error} /> }
                    
                    <button className={classNames('btn btn-pink', style.btn)} disabled={pristine || submitting} type="submit">
                        Save Changes
                    </button>
                </form>
            </div>

        </div>
    )
}

export default reduxForm({ form: 'change-password' })(ChangePassword)