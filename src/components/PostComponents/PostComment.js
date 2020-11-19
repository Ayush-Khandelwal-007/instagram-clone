import React, { useState, useEffect } from 'react'
import { db } from '../../Firebase'
import AddComment from './AddComment';

function PostComment({ postId, caption, postusername }) {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        if(postId){
            db.collection('posts').doc(postId).collection("comments").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
                setComments(snapshot.docs.map((doc) => {
                  return {
                    post: doc.data()
                  }
                }))
              })
        }
      }
        , [postId])

    return (
        <div className="Post_commentsection">
            <div className="Caption_section">
                <strong>{postusername} :</strong> {caption}
            </div>
            <div className="Comment_section">
                {comments.map((comment) =>(
                        <p>
                            <strong>{comment.username} :</strong> {comment.text}
                        </p>)
                    )
                }
            </div>
            <AddComment postId={postId} />
        </div>
    )
}

export default PostComment
