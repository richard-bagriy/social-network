import React from 'react';
import Form from './NewMessageForm';
import s from './NewMessage.module.css';
import {connect} from 'react-redux';
import {addNewMessage} from '../../../redux/dialog-reducer';

const NewMessage = (props) => {

    const addNewMessage = (message) => {
        props.addNewMessage(message.message);
    }

    return (
        <div className={s.block}>
            <Form onSubmit={addNewMessage} />
        </div>
    )
}

export default connect(null, {addNewMessage})(NewMessage)