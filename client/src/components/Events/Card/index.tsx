import React from 'react'
import { EventType } from '../../../store/Event'
import { generateImageEventPath } from '../../../utils/helper'
import style from './style.module.scss'

const Card: React.FC<EventType> = ({
    title, location, cover,
    userId: { name, images: { photo } },
}) => (
    <div className={style.card}>
        <div className={style.card__image}>
            <img src={generateImageEventPath(cover)} alt={title} />
            <div className={style.card__header}>
                <div className={style.card__header__title}>{ title }</div>
                <div className={style.card__header__location}>
                    <i className="fas fa-map-marker-alt"></i>
                    { location }
                </div>
            </div>
        </div>
        <div className={style.card__user}>
            {name}
            { photo }
        </div>
    </div>
)

export default Card
