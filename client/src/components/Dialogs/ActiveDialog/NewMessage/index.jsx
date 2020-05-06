import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../../../store/DialogsPage/effects';
import { getActiveDialog } from '../../../../store/DialogsPage/selectors'
import { Field, reduxForm } from 'redux-form'
import { required, maxLength } from '../../../../utils/Validators';
import { Input } from '../../../common/Forms/Forms';
import style from './style.module.css';

const maxLength20 = maxLength(20);

const NewMessageForm = ({ handleSubmit, text, ...props  }) => {
    
    return <div className={style.block}>
        <form onSubmit={handleSubmit} className={style.inner}>
            <Field 
                component={Input} 
                type="text" 
                className={style.input} 
                value={text} 
                name="message"
                validate={[maxLength20, required]} 
            />
            <Field component="input" type="hidden" name="userId" />
            <button className="btn btn-pink">Send</button>
        </form>
    </div>

}

const Form = reduxForm({form: 'dialog-new-message' })(NewMessageForm)

const NewMessage = ({ addMessage, activeDialog }) => {
    
    const userId = activeDialog ? activeDialog.id : null

    const handleSubmit = ({ message, userId }) => addMessage(userId, message);

    return <Form onSubmit={handleSubmit} initialValues={{userId}} />
    
}

const mapStateToProps = state => ({
    activeDialog: getActiveDialog(state)
})

export default connect(mapStateToProps, { addMessage })(NewMessage)