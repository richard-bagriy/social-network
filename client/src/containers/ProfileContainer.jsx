import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Profile from '../components/Profle/Profile';
import Preloader from '../components/common/Preloader';
import withUserID from '../hoc/withUserID';
import { getAuth } from '../store/Auth/selectors';
import { getProfile, addPost } from '../store/ProfilePage/effects';
import { getProfileLoadingUser, getProfileInfo, getProfilePosts } from '../store/ProfilePage/selectors';
import { getUserImage } from '../store/Auth/selectors';

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.userId);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userId !== this.props.userId) {
            this.props.getProfile(this.props.userId);
        }
    }

    render() {
        const { 
            isLoadingUser,
            profile,
            userId,
            addPost,
            userImage,
            posts
        } = this.props;
        
        if (isLoadingUser || profile === null) {
            return <Preloader />
        }

        return <Profile profile={profile} id={userId} userImage={userImage} addPost={addPost} posts={posts} />
    }
}


const mapStateToProps = (state) => {
    return {
        profile: getProfileInfo(state),
        isAuth: getAuth(state),
        isLoadingUser: getProfileLoadingUser(state),
        userImage: getUserImage(state),
        posts: getProfilePosts(state)
    }
}

export default compose(
    connect(mapStateToProps, { getProfile, addPost }),
    withUserID
)(ProfileContainer)