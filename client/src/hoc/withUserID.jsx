import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getAuthUserId } from '../store/Auth/selectors';

export default Component => {
    
    class WithUserId extends React.Component {
        
        render() {
            const { id } = this.props.match.params;
            const userId = id ? id : this.props.authId;
            return <Component userId={userId} {...this.props} />
        }

    }

    const mapStateToProps = state => ({ authId: getAuthUserId(state) })

    return compose(
        connect(mapStateToProps),
        withRouter
    )(WithUserId)
}