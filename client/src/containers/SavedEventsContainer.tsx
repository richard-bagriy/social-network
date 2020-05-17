import React, { useEffect } from 'react'
import { AppStateType } from '../store'
import { getSavedEvents, getEventsLoading, thunkGetSavedEvents } from '../store/Events'
import { connect, ConnectedProps } from 'react-redux'
import Preloader from '../components/common/Preloader'
import SavedEvents from '../components/SavedEvents'
import Message from '../components/common/Message'

const mapStateToProps = (state: AppStateType) => ({
    events: getSavedEvents(state),
    loading: getEventsLoading(state)
})

const connector = connect(mapStateToProps, { thunkGetSavedEvents })

type Props = ConnectedProps<typeof connector>

const Container = (props:Props) => {
    const { loading, thunkGetSavedEvents, events } = props

    useEffect(() => {
        thunkGetSavedEvents()
    }, [])
    
    if (loading) {
        return <Preloader />
    }

    if (!events.length) {
        return <Message message="You don't have any saved Events" />
    }
    
    return <SavedEvents events={events} />
}

export default connector(Container)