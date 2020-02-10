import React from 'react'
import classNames from 'classnames'
import BorderBlock from '../../common/BorderBlockWithIcon'
import style from './style.module.css'

export default ({
    about,
    email,
    phone,
    address,
    country
}) => {
     
    return (
        <div className={style.wrapper}>
            <BorderBlock label="About" text={about} iconClass="fas fa-bars" />
            <BorderBlock label="Email Address" text={email} iconClass="far fa-envelope" />
            { phone && <BorderBlock label="Phone Number" text={phone} iconClass="fas fa-mobile-alt" /> }
            { address && <BorderBlock label="Address" text={address} iconClass="fas fa-map-marker-alt" /> }
            <BorderBlock label="Region" text={country} iconClass="fas fa-map-marker-alt" />
            <BorderBlock label="Follow me" iconClass="fas fa-map-marker-alt">
                <i className={ classNames('fab fa-facebook-f color-grey font-size-16 ', style.icon, style.iconSocial) }></i>
                <i className={ classNames('fab fa-instagram color-grey font-size-16', style.icon, style.iconSocial) }></i>
                <i className={ classNames('fab fa-linkedin-in color-grey font-size-16', style.icon, style.iconSocial) }></i>
                <i className={ classNames('fab fa-twitter color-grey font-size-16', style.icon, style.iconSocial) }></i>
            </BorderBlock>
        </div>
    )
}