import React from 'react'
import { SubmissionError } from 'redux-form'
import { connect } from 'react-redux'
import { getMessagePasswordChanged, setPasswordChanged } from '../store/Setting'
import ChangePassword from '../components/Setting/ChangePassword'

const ChangePasswordContainer = ({
    message,
    setPasswordChanged
}) => {

    const handleSubmit = values => {
        const { password, passwordRepeat } = values

        if (password !== passwordRepeat) {
            throw new SubmissionError({
                _error: 'Passwords do not match !!!'
            })
        }

        setPasswordChanged(password)
    }

    return <ChangePassword onSubmit={handleSubmit} message={message} />

}

const mapStateToProps = state => ({ message: getMessagePasswordChanged(state)  })

export default connect( mapStateToProps, { setPasswordChanged } )(ChangePasswordContainer)