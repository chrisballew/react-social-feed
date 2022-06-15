import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts'

function App() {
  const [posts, setPosts] = useState([])

  function addNewPost(post) {
    let tempPosts = [post, ...posts];

    setPosts(tempPosts)
  }

  function onLikeClick(index) {
    let newTempPosts = [...posts];
    if (newTempPosts[index].reaction === "neutral" || newTempPosts[index].reaction === 'disliked') {
      newTempPosts[index].reaction = "liked";
    } else {
      newTempPosts[index].reaction = "neutral";
    }
    setPosts(newTempPosts)
  }

  function onDislikeClick(index) {
    let newTempPosts = [...posts];
    if (newTempPosts[index].reaction === "neutral" || newTempPosts[index].reaction === 'liked') {
      newTempPosts[index].reaction = 'disliked';
    } else {
      newTempPosts[index].reaction = 'neutral';
    }
    setPosts(newTempPosts)
  }

  return (
    <div>
      <div> </div>
      <div className="div2"> </div>
      <div className="div3">
      <div className='container-fluid'>
      <div className='row'>
        </div>
          <div className="border-box">
            <CreatePost addNewPostProperty={addNewPost} />
          </div>
          <div className="border-box">
            <DisplayPosts parentPosts={posts} onLikeClick={onLikeClick} onDislikeClick={onDislikeClick} />
          </div>
    </div>
      </div>
      <div className="div4"> </div>
      <div className="div5"> </div>
    </div>
  );
}

export default App;