import React from 'react'
import { EventType } from '../../../store/Events'
import { generateImageFromFolder, generateImagePath } from '../../../utils/helper'
import style from './style.module.scss'
import { Link } from 'react-router-dom'
import Button from '../../../containers/EventCardButtonContainer'

const EventCard: React.FC<EventType> = ({
    _id,
    title,
    location,
    cover,
    userId,
    userName,
    userImage,
    saved
}) => (
    <div className={style.card}>
        <div className={style.card__image}>
            <img src={generateImageFromFolder('event/cover')(cover)} alt={title} />
            <div className={style.card__header}>
                <div className={style.card__header__title}>{ title }</div>
                <div className={style.card__header__location}>
                    <i className="fas fa-map-marker-alt"></i>
                    { location }
                </div>
            </div>
        </div>
        <div className={style.card__user}>
            <Button id={_id} saved={saved} />
            <img src={generateImagePath(userImage)} alt={userName}  className="user-small-image" />
            <Link to={`profile/${userId}`} className={style.card__user__name}>{userName}</Link>
        </div>
    </div>
)

export default EventCard
