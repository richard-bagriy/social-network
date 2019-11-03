import React from 'react'
import Post from './Post/Post';
import style from './Posts.module.css';
import NewPostContainer from './NewPost/NewPostContainer';

const Posts = (props) => {
    
    return (
        <div>
            <NewPostContainer />
            <div className={style.postsWrapper}>
                { props.posts.map( p => <Post message={p.message} count={p.count} key={p.id} /> ) }
            </div>
        </div>
    )
}

export default Posts;