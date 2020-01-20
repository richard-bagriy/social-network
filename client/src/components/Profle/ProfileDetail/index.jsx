import React from 'react'
import classNames from 'classnames'
import style from './style.module.css'

export default ({
    about,
    email,
    phone,
    address,
    country
}) => {
    const blockClass = "bg-white p-20 border font-size-14 line-height-24 color-grey"
     
    return (
        <div className={style.wrapper}>
            <div className={blockClass}>
                <div className={ style.header }>
                    <i className={ classNames('fas fa-bars color-grey', style.icon) }></i>
                    About
                </div>
                { about }
            </div>
            <div className={blockClass}>
                <div className={ style.header }>
                    <i className={ classNames('far fa-envelope color-grey', style.icon) }></i>
                    Email Address
                </div>
                { email }
            </div>
            { phone && 
                <div className={blockClass}>
                    <div className={ style.header }>
                        <i className={ classNames('fas fa-mobile-alt color-grey', style.icon) }></i>
                        Phone Number
                    </div>
                    { phone }
                </div>
            }
            { address &&
                <div className={blockClass}>
                    <div className={ style.header }>
                        <i className={ classNames('fas fa-map-marker-alt color-grey', style.icon) }></i>
                        Address
                    </div>
                    { address }
                </div>
            }
            <div className={blockClass}>
                <div className={ style.header }>
                    <i className={ classNames('fas fa-map-marker-alt color-grey', style.icon) }></i>
                    Region
                </div>
                { country }
            </div>
            <div className={blockClass}>
                <div className={ style.header }>
                    <i className={ classNames('far fa-bell color-grey', style.icon) }></i>
                    Follow me
                </div>
                <i className={ classNames('fab fa-facebook-f color-grey font-size-16 ', style.icon, style.iconSocial) }></i>
                <i className={ classNames('fab fa-instagram color-grey font-size-16', style.icon, style.iconSocial) }></i>
                <i className={ classNames('fab fa-linkedin-in color-grey font-size-16', style.icon, style.iconSocial) }></i>
                <i className={ classNames('fab fa-twitter color-grey font-size-16', style.icon, style.iconSocial) }></i>
            </div>
        </div>
    )
}