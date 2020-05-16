import React from 'react';
import Conversations from './Conversations';
import ActiveDialog from '../../containers/Dialogs/ActiveDialog'
import style from './style.module.sass';

export default ({ activeDialog, dialogs, getDialog }) => (
    <div className={style.wrapper}>
        <Conversations dialogs={dialogs} activeId={activeDialog.id} getDialog={getDialog} />
        <ActiveDialog />
    </div>
)