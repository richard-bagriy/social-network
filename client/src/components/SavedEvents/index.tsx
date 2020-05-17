import React from 'react'
import { EventType } from '../../store/Events'
import H2 from '../common/H2'
import EventCard from '../common/EventCard'
import style from './style.module.scss'

type Props = {
    events: Array<EventType>
}

const SavedEvents: React.FC<Props> = ({ events }) => (
<>
    <H2 text="saved events" />
    <div className={style.wrapper}>
        { events.map(event => <EventCard key={event._id} {...event} />) }
    </div>
</>
)

export default SavedEvents