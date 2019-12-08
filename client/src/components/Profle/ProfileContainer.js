import React from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../store/ProfilePage/effects';
import Profile from './Profile';
import { withRouter } from "react-router";
import { compose } from 'redux';
import Preloader from '../common/Preloader';
import { getAuth, getAuthUserId } from '../../store/Auth/selectors';
import { getProfileLoadingUser, getProfileInfo } from '../../store/ProfilePage/selectors';

class ProfileContainer extends React.PureComponent {

    componentDidMount() {
        let id = this.props.match.params.id;

        if (!id) {
            id = this.props.userId;
        }
        
        this.props.getProfile(id);
    }

    render() {

        if (this.props.isLoadingUser){
            return <Preloader />
        }
        
        return (
            <div>
                <Profile profile={this.props.profile} />
            </div>
        )
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