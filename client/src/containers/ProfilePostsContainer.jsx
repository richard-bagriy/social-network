import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getProfilePosts } from '../store/ProfilePage/selectors'
import { getUserImages } from '../store/Auth/selectors'
import { addPost, deletePost } from '../store/ProfilePage/effects'
import withUserID from '../hoc/withUserID'
import Posts from '../components/common/Posts'

const ProfilePostsContainer = ({
    authId,
    userId,
    posts,
    addPost,
    deletePost,
    images: { photo }
}) => {

    return <Posts
        posts={posts}
        addPost={addPost}
        deletePost={deletePost}
        profileImage={photo}
        postId={userId}
        authId={authId}
    />
} 

const mapStateToProps = state => ({
    posts: getProfilePosts(state),
    images: getUserImages(state)
})

export default compose(
    connect(mapStateToProps, { addPost, deletePost } ),
    withUserID
)(ProfilePostsContainer)