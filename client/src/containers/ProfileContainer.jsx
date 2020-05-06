import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Profile from '../components/Profile/Profile';
import Preloader from '../components/common/Preloader';
import withUserID from '../hoc/withUserID';
import { getAuth, getAuthUserId } from '../store/Auth/selectors';
import { getProfile } from '../store/ProfilePage/effects';
import { getProfileLoadingUser, getProfileInfo } from '../store/ProfilePage/selectors';

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
            authID
        } = this.props;
        
        if (isLoadingUser || profile === null) {
            return <Preloader />
        }

        const showButton = authID === userId ? false : true
        
        return <Profile profile={profile} id={userId} showButton={showButton} />
    }
}


const mapStateToProps = (state) => ({
    profile: getProfileInfo(state),
    isAuth: getAuth(state),
    isLoadingUser: getProfileLoadingUser(state),
    authID: getAuthUserId(state)
})

export default compose(
    connect(mapStateToProps, { getProfile }),
    withUserID
)(ProfileContainer)