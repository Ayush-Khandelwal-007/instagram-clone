import React from 'react'
import PostComment from './PostComponents/PostComment'
import PostHeader from './PostComponents/PostHeader'
import './PostComponents/Post.css';


function Post({ caption, imageurl, profilepicurl, postusername }) {

    return (
        <div className="Post">
            <PostHeader postusername={postusername} profilepicurl={profilepicurl} />
            <img
                className="Post_image"
                src={imageurl}
                alt={imageurl}
            ></img>
            <PostComment caption={caption} postusername={postusername} />
        </div>
    )
}

export default Post
