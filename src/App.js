import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Post from './components/Post';
import React, { useState, useEffect } from 'react'
import { auth, db } from './Firebase'
import { ContextProvider } from './components/contexts/ProfileContext'

function App() {
  document.title = 'Instagram'

  const [posts, setPosts] = useState([]);
  const [profileinfo, setProfileinfo] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
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
  }, [])

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
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
      <ContextProvider value={profileinfo}>
        <Header />
        {
          posts.map(({ id, post }) => <Post postId={id} caption={post.caption} imageurl={post.imageurl} profilepicurl={post.profilepicurl} postusername={post.displayName} key={id} />)
        }
        <Footer profileinfo={profileinfo} />
      </ContextProvider>
    </div>
  );
}

export default App;
