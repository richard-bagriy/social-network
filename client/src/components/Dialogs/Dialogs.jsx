import React from 'react';
import Friends from './Friends/Friends';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';
import style from './style.module.css';

const Dialogs = (props) => {

    return (

        <div className={style.dialogsWrapper}>
            
            <Friends />

            <div className={style.messagesWrapper}>
                <div className={style.messagesHeader}>Jony Silva</div>

                <div className={style.messagesInner}>
                    { props.messages.map( m => <Message state={m} key={m.id}/> ) }
                </div>

                <NewMessage />
            </div>
        

        </div>
        
    )
}

export default Dialogs;