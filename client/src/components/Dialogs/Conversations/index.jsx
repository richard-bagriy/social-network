import React from 'react';
import Conversation from './Conversation';
import style from './style.module.css';

export default ({
    dialogs,
    activeId,
    getDialog
}) => {
    
    return <div className={style.wrapper}>
        <div className={style.inner}>

            <div className={style.filter}>
                <input type="text" className={style.filterInput} placeholder="Enter a keyword"/>
            </div>
            
            { dialogs.map(dialog => <Conversation key={dialog.id} getDialog={getDialog} activeId={activeId} {...dialog}  />) }
        </div>
    </div>
}