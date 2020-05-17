import React, { useState } from 'react';
import Conversation from './Conversation';
import style from './style.module.sass';

export default ({
    dialogs,
    activeId,
    getDialog
}) => {

    const [filter, setFilter] = useState('')

    const handleChange = event => {
        setFilter(event.target.value)
    }
    
    return <div className={style.conversations}>
        <div className={style.conversations__inner}>

            <div className={style.filter}>
                <input 
                    type="text" 
                    className={style.filter__input} 
                    placeholder="Enter a keyword" 
                    value={filter} 
                    onChange={handleChange}
                />
            </div>
            
            { dialogs
                .filter(dialog => dialog.userName.toLowerCase().includes(filter.toLowerCase().trim()))
                .map(dialog => <Conversation key={dialog.id} getDialog={getDialog} activeId={activeId} {...dialog}  />) 
            }
        </div>
    </div>
}