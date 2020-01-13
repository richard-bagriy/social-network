import React from 'react'
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';

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
                : ( <div className="p-20 border color-grey text-center font-bold bg-white">You don't have any posts</div> )
                
            }
        </div>
    )
}

export default Posts;