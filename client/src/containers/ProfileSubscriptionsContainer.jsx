import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getSubscriptions } from '../store/UsersPage/effects'
import { getUsersLoadingUser, getSubscriptions as getSubscriptionsSelector  } from '../store/UsersPage/selectors'
import Preloader from '../components/common/Preloader'
import Message from '../components/common/Message'
import Users from '../components/common/Users'
import withUserID from '../hoc/withUserID'

class ProfileSubscriptionsContainer extends Component {

    componentDidMount() {
        this.props.getSubscriptions(this.props.userId)
    }
    
    render() {
        const { users, isLoading } = this.props;

        if (isLoading) {
            return <Preloader />
        }

        if (users.length === 0) {
            return <Message message="You are not subscribed to anyone" />
        }
        
        return <Users users={users} />
    }
}

const mapStateToProps = state => ({
    loading: getUsersLoadingUser(state),
    users: getSubscriptionsSelector(state)
})

export default compose(
    connect(mapStateToProps, { getSubscriptions }),
    withUserID
)(ProfileSubscriptionsContainer)