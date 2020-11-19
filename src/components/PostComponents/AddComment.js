import React, { useState, useEffect } from 'react'
import { BsFillCaretRightFill,BsCaretRight } from 'react-icons/bs';
import { db, auth } from '../../Firebase'
import { Input } from '@material-ui/core'
import firebase from 'firebase'


function AddComment({postId}) {
    const [comment, setComment] = useState('');

    const [profileinfo, setProfileinfo] = useState({});

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setProfileinfo(authUser);
            }
            else {
                console.log('app');
                setProfileinfo(null);
            }
        })
        return () => {
            unsubscribe();
        }
    }, [profileinfo])

    const PostComment = (event) => {
        event.preventDefault();
        db.collection("posts").doc(postId).collection("comments").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username:profileinfo.displayName,
            text:comment
        })
        setComment('');
    }
    
    return (
        <div>
            <form className='Comment_form'>
                <Input
                    className="comment_input"
                    placeholder="Add a comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button
                    className='Comment_Post_Button'
                    disabled={!comment}
                    type='submit'
                    onClick={PostComment}
                >
                    {
                        comment?(<BsFillCaretRightFill className="arrow" size="2em" color="#2460bf"/>
                        ):(
                            <BsCaretRight className="arrow" size="2em" color="#2460bf"/>
                        )
                    }
                    
                </button>
            </form>
        </div>
    )
}

export default AddComment
