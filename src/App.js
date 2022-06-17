import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])

  function addNewPost(post) {
    let tempPosts = [post, ...posts];

    setPosts(tempPosts)
  }



  return (
    <div>
          <div className="border-box">
            <CreatePost addNewPostProperty={addNewPost} />
          </div>
          <div className="border-box">
            <DisplayPosts parentPosts={posts} />
          </div>
    </div>
  );
}

export default App;