import React from 'react';

const LikeButton = (props) => {


    return ( <div>
        <button type='button' className={`${props.post.reaction==='liked'?'liked':'neutral'} likeBtn`} onClick={()=>props.onLikeClick(props.index)}>Like</button>
        <button type='button' className={`${props.post.reaction==='disliked'?'disliked':'neutral'} likeBtn`} onClick={()=>props.onDislikeClick(props.index)}>Dislike</button>
    </div> );
}
 
export default LikeButton;