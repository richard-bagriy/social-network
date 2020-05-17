import React from 'react'
import style from './style.module.scss'
import { generateImageFromFolder } from '../../../utils/helper'
import cn from 'classnames'

type Props = {
    events: Array<{ _id: string, title: string, location: string, logo: string }>
    edit: boolean
}

const ProfileEvents: React.FC<Props> = ({ events, edit }) => (
    <div className={style.wrapper}>
        { events.map(({ title, location, logo, _id  }) => {
            return <div className={cn('border', style.event)} key={_id}>
                <img 
                    src={generateImageFromFolder('event/logo')(logo)} 
                    alt={title} 
                    className={style.img}
                />
                <div className={style.name}>
                    { title }
                </div>
                <div className={style.location}>
                    { location }
                </div>
                { edit && <div className={style.buttons}>
                    <button className={style.buttons__btn} type="button">Edit</button>
                    <button className={style.buttons__btn}type="button">Delete</button>
                </div> }
            </div>
        }) }
    </div>
)

export default ProfileEvents