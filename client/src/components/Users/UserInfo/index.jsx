import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.css';
import { generateImagePath } from '../../../utils/helper';

export default ({
    image,
    name,
    country,
    id
}) => {

    const userImage = generateImagePath(image);

    return (
        <>
            <div className={style.image}>
                <NavLink to={`/profile/${id}`}>
                    <img className={style.image} src={userImage}  alt="test" />
                </NavLink>
            </div>
            <div className={style.name}>
                { name }
            </div>
            <div className={style.country}>
                <i className="fas fa-map-marker-alt location-market"></i>
                { country }
            </div>
        </>
    )
    
}