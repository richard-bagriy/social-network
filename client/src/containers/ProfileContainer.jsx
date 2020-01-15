import React from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../store/ProfilePage/effects';
import Profile from '../components/Profle/Profile';
import { withRouter } from "react-router";
import { compose } from 'redux';
import Preloader from '../components/common/Preloader';
import { getAuth, getAuthUserId } from '../store/Auth/selectors';
import { getProfileLoadingUser, getProfileInfo } from '../store/ProfilePage/selectors';

class ProfileContainer extends React.PureComponent {

    componentDidMount() {
        let id = this.props.match.params.id;

        if (!id) {
            id = this.props.userId;
        }
        
        this.props.getProfile(id);
    }

    render() {
        const { isLoadingUser , profile, userId } = this.props;

        if (isLoadingUser){
            return <Preloader />
        }
        
        return <Profile profile={profile} id={userId} />
    }
}


const mapStateToProps = (state) => {
    return {
        profile: getProfileInfo(state),
        isAuth: getAuth(state),
        userId: getAuthUserId(state),
        isLoadingUser: getProfileLoadingUser(state)
    }
}

export default compose(
    connect(mapStateToProps, { getProfile }),
    withRouter
)(ProfileContainer)