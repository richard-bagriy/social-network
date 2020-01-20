import React from 'react';
import UserInfo from '../../common/User/Info';
import UserExtra from '../../common/User/Extra';
import style from './style.module.css';

const ProfileInfo = ({ 
    image,
    name,
    subscriptions,
    subscribers,
    id
}) => {
    return (
        <div className={style.wrapper}>
            <UserInfo 
                image={image}
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