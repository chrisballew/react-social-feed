import React, { useState } from 'react';

const CreatePost = (props) => {

    const [userName, setUserName] = useState("")
    const [postBody, setPostBody] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        let newPost = {
            userName: userName,
            postBody: postBody
        }
        props.addNewPost(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)}/>
            <label>Post</label>
            <textarea value={postBody} onChange={(event) => setPostBody(event.target.value)}>placeholder</textarea>
            <button type='submit'>Create</button>
        </form>
     );
}
 
export default CreatePost;