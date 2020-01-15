import React from 'react'
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';
import Message from '../../common/Message';

import { generateImagePath } from '../../../utils/helper';

const Posts = ({ posts, addPost, profileImage }) => {

    const handleSubmit = ({ message }) => {
        addPost(message);
    }

    const image = generateImagePath(profileImage);

    return (
        <div>
            <NewPost profileImage={image} onSubmit={handleSubmit} />
            { posts.length 
                ? posts.map( p => <Post message={p.message} count={p.count} key={p.id} /> )
                : <Message message="You don't have any posts" />
            }
        </div>
    )
}

export default Posts;