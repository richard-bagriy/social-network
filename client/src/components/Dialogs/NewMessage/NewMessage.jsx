import React from 'react';
import { connect } from 'react-redux';
import Form from './NewMessageForm';
import { addNewMessage } from '../../../store/DialogsPage/actions';
import style from './style.module.css';

const NewMessage = (props) => {

    const addNewMessage = (message) => {
        props.addNewMessage(message.message);
    }

    return (
        <div className={style.block}>
            <Form onSubmit={addNewMessage} />
        </div>
    )
}

export default connect(null, {addNewMessage})(NewMessage)