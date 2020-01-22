import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getSubscribers, getLoadingSubscribers } from '../store/ProfilePage/selectors'
import Preloader from '../components/common/Preloader'
import Message from '../components/common/Message'
import Users from '../components/common/Users'
import { getSubscribers as getUserSubscribers } from '../store/ProfilePage/effects'
import withUserID from '../hoc/withUserID';

class ProfileSubscribersContainer extends Component {

    componentDidMount() {
        this.props.getUserSubscribers(this.props.userId);
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
    subscribers: getSubscribers(state),
    isLoading: getLoadingSubscribers(state)
})

export default compose(
    connect(mapStateToProps, { getUserSubscribers }),
    withUserID
)(ProfileSubscribersContainer)