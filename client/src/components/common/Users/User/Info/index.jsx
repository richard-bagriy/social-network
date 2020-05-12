import React from 'react'
import { NavLink } from 'react-router-dom'
import { generateImagePath } from '../../../../../utils/helper';
import style from '../../style.module.scss';
import classNames from 'classnames';

export default ({
    image,
    name,
    country,
    id,
    ...rest
}) => {
    const userImage = generateImagePath(image);
    const { 
        imageClass   = null,
        nameClass    = null,
        countryClass = null
    } = rest;

    return <>
        <div className="text-center">
            <NavLink to={`/profile/${id}`}>
                <img className={ classNames(style.user__image, imageClass) } src={ userImage }  alt={ name } />
            </NavLink>
        </div>
        <div className={ classNames(style.user__name, nameClass) }>
            { name }
        </div>
        <div className={ classNames(style.user__country, countryClass) }>
            <i className="fas fa-map-marker-alt location-market"></i>
            { country }
        </div>
    </>
    
}