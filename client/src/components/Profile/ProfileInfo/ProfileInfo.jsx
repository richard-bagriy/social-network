import React from 'react';
import { NavLink } from 'react-router-dom'
import UserInfo from '../../common/Users/User/Info';
import UserExtra from '../../common/Users/User/Extra';
import style from './style.module.css';
import { generateImagePath } from '../../../utils/helper';

const ProfileInfo = ({ 
    images: { photo, cover },
    name,
    subscriptions,
    subscribers,
    id,
    showButton
}) => {
    
    const coverImage = generateImagePath(cover);
    
    const bgImage = { backgroundImage: `url(${coverImage})` };

    return (
        <div className={style.wrapper} style={bgImage}>
            <UserInfo 
                image={photo}
                name={name}
                country="Ukraine"
                id={id}
                imageClass={style.userImage}
                nameClass="color-white"
                countryClass="color-white"
            />
            <UserExtra
                events="0"
                subscribers={subscribers}
                subscriptions={subscriptions}
                color="color-white"
            />
            { showButton && 
                <div className="text-center">
                    <NavLink to={`/dialogs/${id}`} className="btn btn-pink"> Message </NavLink>
                </div>
            }
        </div>
    )
}

export default ProfileInfo;