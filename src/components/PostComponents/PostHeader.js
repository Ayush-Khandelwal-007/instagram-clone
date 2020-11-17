import React,{useContext} from 'react'
import Avatar from '@material-ui/core/Avatar'
import {ContextConsumer} from '../contexts/ProfileContext'


function PostHeader({postusername}) {
    const postinfo=useContext(ContextConsumer);
    return (
        <div className="Post_header">
            <Avatar
            className="Avatar"
            alt={postinfo.username}
            src={postinfo.profilepicurl}
            />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <strong>{postusername}</strong>
        </div>
    )
}

export default PostHeader
