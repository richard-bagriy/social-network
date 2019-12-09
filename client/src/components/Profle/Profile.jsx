import React from 'react'
import s from './Profile.module.css'
import PostsContainer from '../../containers/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = React.memo(props => {

    if (!props.profile) {
        return <></>;
    }

    return (
        <div className={s.wrapper}>
            <ProfileInfo profile={props.profile} />
            <PostsContainer />
        </div>
    )
})

export default Profile;