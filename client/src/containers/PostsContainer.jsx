import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withUserID from '../hoc/withUserID'
import { getProfilePosts } from '../store/ProfilePage/selectors'
import { getUserImage } from '../store/Auth/selectors'
import { addPost } from '../store/ProfilePage/effects'
import Posts from '../components/Profle/Posts/Posts'


const PostsContainer = props => <Posts {...props} />

const mapStateToProps = state => ({
    posts: getProfilePosts(state),
    profileImage: getUserImage(state)
})

export default compose(
    connect(mapStateToProps, { addPost } ),
    withUserID
)(PostsContainer)