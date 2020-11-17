// import React,{useContext} from 'react'
import React from 'react'
import PostComment from './PostComponents/PostComment'
import PostHeader from './PostComponents/PostHeader'
import './PostComponents/Post.css';
// import {ContextConsumer} from './contexts/ProfileContext'

function Post({caption,imageurl,postusername}) {
    // const postinfo=useContext(ContextConsumer);
    return (
        <div className="Post">
            <PostHeader postusername={postusername}/>
            <img
                className="Post_image"
                src={imageurl}
                alt={imageurl}
            ></img>
            <PostComment caption={caption} postusername={postusername}/> 
        </div>
    )
}

export default Post
