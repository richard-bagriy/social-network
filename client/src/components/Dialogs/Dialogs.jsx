import React from 'react';
import s from './Dialogs.module.css';
import Friends from './Friends/Friends';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';

const Dialogs = (props) => {

    return (

        <div className={s.dialogsWrapper}>
            
            <Friends />

            <div className={s.messagesWrapper}>
                <div className={s.messagesHeader}>Jony Silva</div>

                <div className={s.messagesInner}>
                    { props.messages.map( m => <Message state={m} key={m.id}/> ) }
                </div>

                <NewMessage />
            </div>
        

        </div>
        
    )
}

export default Dialogs;