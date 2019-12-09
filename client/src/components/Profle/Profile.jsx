import React from 'react'
import PostsContainer from '../../containers/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import style from './style.module.css';

const Profile = React.memo(props => {

    if (!props.profile) {
        return <></>;
    }

    return (
        <div className={style.wrapper}>
            <ProfileInfo profile={props.profile} />
            <PostsContainer />
        </div>
    )
})

export default Profile;