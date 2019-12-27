import React from 'react'
import { connect } from 'react-redux'
import { subscribe, unsubscribe } from '../../../../store/UsersPage/effects';
import { getUsersFollowing } from '../../../../store/UsersPage/selectors';
import style from './style.module.css'


const Button = ({
    subscribed, 
    _id,
    followingInProgress,
    unsubscribe,
    subscribe
}) => {

    const onClick  = (id) => subscribed ? unsubscribe(id) : subscribe(id);
    const disabled = followingInProgress.some(id => id === _id);
    const text     = subscribed ? 'Unfollow' : 'Follow';

    return (
        <button disabled={ disabled } className={ style.btn } onClick={ onClick.bind(null, _id) }>
            { text }
        </button> 
    )
}

const mapStateToProps = (state) => {
    return {
        followingInProgress: getUsersFollowing(state)
    }
}

export default connect( mapStateToProps, { subscribe, unsubscribe } )(Button)