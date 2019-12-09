import React from 'react';
import style from './style.module.css';
import defaultImage from '../../../assets/images/user.png';

const ProfileInfo = (props) => {

    const imageLink = props.profile.photos.small ? props.profile.photos.small : defaultImage;
    
    return (
        <div className={style.wrapper}>
            <div className={style.center}>
                <img className={style.profile__image} src={imageLink} alt={props.profile.fullName}/>
            </div>
            <div className={style.profileInfo}>
                <div className={`${style.profileName} ${style.center}`}>{props.profile.fullName}</div>
                <div className={`${style.profileLocation} ${style.center}`}>
                    <i className="fas fa-map-marker-alt location-market"></i>Ukraine
                </div>
                <div className={`${style.friendInfo} ${style.center}`}>
                    <div>
                        <span className={style.friendInfoSpan}>15</span>
                        <span className={style.frinedText}>Listing</span>
                    </div>
                    <div>
                        <span className={style.friendInfoSpan}>150</span>
                        <span className={style.frinedText}>Followers</span>
                    </div>
                    <div>
                        <span className={style.friendInfoSpan}>265</span>
                        <span className={style.frinedText}>Followind</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;