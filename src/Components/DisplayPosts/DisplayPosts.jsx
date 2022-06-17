import React from 'react';
import LikeButton from '../Buttons.jsx/Buttons';

const DisplayPosts = (props) => {
    return ( 
        <table className="borderLine">
          {props.parentPosts.map((post, index) => {
            return (
                <tbody>
                    <tr style={{'marginTop': '1em'}}>
                        <th>{post.Author}</th>
                    </tr>
                    <tr style={{'marginTop': '1em'}}>
                        <td>{post.Post}</td>
                    </tr>
                    <tr style={{'marginTop': '1em'}}>
                    <td><LikeButton onLikeClick={props.LikeClick} onDislikeClick={props.DislikeClick} index={index} post={post}  /></td>
                    </tr>
                </tbody>
            );
          })}
      </table>
     );
}
 
    export default DisplayPosts;