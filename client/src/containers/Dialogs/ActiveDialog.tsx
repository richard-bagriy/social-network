import React from 'react'
import { AppStateType } from '../../store'
import { connect, ConnectedProps } from 'react-redux'
import { getActiveDialog, getLoadingDialog } from '../../store/DialogsPage/selectors'
import { getAuthUserId } from '../../store/Auth/selectors'
import ActiveDialog from '../../components/Dialogs/ActiveDialog'
import Preloader from '../../components/common/Preloader'

const mapStateToProps = (state: AppStateType) => ({
    dialog: getActiveDialog(state),
    authId: getAuthUserId(state),
    loading: getLoadingDialog(state)
})

const connector = connect(mapStateToProps)

export type ActiveDialogProps = ConnectedProps<typeof connector>
//@ts-ignore
const Container: React.FC<ActiveDialogProps> = (props) => {

    if (props.loading) {
        return <Preloader />
    }

    return <ActiveDialog dialog={props.dialog} authID={props.authId} />
}

export default connector(Container)