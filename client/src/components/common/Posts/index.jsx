import React from 'react'
import NewPost from './NewPost'
import DeletePost from './DeletePost'
import Post from './Post'
import Message from '../Message'
import { generateImagePath } from '../../../utils/helper'
import style from './style.module.css'

export default ({
    posts,
    addPost,
    deletePost,
    profileImage,
    postId,
    authId,
}) => {

    const submitAddPost = ({ message, postId }) => addPost({ message, postId })

    const submitDeletePost = ({ userId, postId }) =>  deletePost({ userId, postId })
    
    const image = generateImagePath(profileImage)

    return <>

        <NewPost profileImage={image} onSubmit={submitAddPost} postId={postId} />

        { posts.length 
            ? <div className="border p-20 bg-white">
                {
                    posts.map(post => {
                        const { 
                            _id,
                            userId,
                            message,
                            date,
                            name,
                            image 
                        }  = post;

                        const canDelete = userId === authId;
                        
                        return <div className={style.wrapper} key={_id}>
                            <Post
                                date={date}
                                userName={name}
                                userImage={image}
                                message={message}
                            />
                            { canDelete && <DeletePost onSubmit={submitDeletePost} userId={postId} postId={_id} /> }
                        </div>
                    })
                }
            </div>
            : <Message message="You don't have any posts" />
        }

    </>
}