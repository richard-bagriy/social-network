import React, { useEffect, useState } from 'react'
import { AppStateType } from '../store'
import { getEvents, thunkGetEvents, getEventsLoading } from '../store/Events'
import Events from '../components/Events'
import { connect, ConnectedProps } from 'react-redux'
import Preloader from '../components/common/Preloader'

const mapStateToProps = (state: AppStateType) => ({
    events: getEvents(state),
    loading: getEventsLoading(state)
})

const connector = connect(mapStateToProps, {thunkGetEvents})

type Props = ConnectedProps<typeof connector>

const Container = (props: Props) => {
    
    useEffect(() => {
        props.thunkGetEvents()
    }, [])

    if (props.loading) {
        return <Preloader />
    }

    return <Events events={props.events} />
}


export default connector(Container)