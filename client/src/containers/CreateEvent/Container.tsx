import React from 'react'
import { AppStateType } from '../../store'
import { getEventCreated, eventCreated } from '../../store/Event'
import { connect, ConnectedProps } from 'react-redux'
import CreateEvent from '../../components/CreateEvent'

const mapStateToProps = (state:AppStateType) => ({
    created: getEventCreated(state)
})

const connector = connect(mapStateToProps, { eventCreated })

export type EventContainerTypeProps = ConnectedProps<typeof connector>

const Container: React.FC<EventContainerTypeProps> = (props) => (<CreateEvent {...props} />)

export default connector(Container)