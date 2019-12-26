import React from 'react'
import Post from './Post/Post';
import style from './style.module.css';
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
                ? <div className={style.postsWrapper}>
                        { posts.map( p => <Post message={p.message} count={p.count} key={p.id} /> ) }
                </div>
                : (<div>You don't have a posts</div>)
            }
        </div>
    )
}

export default Posts;