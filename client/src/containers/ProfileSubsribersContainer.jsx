import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getSubscribers as getSubscribersSelector, getUsersLoadingUser } from '../store/UsersPage/selectors'
import Preloader from '../components/common/Preloader'
import Message from '../components/common/Message'
import Users from '../components/common/Users'
import { getSubscribers } from '../store/UsersPage/effects'
import withUserID from '../hoc/withUserID';

class ProfileSubscribersContainer extends Component {

    componentDidMount() {
        this.props.getSubscribers(this.props.userId);
    }

    render() {
        const { subscribers, isLoading } = this.props;

        if (isLoading) {
            return <Preloader />
        }

        if (subscribers.length === 0) {
            return <Message message="You don't have subscribers yet :(" />
        }
        
        return <Users users={subscribers} />
    }

}

const mapStateToProps = state => ({
    subscribers: getSubscribersSelector(state),
    isLoading: getUsersLoadingUser(state)
})

export default compose(
    connect(mapStateToProps, { getSubscribers }),
    withUserID
)(ProfileSubscribersContainer)