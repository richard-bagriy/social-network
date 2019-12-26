import React from 'react'
import PostsContainer from '../../containers/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import style from './style.module.css';

const Profile = React.memo(({profile}) => {

    if (!profile) {
        return <></>;
    }

    return (
        <div className={style.wrapper}>
            <ProfileInfo profile={profile} />
            <PostsContainer />
        </div>
    )
})

export default Profile;