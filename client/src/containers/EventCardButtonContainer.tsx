import React from 'react'
import Button from '../components/common/EventCard/Button'
import { connect, ConnectedProps } from 'react-redux'
import { AppStateType } from '../store'
import { getSavingInProgress, thunkToggleSaveEvent } from '../store/Events'

const mapStateToProps = (state: AppStateType) => ({
    savingInProgress: getSavingInProgress(state)
})

const connector = connect(mapStateToProps, { thunkToggleSaveEvent } )

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
    saved: boolean
    id: string
}

const Container = (props: Props) => {
    const {thunkToggleSaveEvent, id, saved, savingInProgress} = props

    const handleClick = () => {
        thunkToggleSaveEvent(id, saved)
    }
    
    const disabled = savingInProgress.some((el: string) => el === id)

    return <Button onClick={handleClick} saved={saved} disabled={disabled} />
}
    


export default connector(Container)