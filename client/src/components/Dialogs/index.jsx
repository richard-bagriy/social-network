import React from 'react';
import Conversations from './Conversations';
import ActiveDialog from './ActiveDialog'
import style from './style.module.sass';

export default ({ activeDialog, authID, dialogs, getDialog }) => {
    return <div className={style.wrapper}>
        <Conversations dialogs={dialogs} activeId={activeDialog.id} getDialog={getDialog} />
        <ActiveDialog {...activeDialog} authID={authID} />
    </div>
};