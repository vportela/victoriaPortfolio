import React from 'react';

const Likes = (props) => (
    
        <div>
            <h3>Likes:</h3>
            <div>
            {props.likes.map(likes => <ul key={likes}>{likes}</ul>)}
            </div>
        </div>
    
    
  );

export default Likes;