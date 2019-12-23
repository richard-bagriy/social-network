import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.css';

export default ({
    image,
    name,
    country,
    id
}) => {
    return (
        <>
            <div className={style.image}>
                <NavLink to={`/profile/${id}`}>
                    <img className={style.image} src={require(`../../../assets/images/${image}`)}  alt="test" />
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