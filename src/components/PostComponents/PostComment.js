import React from 'react'


function PostComment({ caption, postusername }) {
    return (
        <div className="Post_commentsection">
            <b>{postusername} :</b> {caption}
        </div>
    )
}

export default PostComment
