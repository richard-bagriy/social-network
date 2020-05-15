import React, { useEffect } from 'react'
import { AppStateType } from '../store'
import { getEvents, thunkGetEvents, getEventsLoading, getEventsLimit, getEventsPage } from '../store/Events'
import Events from '../components/Events'
import { connect, ConnectedProps } from 'react-redux'
import Preloader from '../components/common/Preloader'

const mapStateToProps = (state: AppStateType) => ({
    events: getEvents(state),
    loading: getEventsLoading(state),
    page: getEventsPage(state),
    limit: getEventsLimit(state)
})

const connector = connect(mapStateToProps, {thunkGetEvents})

type Props = ConnectedProps<typeof connector>

const Container = (props: Props) => {
    
    useEffect(() => {
        loadEvents()
    }, [])

    const loadEvents = () => {
        props.thunkGetEvents(props.page, props.limit)
    }

    if (props.loading && !props.events.length) {
        return <Preloader />
    }

    return <Events events={props.events} loading={props.loading} loadEvents={loadEvents} />
}


export default connector(Container)