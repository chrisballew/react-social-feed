import React, { useState } from 'react';
import CreatePost from './Components/CreatePost';

function App() {

  const [posts, setPosts] = useState

  function addNewPost(post){
    let tempPosts = [post, ...posts]
    setPosts(tempPosts)
  }

  return (
    <div className="App">
      <CreatePost addNewPost={addNewPost}/>
      
    </div>
  );
}

export default App;