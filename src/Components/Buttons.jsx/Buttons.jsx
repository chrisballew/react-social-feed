import React, { useState } from 'react';

const LikeButton = (props) => {

    return ( <div>
        <button type='button' className={`${props.post.reaction==='liked'?'liked':'neutral'} likeBtn`} onClick={()=>props.onLikeClick(props.index)}>
            Like
            <span class="LikeCount" >0</span>
        </button>
        <button type='button' className={`${props.post.reaction==='disliked'?'disliked':'neutral'} likeBtn`} onClick={()=>props.onDislikeClick(props.index)}>
            Dislike
            <span className="DislikeCount" >0</span>
        </button>
    </div> );
}
 
export default LikeButton;