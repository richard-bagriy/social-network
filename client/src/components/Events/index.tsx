import React from 'react'
import { EventType } from '../../store/Events'
import Card from './Card'
import Preloader from '../common/Preloader'
import style from './style.module.scss'

type EventsProps = {
    events: Array<EventType>
    loading: boolean,
    loadEvents: () => void
}

const Events:React.FC<EventsProps> = ({ events, loadEvents, loading }) => (
    <div className="p-20">
        <div className={style.header}>
            <div>Events</div>
            <button onClick={loadEvents} className={style.header__btn}>
                Show More
            </button>
        </div>
        <div className={style.events}>
            { events.map(event => <Card {...event} key={event._id} />) }
        </div>
        { loading && <Preloader /> }
    </div>
)


export default Events