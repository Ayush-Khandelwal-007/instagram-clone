import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import React, { useState, useEffect } from 'react'
import { auth, db } from './Firebase'

function App() {
  document.title = 'Instagram'

  const [posts, setPosts] = useState([]);
  const [profileinfo, setProfileinfo] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setProfileinfo(authUser);
        if (authUser.displayName) {

        }
        else {
          return authUser.updateProfile({
            displayName: profileinfo.username,
          });
        }
      }
      else {
        setProfileinfo(null);
      }
    })
    return () => {
      unsubscribe();
    }
  }, [profileinfo])

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          post: doc.data()
        }
      }))
    })
  }
    , [])

  return (
    <div className="App">
      <Header />
        {
          posts.map(({ id, post }) => <Post caption={post.caption} imageurl={post.imageurl} profilepicurl={post.profilepicurl} postusername={post.username} key={id} />)
        }
    </div>
  );
}

export default App;
