import React from 'react';
import s from './ProfileInfo.module.css';
import defaultImage from '../../../assets/images/user.png';

const ProfileInfo = (props) => {

    const imageLink = props.profile.photos.small ? props.profile.photos.small : defaultImage;
    
    return (
        <div className={s.wrapper}>
            <div className={s.center}>
                <img className={s.profile__image} src={imageLink} alt={props.profile.fullName}/>
            </div>
            <div className={s.profileInfo}>
                <div className={`${s.profileName} ${s.center}`}>{props.profile.fullName}</div>
                <div className={`${s.profileLocation} ${s.center}`}>
                    <i className="fas fa-map-marker-alt location-market"></i>Ukraine
                </div>
                <div className={`${s.friendInfo} ${s.center}`}>
                    <div>
                        <span className={s.friendInfoSpan}>15</span>
                        <span className={s.frinedText}>Listing</span>
                    </div>
                    <div>
                        <span className={s.friendInfoSpan}>150</span>
                        <span className={s.frinedText}>Followers</span>
                    </div>
                    <div>
                        <span className={s.friendInfoSpan}>265</span>
                        <span className={s.frinedText}>Followind</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;