
import React, { useState } from 'react';

const CreatePost = (props) => {

    const [postAuthor, setPostAuthor] = useState('')
    const [postBody, setPostBody] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            Author: postAuthor,
            Post: postBody,
            timestamp: Date()
        }
        props.addNewPost(newPost);
    }

    return ( 
        <div className='displayedPost'>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type='text' value = {postAuthor} onChange={(event) => {setPostAuthor(event.target.value)}}/>
                <label>Post</label>
                <input type='text' value = {postBody} onChange={(event) => {setPostBody(event.target.value)}}/>
                <button type = 'submit'>Post</button>
            </form>
        </div>
    );
}

 
export default CreatePost;