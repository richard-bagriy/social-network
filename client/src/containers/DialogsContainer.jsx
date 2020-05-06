import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux';
import Preloader from '../components//common/Preloader'
import withAuthID from '../hoc/withUserID'
import Dialogs from '../components/Dialogs';
import { getDialogsSelector, getActiveDialog, getLoading } from '../store/DialogsPage/selectors';
import { getDialogs, getDialog } from '../store/DialogsPage/effects'
import Message from '../components/common/Message';


const Container = ({
    dialogs,
    activeDialog,
    loading,
    getDialogs,
    getDialog,
    authId,
    ...rest
}) => {
    
    useEffect(() => {
        const id = rest.match.params.id ? rest.match.params.id : null
        getDialogs(id)
    },[])
    
    if (loading) {
        return <Preloader />
    }

    if (!dialogs.length) {
        return <div className="center-block height-100">
            <Message message="You don't have any dialogs yet ^__^" />
        </div>
    }

    return <Dialogs dialogs={dialogs} getDialog={getDialog} activeDialog={activeDialog} authID={authId} />
}

const mapStateToProps = (state) => ({
    dialogs: getDialogsSelector(state),
    activeDialog: getActiveDialog(state),
    loading: getLoading(state)
})

export default compose(
    connect(mapStateToProps, { getDialogs, getDialog } ),
    withAuthID
)(Container);
