import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { subscribe, unsubscribe, getUsers } from '../store/UsersPage/effects';
import Users from '../components/Users/Users';
import { 
    getUsersPage, 
    getUsersLimit, 
    getUsersLoadingUser, 
    getUsersFollowing, 
    getUsersSelector,
    getHaveUsers
} from '../store/UsersPage/selectors';


class UsersContainer extends PureComponent {

    state = {
        filterText : '',
    }

    componentDidMount() {
        this.props.getUsers(this.props.limit, this.props.page);
        window.addEventListener('scroll', this._autoLoadUsers);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._autoLoadUsers);
    }

    _autoLoadUsers = () => {

        let endOfPage = document.documentElement.scrollHeight - (window.pageYOffset + window.innerHeight);

        if (endOfPage <= 200 && !this.state.filterText && this.props.haveUsers) {
            !this.props.isLoadingUsers && this.props.getUsers(this.props.limit, this.props.page);
        }
    }

    changeFilterText = (filterText) => {
        this.setState({ filterText })
    }

    getUsers() {
        let filterText = this.state.filterText ? this.state.filterText.toLowerCase().trim() : '';
        return [...this.props.users].filter(u => u.name.toLowerCase().includes(filterText));
    }
    
    render() {
        return (
            <Users
                changeFilterText={this.changeFilterText}
                {...this.props}
                users={this.getUsers()}
            />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        page: getUsersPage(state),
        limit: getUsersLimit(state),
        isLoadingUsers: getUsersLoadingUser(state),
        followingInProgress: getUsersFollowing(state),
        haveUsers: getHaveUsers(state)
    }
}

export default connect(mapStateToProps, { subscribe, unsubscribe, getUsers })(UsersContainer)