import React, { useState } from 'react';
import './Buttons.css'


const LikeButton = (props) => {

    const [likeButtonClass, setLikeButtonClass] =useState('inactive');
    const [dislikeButtonClass, setDiskikeButtonClass] =useState('inactive');

    function LikeClick(){
        if(likeButtonClass === 'inactive'){
            setLikeButtonClass('active');
            setDiskikeButtonClass('inactive');
        }
    }

    function DislikeClick(){
        if(dislikeButtonClass === 'inactive'){
            setLikeButtonClass('inactive');
            setDiskikeButtonClass('active');
        }
    }

    return (
    <div>
        <button type='button' className={likeButtonClass} onClick={LikeClick}>
            Like
        </button>
        <button type='button' className={dislikeButtonClass} onClick={DislikeClick}>
            Dislike
        </button>
    </div> );
}
 
export default LikeButton;