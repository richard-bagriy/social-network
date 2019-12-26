import React from 'react';
import style from './style.module.css';
import { generateImagePath } from '../../../utils/helper';

const ProfileInfo = ({ profile }) => {

    const userImage = generateImagePath(profile.image);
    
    return (
        <div className={style.wrapper}>
            <div className={style.center}>
                <img className={style.profile__image} src={userImage} alt={profile.fullName}/>
            </div>
            <div className={style.profileInfo}>
                <div className={`${style.profileName} ${style.center}`}>{ profile.fullName }</div>
                <div className={`${style.profileLocation} ${style.center}`}>
                    <i className="fas fa-map-marker-alt location-market"></i>Ukraine
                </div>
                <div className={`${style.friendInfo} ${style.center}`}>
                    <div>
                        <span className={style.friendInfoSpan}>0</span>
                        <span className={style.frinedText}>Listing</span>
                    </div>
                    <div>
                        <span className={style.friendInfoSpan}>{ profile.subscribers }</span>
                        <span className={style.frinedText}>Followers</span>
                    </div>
                    <div>
                        <span className={style.friendInfoSpan}>{ profile.subscriptions }</span>
                        <span className={style.frinedText}>Following</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;