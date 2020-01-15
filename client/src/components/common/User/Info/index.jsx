import React from 'react'
import { NavLink } from 'react-router-dom'
import { generateImagePath } from '../../../../utils/helper';
import style from './style.module.css';
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
                <img className={ classNames(style.image, imageClass) } src={ userImage }  alt={ name } />
            </NavLink>
        </div>
        <div className={ classNames(style.name, nameClass) }>
            { name }
        </div>
        <div className={ classNames(style.country, countryClass) }>
            <i className="fas fa-map-marker-alt location-market"></i>
            { country }
        </div>
    </>
    
}