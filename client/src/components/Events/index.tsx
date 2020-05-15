import React from 'react'
import { EventType } from '../../store/Events'
import Card from './Card'
import style from './style.module.scss'

type EventsProps = {
    events: Array<EventType>
}

const Events:React.FC<EventsProps> = ({ events }) => (
    <div className="p-20">
        <div className={style.header}>
            Events
        </div>
        <div className={style.events}>
            { events.map(event => <Card {...event} key={event._id} />) }
        </div>
    </div>
)


export default Events