import React from 'react';
import Conversation from './Conversation';
import style from './style.module.sass';

export default ({
    dialogs,
    activeId,
    getDialog
}) => {
    
    return <div className={style.conversations}>
        <div className={style.conversations__inner}>

            <div className={style.filter}>
                <input type="text" className={style.filter__input} placeholder="Enter a keyword"/>
            </div>
            
            { dialogs.map(dialog => <Conversation key={dialog.id} getDialog={getDialog} activeId={activeId} {...dialog}  />) }
        </div>
    </div>
}