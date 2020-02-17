import React from 'react';
import UserInfo from '../../common/Users/User/Info';
import UserExtra from '../../common/Users/User/Extra';
import style from './style.module.css';
import { generateImagePath } from '../../../utils/helper';

const ProfileInfo = ({ 
    images: { photo, cover },
    name,
    subscriptions,
    subscribers,
    id
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
        </div>
    )
}

export default ProfileInfo;