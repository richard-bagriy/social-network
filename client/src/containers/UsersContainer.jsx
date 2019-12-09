import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, getUsers } from '../store/UsersPage/effects';
import Users from '../components/Users/Users';
import { 
    getUsersPage, 
    getUsersLimit, 
    getUsersLoadingUser, 
    getUsersFollowing, 
    getUsersSelector 
} from '../store/UsersPage/selectors';


class UsersContainer extends React.PureComponent {

    state = {
        filterText : '',
    }

    componentDidMount() {
        this.props.getUsers(this.props.limit, this.props.page);
        this._autoLoadUsers();
    }

    _autoLoadUsers() {
        document.addEventListener('scroll', () => {
            let endOfPage = document.documentElement.scrollHeight - (window.pageYOffset + window.innerHeight);

            if (document.querySelector('#users-wrapper') && endOfPage <= 200 && !this.state.filterText) {
                !this.props.isLoadingUsers && this.props.getUsers(this.props.limit, this.props.page);
            }
        })
    }

    changeFilterText(filterText) {
        this.setState({filterText})
    }

    getUsers() {
        let filterText = this.state.filterText.toLowerCase();
        
        if (filterText) {
            return [...this.props.users].filter(u => u.name.toLowerCase().includes(filterText));
        }

        return this.props.users;
    }
    
    render() {
        const users = this.getUsers();

        return (
            <Users
                changeFilterText={this.changeFilterText.bind(this)}
                filterUsers={users}
                {...this.props}
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
        followingInProgress: getUsersFollowing(state)
    }
}

export default connect(mapStateToProps, {follow, unfollow, getUsers})(UsersContainer)